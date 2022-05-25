import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({ entradas, titulo }) => {
    return (
        <section className={styles.seccion_blog}>
            <h2 className='heading'>{ titulo }</h2>
            <div className={`contenedor ${styles.entradas}`}>
                {
                    entradas.map(entrada => (
                        <Entrada key={entrada._id} entrada={entrada} />
                    ))
                }
            </div>
        </section>
    )
}

export default ListadoBlog