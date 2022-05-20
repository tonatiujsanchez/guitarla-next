import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';
import styles from '../styles/Blog.module.css'

const Blog = ({ entradas }) => {

    return (
        <Layout pagina = 'Blog'>
            <main className={`contenedor ${ styles.blog_main }`}>
                <ListadoBlog entradas={entradas} titulo="Blog" />
            </main>
        </Layout>
    )
}




export async function getServerSideProps() {
    
    const url = `${process.env.API_URL}/blogs`
    const resp = await fetch( url )
    const entradas = await resp.json()

    return {
        props: {
            entradas
        }
    }
}

export default Blog