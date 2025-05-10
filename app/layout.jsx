import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abstruckpenguin',
  description: 'The $ATP token and associated artworks are for entertainment purposes only and do not constitute investment, security, or financial advice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
