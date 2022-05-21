import Layout from '../components/Layout'
import ListadoCursos from '../components/ListadoCursos';
import styles from '../styles/Cursos.module.css'

const cursos = ({ cursos }) => {

    return (
        <Layout pagina="cursos">
            <main className={`contenedor ${styles.cursos_main}`}>
                <h1 className='heading'>Cursos</h1>
                <ListadoCursos cursos={cursos} />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {

    const url = `${process.env.API_URL}/cursos`
    const resp = await fetch( url )
    const cursos = await resp.json()

    return {
        props: {
            cursos
        }
    }
}


export default cursos