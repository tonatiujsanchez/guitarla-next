import Image from 'next/image'
import styles from '../styles/Notificacion.module.css'

const Notificacion = ({producto='Producto agregado'}) => {
  return (
    <div className={styles.notificacion}>
        <Image 
          width={24}
          height={24}
          src="/img/carrito-black.png"
          alt='Icono de Carrito'
          title='Icono de Carrito'
          />
        <p>{ producto } al carrito</p>
    </div>
  )
}

export default Notificacion