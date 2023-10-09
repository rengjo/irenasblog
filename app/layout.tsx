import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Irena's Blog",
  description: 'Created by Irena Gjorgijeva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
