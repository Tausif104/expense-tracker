import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Expense Tracker',
  description: 'Next.js expense tracker app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}  antialiased`}>
        <Header />
        <main className='container mx-auto min-h-[80vh] px-5'>{children}</main>
        <Toaster position='top-center' />
        <Footer />
      </body>
    </html>
  )
}
