import Classnames from "classnames"
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import { useEffect } from "react"
import Navbar from "./molecular/Navbar"
import Footer from "./molecular/Footer"

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter()

  useEffect(()=> {
    const handleRouteChange = () => NProgress.start()

    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", () => NProgress.done())
    router.events.on("routeChangeError", () => NProgress.done())

    return () => router.events.off("routeChangeStart", handleRouteChange)
  }, [])


  return (
    <div className={Classnames({ "bg-dark": dark, "bg-light": !dark })} style={{overflow: 'auto'}}>
      <Navbar/>
      <main className="container py-4">
        {title && (
          <h1 className={Classnames('text-center', { 'text-light': dark })}>{title}</h1>
        )}
        {children}
      </main>
      { footer && ( <Footer/> )}
    </div>
  )
}

Layout.prototype = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  footer: PropTypes.bool,
  dark: PropTypes.bool
}

export default Layout