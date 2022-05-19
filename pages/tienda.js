import Layout from '../components/Layout'
import Listado from '../components/Listado';
import styles from '../styles/Listado.module.css'


const Tienda = ({ guitarras }) => {

    return (
        <Layout pagina = 'Tienda'>
            <main className={`contenedor ${styles.tienda_main}`}>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado guitarras={ guitarras } />
            </main>
        </Layout>
    )
}


export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`
    const resp = await fetch(url)
    const guitarras = await resp.json()

    return {
        props: {
            guitarras
        }
    }
}

export default Tienda