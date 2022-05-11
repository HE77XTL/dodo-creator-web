import '../styles/globals.css'
import "../public/lib/pure/css/common/ui.css";
import  { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
