/* import { db } from '@/lib/db'
//import TaleFeed from '../TaleFeed'
//import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import LandingCourseCards from './landing-course-cards'

const GeneralFeed = async () => {
  const courses = await db.course.findMany({
    where:{
        trending: true
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      title: true,
      category: true,
      trending: true,
    },
    take: 8, //INFINITE_SCROLL_PAGINATION_RESULTS, 4 to demonstrate infinite scroll, should be higher in production 
  })

  return <LandingCourseCards items={[...courses]}/>
}

export default GeneralFeed */