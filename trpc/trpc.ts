//import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { isTeacher } from '@/lib/teacher'
import { auth } from '@clerk/nextjs'
import { TRPCError, initTRPC } from '@trpc/server'
import { redirect } from 'next/navigation'

const t = initTRPC.create()
const middleware = t.middleware

const isAuth = middleware(async (opts) => {
/*   const { getUser } = getKindeServerSession()
  const user = getUser() */

  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/");
  }


  if (!userId ) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return opts.next({
    ctx: {
      userId
    },
  })
})

export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)