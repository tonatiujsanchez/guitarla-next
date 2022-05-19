import Layout from '../components/Layout'
import Image from 'next/image'

import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout pagina = 'Nosotros'>
            <main className={`contenedor ${ styles.nosotros_main }`}>
                <h2 className='heading'>Sobre Nosotros</h2>
                <section className={styles.contenido}>
                    <Image
                        layout='responsive' 
                        width={600} 
                        height={450} 
                        src="/img/nosotros.jpg"
                        alt='Imagen de GuitarLA se la sección sobre nosotros'
                        title='Imagen sobre nosotros' />
                    <div>
                        <p>Popular belief, <strong>Lorem Ipsum</strong> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <strong>Richard McClintock</strong>, a Latin professor at <strong>Hampden-Sydney</strong> College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<strong>Written in 45 BC.</strong> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, <strong>"Lorem ipsum dolor sit amet.."</strong>, comes from a line in section 1.10.32.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type <strong>specimen book.</strong> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Nosotros