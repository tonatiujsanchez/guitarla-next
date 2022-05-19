import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'


const EntradaBlog = ({ entrada }) => {
    const { titulo, contenido, imagen, published_at } = entrada

    

    return (
        <Layout pagina = { titulo }>
            <main className='contenedor'>
                <h1 className='heading'>{ titulo }</h1>
                <article className={styles.entrada}>
                    <Image 
                        priority="true"
                        layout="responsive"
                        width={800}
                        height={600}
                        src={ imagen.url }
                        alt={`Imagen del articulo ${ titulo }`}
                        title={`Imagen del articulo ${ titulo }`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{ formatearFecha( published_at ) }</p>
                        <ReactMarkdown >{contenido}</ReactMarkdown>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


// export async function getServerSideProps({ query:{ id } }) {
    
//     const url = `${process.env.API_URL}/blogs`
//     const resp = await fetch( url )
//     const entrada = await resp.json()

//     return{
//         props: {
//             entrada
//         }
//     }
// }

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const resp = await fetch( url )
    const entradas = await resp.json()

    const paths = entradas.map( entrada => ({
        params: { id: entrada.id }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params:{ id } }) {
    
    const url = `${process.env.API_URL}/blogs/${ id }`
    const resp = await fetch( url )
    const entrada = await resp.json()

    return{
        props: {
            entrada
        }
    }
}

export default EntradaBlog