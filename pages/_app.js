import Navbar from '@/components/Navbar'
import Sidewar from '@/components/Sidewar'
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Sidewar />
    <Component {...pageProps} />
  </>
}
