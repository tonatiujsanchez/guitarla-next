import Layout from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras';
import styles from '../styles/Listado.module.css'


const Tienda = ({ guitarras }) => {

    return (
        <Layout pagina = 'Tienda'>
            <main className={`contenedor ${styles.tienda_main}`}>
                <h1 className='heading'>Nuestra Colección</h1>
                <ListadoGuitarras guitarras={ guitarras } />
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