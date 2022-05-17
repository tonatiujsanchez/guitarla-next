import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'
import ActiveLink from './ActiveLink'

const Footer = () => {
    
    const { pathname } = useRouter()


    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <ul className={styles.navlist}>
                        <li className={`${pathname === '/' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Inicio' href="/" />
                        </li> 
                        <li className={`${pathname === '/nosotros' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Nosotros' href="/nosotros" />
                        </li> 
                        <li className={`${pathname === '/blog' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Blog' href="/blog" />
                        </li> 
                        <li className={`${pathname === '/tienda' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Tienda' href="/tienda" />
                        </li> 
                    </ul>
                </nav>
                <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer