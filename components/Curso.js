import styles from '../styles/Curso.module.css'
import ReactMarkdown from 'react-markdown'

const Curso = ({ curso }) => {

    const { contenido, titulo, imagen } = curso


    return (
        <section>
            <div className={`contenedor ${ styles.grid }`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <ReactMarkdown className={ styles.descripcion }>{contenido}</ReactMarkdown>
                    <a className={ styles.enlace } href="#">Más Información</a>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    margin-bottom: 10rem;
                    background-image: linear-gradient( to right, rgb(0 0 0 / .6), rgb( 0 0 0 / .8) ), url(${imagen.url});
                    background-size: cover;
                    background-position: center;
                }

                @media screen and ( min-width: 768px ) { 
                    section {
                        background-image: linear-gradient( to right, rgb(0 0 0 / .2), rgb( 0 0 0 / .9) ), url(${imagen.url});
                        background-size: cover;

                    }
                }
            `}</style>
        </section>


    )
}

export default Curso