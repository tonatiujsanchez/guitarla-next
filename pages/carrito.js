import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'
import { useEffect, useState } from "react"

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto, limpiarCarrito }) => {

    const [total, setTotal] = useState(0)
    const [pagando, setPagando] = useState(false)
    const [pagado, setPagado] = useState(false)

    const realizarPago = () => {
        setPagando( true )

        setTimeout(() => {
            limpiarCarrito()
            setPagando( false )
            setPagado(true)
        }, 2000);
    }

    console.log(carrito);

    useEffect(()=>{
        const totalAPagar = carrito.reduce( ( total, producto )=>{
            return total + (producto.precio * producto.cantidad) 
        },0)
        setTotal( totalAPagar )
    },[carrito])
    
    return (
        <Layout pagina="Carrito">
            <main className={`contenedor ${styles.carrito_main}`}>
                <h1 className="heading">Carrito</h1>   
                {!pagado ? (
                    carrito.length > 0
                    ?<div className={styles.contenido}>
                        <div className={styles.carrito}>
                            <h2>Árticulos</h2>
                            { carrito.map(producto => (
                                    <div key={producto.id} className={styles.producto}>
                                        <div>
                                            <Image
                                                layout="responsive"
                                                width={400}
                                                height={900}
                                                src={producto.imagen}
                                                alt={`Guitarra ${producto.nombre}`}
                                                title={`Guitarra ${producto.nombre}`} />
                                        </div>
                                        <div>
                                            <p className={styles.nombre}>{producto.nombre}</p>
                                            <div className={styles.cantidad}>
                                                <p>Cantidad: </p>
                                                <select 
                                                    value={producto.cantidad} 
                                                    onChange={e => actualizarCantidad( producto.id, Number(e.target.value) )}
                                                    className={ styles.select } >

                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    
                                                </select>
                                            </div>
                                            <p className={styles.precio}>
                                                $ <span>{producto.precio}</span>
                                            </p>
                                            <p className={styles.subtotal}>
                                                Subtotal: $<span>{producto.precio * producto.cantidad}</span>
                                            </p>
                                        </div>
                                        <button 
                                            type="button" 
                                            className={styles.eliminar}
                                            onClick={ ()=> eliminarProducto( producto.id ) } >
                                            X
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.resumen}>
                            <h3>Resumen del pedido</h3>
                            <div>
                                <p>Subtotal: <span>$ { total }.00</span></p>
                                <p>Descuentos: <span>$ 0.00</span></p>
                            </div>
                            <p className={ styles.total_pagar }>Total a pagar: <span>${ total }.00</span></p>
                            <button 
                                onClick={realizarPago}
                                disabled={ pagando }
                                className={styles.btn_pagar}>
                                    {pagando
                                        ?<div className='spinner'></div>
                                        : 'Pagar'
                                    }
                                    
                                    
                            </button>
                        </div>
                    </div>
                    : <div className={styles.sin_productos}>
                        <div className={styles.sin_productos_img}>
                            <Image width={744} height={622} src="/img/carrito-page.png" />
                        </div>
                        <h3>Tu carrito está vacío</h3>
                        <Link href={`/tienda`}>
                                <a className={styles.btn_pagar}>Ir a la Tienda</a>
                        </Link>
                    </div>
                ):  <div className={`${styles.sin_productos} ${styles.compra_exitosa}`}>
                        <div className={styles.compra_exitosa_img}>
                            <Image 
                                priority="true" 
                                width={400} 
                                height={400} 
                                src="/img/check-exit.png" />
                                
                        </div>
                        <h3>Gracias por su compra</h3>
                        <Link href={`/tienda`}>
                            <a className={styles.btn_pagar}>Seguir comprando</a>
                        </Link>
                    </div>
                } 
            </main>
        </Layout>
    )
}

export default Carrito