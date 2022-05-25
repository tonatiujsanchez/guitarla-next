import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './../styles/Header.module.css'
import ActiveLink from './ActiveLink'
import { useState } from 'react'


const Header = ({ guitarra }) => {

    const [mostrarMenu, setMostrarMenu] = useState(false)
    const { pathname } = useRouter()

    const ocultarMenu= () => {
        setMostrarMenu(false)
    }
    
    
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.navbar}>
                    <div>
                        <Link href="/">
                            <a>
                                <Image
                                    width="350"
                                    height="100"
                                    src="/img/logo.svg"
                                    alt='Logo de GuitarLA'
                                    title='Logo de GuitarLA' />
                            </a>
                        </Link>
                    </div>
                    <nav className={`${styles.navegacion} ${mostrarMenu ? styles.mostrarMenu: null}`}>
                        <ul className={styles.navlist}>
                            <li onClick={ocultarMenu} className={`${pathname === '/' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Inicio'
                                    href="/" />
                            </li>
                            <li onClick={ocultarMenu} className={`${pathname === '/tienda' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Tienda'
                                    href="/tienda" />
                            </li>
                            <li onClick={ocultarMenu} className={`${pathname === '/cursos' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Cursos'
                                    href="/cursos" />
                            </li>
                            <li onClick={ocultarMenu} className={`${pathname === '/blog' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Blog'
                                    href="/blog" />
                            </li>
                            <li onClick={ocultarMenu} className={`${pathname === '/nosotros' ? styles.activeLink : undefined}`}>
                                <ActiveLink
                                    text='Nosotros'
                                    href="/nosotros"/>
                            </li>
                            <li onClick={ocultarMenu} className={`${styles.item_carrito} ${pathname === '/carrito' ? styles.activeLink : undefined}`}>
                                <Link href="/carrito">
                                    <a className={styles.item_carrito__enlace}>
                                        <Image width={30} height={25} src="/img/carrito.png" alt='Imgen carrito de compras' />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <button 
                            type='button'
                            className={`${styles.menu_btn} ${ styles.menu_btn_cerrar }`}
                            onClick={()=> setMostrarMenu(false)} >
                            <Image
                                layout='fixed'
                                width={28}
                                height={28}
                                src="/img/cerrar-icon.png"
                                alt='Logo de GuitarLA'
                                title='Logo de GuitarLA' />
                        </button>
                    </nav>
                    <button 
                        type='button'
                        className={styles.menu_btn}
                        onClick={()=> setMostrarMenu(true)} >
                        <Image
                            layout='fixed'
                            width={36}
                            height={36}
                            src="/img/menu-icon.png"
                            alt='Logo de GuitarLA'
                            title='Logo de GuitarLA' />
                    </button>
                </div>
                { guitarra &&
                    <div className={ styles.modelo }>
                        <span className={styles.tag}>Nuevo</span>
                        <h1>{`Modelo ${guitarra.nombre}`}</h1>
                        <p className={styles.descripcion}>{ guitarra.descripcion }</p>
                        <p className={styles.precio}>${ guitarra.precio }</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a >Ver Guitarra</a>
                        </Link>
                    </div>
                }
            </div>
            
            { pathname === '/' && (
                <div className={ styles.guitarra }>
                    <Image
                        priority="true" 
                        width={400} 
                        height={900} 
                        src="/img/header_guitarra.png" 
                        alt="Imagen de guitarra del encabezado"
                        title="Imagen de guitarra del encabezado" />
                </div>
            )}
            

        </header>
    )
}

export default Header