import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, pagina, guitarra }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA | {pagina}</title>
                <meta name="description" content="Sitio Web de venta de Guitarras" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <Header guitarra={ guitarra } />

            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarra: null
}

export default Layout