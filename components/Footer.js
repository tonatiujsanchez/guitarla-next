import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import ActiveLink from './ActiveLink'

const Footer = () => {
    
    const { pathname } = useRouter()


    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <Link href="/">
                    <a>
                        <Image
                            width="250"
                            height="100"
                            src="/img/logo.svg"
                            alt='Logo de GuitarLA'
                            title='Logo de GuitarLA' />
                    </a>
                </Link>
                <nav className={styles.navegacion}>
                    <ul className={styles.navlist}>
                        <li className={`${pathname === '/' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Inicio' href="/" />
                        </li> 
                        <li className={`${pathname === '/tienda' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Tienda' href="/tienda" />
                        </li> 
                        <li className={`${pathname === '/cursos' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Cursos' href="/cursos" />
                        </li> 
                        <li className={`${pathname === '/blog' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Blog' href="/blog" />
                        </li> 
                        <li className={`${pathname === '/nosotros' ? styles.activeLink : undefined}`}>
                            <ActiveLink text='Nosotros' href="/nosotros" />
                        </li> 
                    </ul>
                </nav>
            </div>
            <div className={styles.copy}>
                <p className={styles.copyright}>©  { new Date().getFullYear() } <a target="_blank" rel="noreferrer" href="https://twitter.com/tonatiujsanchez">Tonatiuj Sánchez</a>. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer