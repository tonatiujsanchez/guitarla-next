import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './../styles/Header.module.css'
import ActiveLink from './ActiveLink'


const Header = () => {

    const { pathname } = useRouter()
    
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.navbar}>
                    <div>
                        <Link href="/">
                            <a>
                                <Image
                                    width="400"
                                    height="100"
                                    src="/img/logo.svg"
                                    alt='Logo de GuitarLA'
                                    title='Logo de GuitarLA' />
                            </a>
                        </Link>
                    </div>
                    <nav className={styles.navegacion}>
                        <ul className={styles.navlist}>
                            <li className={`${pathname === '/' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Inicio'
                                    href="/" />
                            </li>
                            <li className={`${pathname === '/nosotros' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Nosotros'
                                    href="/nosotros"/>

                            </li>
                            <li className={`${pathname === '/blog' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Blog'
                                    href="/blog" />
                            </li>
                            <li className={`${pathname === '/tienda' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Tienda'
                                    href="/tienda" />
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header