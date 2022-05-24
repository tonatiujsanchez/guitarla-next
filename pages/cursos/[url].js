import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers';
import styles from '../../styles/CursoDetalles.module.css'

const CursoDetalles = ({ curso, agregarCarrito }) => {
    const { id, titulo, contenido, imagen, precio, alumnos, instructor, descripcion, updatedAt } = curso

    const addCarrito = () => {
        const CursoSeleccionada = {
            id,
            imagen: imagen.url,
            nombre: titulo,
            precio,
            cantidad: 1,
            tipo: 'curso'
        }
        agregarCarrito(CursoSeleccionada)
    }
    return (
        <Layout pagina={titulo}>
            <article className="contenedor">
                <section className={styles.curso_encabezado}>
                    <div className={styles.curso_contenido}>
                        <div className={styles.curso_contenido_img}>
                            <Image
                                layout='responsive'
                                width={800}
                                height={500}
                                src={imagen.url}
                                alt={`Imagen ${titulo}`}
                                title={`Imagen ${titulo}`} />
                        </div>
                        <div className={styles.curso_precio}>
                            <p>Accede ahora por solo: <span>${precio}</span></p>
                            
                        </div>
                        <button
                            onClick={addCarrito}
                            className={styles.curso_contenido_btn} >
                                Agregar al Carrito
                        </button>
                    </div>
                    <div className={styles.curso_descripcion}>
                        <div>
                            <h1 className={styles.curso_titulo}>{titulo}</h1>
                            <ReactMarkdown className={styles.curso_descripcion_contenido}>{contenido}</ReactMarkdown>
                            <p>Por: {instructor}</p>
                            <div className={styles.curso_actualizacion}>
                                <p>
                                    <Image
                                        width={24} 
                                        height={24}
                                        src='/img/user.png' />
                                    <span className={styles.curso_actualizacion_alumnos}>{alumnos} Estudiantes</span></p>
                                <p>Actualizado el { formatearFecha(updatedAt) }</p>
                            </div>
                        </div>
                        <div className={styles.descripcion}>
                            <h3>Descripción</h3>
                            <ReactMarkdown>{descripcion}</ReactMarkdown>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}


export async function getServerSideProps({ query: { url } }) {

    const urlCurso = `${process.env.API_URL}/cursos?url=${url}`
    const resp = await fetch(urlCurso)
    const curso = await resp.json()

    return {
        props: {
            curso: curso[0]
        }
    }
}



export default CursoDetalles