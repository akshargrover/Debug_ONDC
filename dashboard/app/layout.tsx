import type { Metadata } from 'next'
import { BackgroundWrapper } from '@/components/shared/background-wrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'ONDC Dashboard',
  description: 'ONDC Debug Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundWrapper>
          {children}
        </BackgroundWrapper>
      </body>
    </html>
  )
}
