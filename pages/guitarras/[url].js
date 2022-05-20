import Layout from "../../components/Layout"
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'


const Producto = ({ guitarra }) => {
    const { descripcion, imagen, nombre, precio } = guitarra

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
            <main className={styles.guitarra_main}>
                <article className={styles.guitarra}>
                    <Image
                        priority="true"
                        layout='responsive'
                        width={180}
                        height={350}
                        src={imagen.url}
                        alt={`Imagen de una guitarra ${nombre}`} />
                    <div className={styles.contenido}>
                        <h3>{nombre}</h3>
                        <p className={styles.descripcion}>{descripcion}</p>
                        <p className={styles.precio}>${precio}</p>
                        <form className={styles.formulario}>
                            <label>Cantidad:</label>
                            <select>
                                <option value="">-- Seleciones --</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <input 
                                type="submit"
                                value='Agregar al Carrito' />
                        </form>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


export async function getServerSideProps({ query: { url } }) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const resp = await fetch(urlGuitarra)
    const guitarra = await resp.json()

    return {
        props: {
            guitarra: guitarra[0]
        }
    }
}


export default Producto
