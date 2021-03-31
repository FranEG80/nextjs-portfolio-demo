import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fran Enriquez &bull; Dev's portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}