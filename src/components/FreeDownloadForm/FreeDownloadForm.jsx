import { Form, Button } from 'react-bootstrap'
import './FreeDownloadForm.css'

const FreeDownloadForm = () => {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Dirección de email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    No compartiremos tu email con terceros.
                </Form.Text>
            </Form.Group>

            <button type="submit" className='btn-form'>
                Descargar
            </button>
        </Form>
    )

}

export default FreeDownloadForm