import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Public_Sans } from "next/font/google"
import Head from 'next/head'  // Add this line

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${publicSans.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  )
}