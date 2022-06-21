import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../Components/Layout"
import Navbar from "../Components/NavBar"

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <Layout>
    <Navbar />
    <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
