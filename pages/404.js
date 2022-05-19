import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NoEncontrado.module.css'


const NoEncontrado = () => {
    return (
        <Layout pagina="Página no encontrada">
            <main className={styles.no_encontrado}>
                <h1 className='heading'>Página no encontrada</h1>
                <Link href="/">
                    <a>Volver al inicio</a>
                </Link>
            </main>
        </Layout>
    )
}

export default NoEncontrado