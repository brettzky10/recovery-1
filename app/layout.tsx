import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { StepsProvider } from '@/components/providers/steps-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kineteck',
  description: 'Your recovery specialists.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-black-1.png",
        href: "/logo-black-1.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-black-1.png",
        href: "/logo-black-1.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
          <StepsProvider>
              <ConfettiProvider />
              <ToastProvider />
              {children}
          </StepsProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
