import ReactMarkdown from 'react-markdown'
import styles from '../styles/ListadoCursos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
const ListadoCursos = ({ cursos }) => {

    return (
        <section>
            {
                cursos.map(curso => (
                    <article key={curso.id} className={styles.curso}>
                        <div className={ styles.foto }>
                            <Image 
                                width={800}
                                height={600}
                                src={ curso.imagen.url }
                                alt={`Imagen ${ curso.titulo }`}
                                title={`Imagen ${ curso.titulo }`} />
                        </div>
                        <div className={styles.descripcion}>
                            <h3>{ curso.titulo }</h3>
                            <ReactMarkdown className={ styles.contenido } >{ curso.contenido }</ReactMarkdown>
                            <p className={ styles.fecha }>Última actualización: { formatearFecha( curso.published_at ) }</p>
                            <p className={ styles.instructor }>Por: { curso.instructor }</p>
                            <Link href={`/curso/${curso.url}`}>
                                <a className={styles.enlace}>Ver Curso</a>
                            </Link>
                        </div>
                        <div className={styles.precio}>
                            <p>$ { curso.precio }</p>
                            <p>$ 2099</p>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

export default ListadoCursos