import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn, constructMetadata } from '@/lib/utils'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { StepsProvider } from '@/components/providers/steps-provider';
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { SocketProvider } from '@/components/providers/socket-provider'
import TrpcProviders from '@/components/providers/trpc-provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <TrpcProviders>
      <body className={inter.className} suppressHydrationWarning={true}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
              <ConfettiProvider/>
              <ToastProvider/>
              <StepsProvider>
                {children}
              </StepsProvider>
              </QueryProvider>
              
            </SocketProvider>
          </ThemeProvider>
      </body>
      </TrpcProviders>
    </html>
    </ClerkProvider>

  )
}