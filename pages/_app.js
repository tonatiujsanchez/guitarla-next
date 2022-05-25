import { useEffect, useState } from 'react'
import NextNProgress from "nextjs-progressbar";
import '../styles/normalize.css'
import '../styles/globals.css'

const KEY_STORAGE = 'guitarla_carrito_1653095354488'

function MyApp({ Component, pageProps }) {

    
    const [carrito, setCarrito] = useState([])


    useEffect(()=>{
        const carritoLS = JSON.parse( localStorage.getItem(KEY_STORAGE) ) ?? []
        if( carritoLS.length > 0 ){
            setCarrito(carritoLS)
        }
    },[])


    useEffect(()=>{
        localStorage.setItem(KEY_STORAGE, JSON.stringify(carrito))
    }, [carrito])


    const agregarCarrito = ( productoNuevo ) => {

        const existeProducto = carrito.some( productoSome => productoSome.id === productoNuevo.id )

        if( existeProducto ){
            const carritoActualizado = carrito.map( productoMap => (
                productoMap.id === productoNuevo.id ? productoNuevo : productoMap
            ))
            setCarrito([ ...carritoActualizado ])
        }else{
            setCarrito([ ...carrito, productoNuevo ])
        }
    }

    
    const actualizarCantidad = ( idProducto, cantidad ) => {
        
        const carritoActualizado = carrito.map( producto => (
            producto.id === idProducto ? { ...producto, cantidad } : producto
        ))

        setCarrito([ ...carritoActualizado ])
    }


    const eliminarProducto = ( idProducto ) => {
        const carritoActualizado = carrito.filter( producto => producto.id !== idProducto)
        setCarrito([ ...carritoActualizado ])
    }


    const limpiarCarrito = () => {
        setCarrito([])
    }


    return (
        <>
            <NextNProgress color="#e99401" height={4} />
            <Component 
                        {...pageProps} 
                        carrito={carrito}
                        agregarCarrito={agregarCarrito}
                        actualizarCantidad={actualizarCantidad}
                        eliminarProducto={eliminarProducto}
                        limpiarCarrito={limpiarCarrito} />
        </>
    )
}

export default MyApp
