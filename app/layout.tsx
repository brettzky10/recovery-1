import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { StepsProvider } from '@/lib/context/steps';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recovr',
  description: 'Your recovery specialists.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
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
