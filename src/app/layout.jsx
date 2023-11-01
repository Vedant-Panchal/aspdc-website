import './globals.css'
import Navbar from './components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
            <html lang="en" >
                <body className={`w-screen h-screen p-0 m-0 overflow-x-hidden scale-100 ${inter.className}`}>
                    <NextTopLoader
                        color='#42b883'
                    />

                    {children}
                </body>
            </html>
    </ClerkProvider>
  )
}
