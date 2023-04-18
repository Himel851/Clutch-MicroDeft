import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../Component/Home/Main'
import Project from '../Component/Project/Project';
import Business from '../Component/Business/Business';
import Payment from '../Component/Payment/Payment';
import Experience from '../Component/Experience/Experience';
import Footer from '../Component/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Clutch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <Project />
        <Business />
        <Payment />
        <Experience />
      </main>
    </>
  )
}
