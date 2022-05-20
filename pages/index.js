import Curso from '../components/Curso';
import Layout from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras'
import ListadoBlog from '../components/ListadoBlog';
import styles from '../styles/Index.module.css'

export default function Home({guitarras, curso, entradas}) {

    return (
        <div>
            <Layout pagina = 'Inicio' guitarra={ guitarras[3] }>
                <main className={`contenedor ${styles.home_main}`}>
                    <h2 className='heading'>Nuestra Colección</h2>
                    <ListadoGuitarras guitarras={ guitarras } />
                </main>
                <Curso curso={ curso } />
                <ListadoBlog entradas={entradas} titulo="Últimas Entradas"  />
            </Layout>

        </div>
    )
}


export async function getServerSideProps() {

    const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6&_sort=createdAt:asc`
    const urlCursos= `${process.env.API_URL}/cursos`
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3`

    const [ respGuitarras, respCursos, respEntradas ] = await Promise.all([
        fetch( urlGuitarras ),
        fetch( urlCursos ),
        fetch( urlBlog ),
    ])

    const [ guitarras, curso, entradas ] = await Promise.all([
        respGuitarras.json(),
        respCursos.json(),
        respEntradas.json()
    ])


    return {
        props: {
            guitarras,
            curso,
            entradas
        }
    }
}
