import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

const inter = Inter({ subsets: ['latin'] })

// openGraph is used by social media
export const metadata: Metadata = {
  title: 'Qasir Portfolio',
  description: 'This is my portfolio',
  openGraph: {
    title: "Qasir Portfolio",
    description: "This is my portfolio",
    siteName: "qasir.co.uk",
    images: [
      {
        url: "/Qasir.jpeg",
        width: 36,
        height: 36,
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
       <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
