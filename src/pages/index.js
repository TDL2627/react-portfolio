import Head from 'next/head'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Created by TDL2627" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Landing/>

    </>
  )
}
