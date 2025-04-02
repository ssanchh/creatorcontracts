import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator Contracts',
  description: 'AI-powered platform for generating custom, legally-sound contracts for UGC creators and influencers.',
  generator: 'Creator Contracts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
