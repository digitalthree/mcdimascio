import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
