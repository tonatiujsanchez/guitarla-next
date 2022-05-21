import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'
import { useEffect, useState } from "react"

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0)

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
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Árticulos</h2>
                        {carrito.length === 0
                            ? <p>Carrito Vacio</p>
                            : carrito.map(producto => (
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
                                            <p>Cantidad:</p>
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
                        { total > 0 ? (
                            <>
                                <h3>Resumen del pedido</h3>
                                <p>Total a pagar: ${ total }</p>
                                <button className={styles.btn_pagar}>Pagar</button>
                            </>
                        ):
                        <p>No hay productos en el carrito</p>
                            
                        }
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito