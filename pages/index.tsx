import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from "react"
const Home: NextPage = () => {
  useEffect(()=>{
    fetch("/api/server")
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
      <Head>
        <title>Chat-App</title>
        <meta name="description" content=".." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
           
    </div>
  )
}

export default Home
