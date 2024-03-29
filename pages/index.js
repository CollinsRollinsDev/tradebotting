import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from '../components/Dashboard/Dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trade Botting v 1.5</title>
        <meta name="description" content="Trade Botting By Collins Rollins (Web Developer)" />
        <link rel="icon" href="/td.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      <Dashboard />
    </div>
  )
}

