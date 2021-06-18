import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Trade from '../components/TradeArea/Trade'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trade Area</title>
        <meta name="description" content="Trade Prediction Area For Crypto Currencies" />
        <link rel="icon" href="/td.png" />

      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      <Trade />
    </div>
  )
}

