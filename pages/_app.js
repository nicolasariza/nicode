import 'bootswatch/dist/lux/bootstrap.min.css';
import "prismjs/themes/prism-okaidia.css";
import Head from "next/head";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous">
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
