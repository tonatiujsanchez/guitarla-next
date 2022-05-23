import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'
const Guitarra = ({ guitarra }) => {
    
    
    const { descripcion, imagen, nombre, precio, url } = guitarra
    
    
    return (
        <article className={ styles.guitarra }>
            <div className={styles.guitarra_img}>
                <Image 
                    priority="true"
                    width={400} 
                    height={900} 
                    src={imagen.url}
                    alt={`Imagen de una guitarra ${ nombre }`} />

            </div>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver Guitarra</a>
                </Link>
            </div>
        </article>    
    )
}

export default Guitarra