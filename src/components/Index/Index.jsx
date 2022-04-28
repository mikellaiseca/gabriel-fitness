import { useState } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import FreeDownloadForm from '../FreeDownloadForm/FreeDownloadForm'
import PersonalTrainer from '../images/personal-trainer.jpeg'
import FreeDownload1 from '../images/FreeDownload1.png'
import FreeDownload2 from '../images/FreeDownload2.png'
import FreeDownload3 from '../images/FreeDownload3.png'
import './Index.css'

const Index = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <ParallaxBanner
                layers={[{ image: PersonalTrainer, speed: -15 },
                ]}
                style={{ aspectRatio: '2 / 1' }}
            />

            <Container>
                <Row className='hero'>
                    <Col className='about image'>
                        Aquí va una imagen
                    </Col>
                    <Col className='about text'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam non adipisci repellendus, illum dolorum in iure illo, fugiat repellat, fuga quidem esse. Debitis vel eaque autem. Voluptatum, necessitatibus aliquam.</p>
                        <a href='/sobre-mi' className='btn-about'>Descubre más</a>
                    </Col>
                </Row>
            </Container>
            <Row className='hero-2'>
                <Col className='free-download'>
                    <div className='free-download-container'>
                        <img src={FreeDownload1} alt='free download 1' className='free-download-pic' />
                        <img src={FreeDownload2} alt='free download 2' className='free-download-pic' />
                        <img src={FreeDownload3} alt='free download 3' className='free-download-pic' />
                    </div>
                    <br></br>
                    <h3>Estás a un paso de convertir tu cuerpo y obtener el LIFESTYLE de tus sueños a través del fitness</h3>
                    <br></br>
                    <p>Te invito a entrenar una semana con este plan de entrenamiento gratuito y a probar algunas de las recetas que te ayudarán a cumplir con tus macros. Da tu máximo esfuerzo y se constante. Cuando estés listo y quieras subir de nivel, entonces nos encontraremos para hacerlo posible</p>
                    <br></br>
                    <button className='btn-dwnld' onClick={handleShow}>
                        <span>Descárgalo gratis</span>
                    </button>
                </Col>
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Empieza tu transformación hoy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FreeDownloadForm />
                </Modal.Body>
            </Modal>

            {/* <section className="about">
                <div className="bgimg-2">
                    <div className="caption">
                        <p className="border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni rerum et quasi fugit iusto nemo. Ut deleniti consequatur cumque natus consequuntur quasi modi ipsa eos illum, odio sapiente laboriosam!</p>
                    </div>
                </div>
            </section> */}

        </>

    )
}

export default Index