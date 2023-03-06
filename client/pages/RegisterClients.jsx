import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";

function RegisterClients() {
    const FechaActual = Date.now();
    const Hoy = new Date(FechaActual);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
        <Container fluid className='border rounded x' style={{ height: 'auto' }}>

            <div className='text-center mt-4 mb-5'><h3>Ingrese los Datos del Cliente</h3></div>

            <Form className='me-3 ms-3' onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group as={Row} className="mt-3 mb-3 text-center" controlId="formPlaintextEmail">

                    <Col lg="4" className='mt-3 mb-3'>
                        <Form.Control type="text" placeholder="Nombre" {...register('firstName', {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            },
                            maxLength: {
                                value: 45,
                                message: "La longitud maxima es de 45"
                            }
                        })} />
                        {errors.nombre && <p></p>}
                    </Col>

                    <Col lg="4" className='mt-3 mb-3'>
                        <Form.Control type="text" placeholder="Apellido" {...register('lastName')} />
                    </Col>

                    <Col lg="4" className='mt-3 mb-3'>
                        <Form.Control type="text" placeholder="companyName" {...register('companyName')} />
                    </Col>

                    <Col lg='4' className='mt-3 mb-3'>
                        <Form.Select defaultValue="Choose..." {...register('clientType')}>
                            <option>NATURAL</option>
                            <option>JURIDICO</option>
                        </Form.Select>
                    </Col>

                    <Col lg="4" className='mt-3 mb-2'>
                        <Form.Control type="date" {...register('birthDate')} />
                    </Col>

                    <Col lg='4' className='mt-3 mb-3'>
                        <Form.Select defaultValue="Choose..." {...register('gender')}>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </Form.Select>
                    </Col>

                    <Col lg="4" className='mt-3 mb-3'>
                        <Form.Control type="text" placeholder="Rif" {...register('idCardRif')} />
                    </Col>

                    <Col lg="4" className='mt-3 mb-3'>
                        <Form.Control type="text" placeholder="Telefono" {...register('phone')} />
                    </Col>


                    <Row className='d-flex justify-content-center'>
                        <Col lg='12' className='mt-3 mb-3'><h4>Foto de Perfil</h4></Col>
                        <Col lg='12' className='mt-2 mb-3'><div className='d-flex justify-content-center'><div style={{ width: 150, height: 150, backgroundColor: 'powderblue', borderRadius: 100 }}></div></div></Col>
                        <Col lg='8' className='mt-2 mb-2'>
                            <Form.Group controlId="formFile" className="">
                                <Form.Label className='mb-3'>Cargue foto de perfil</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group></Col>
                    </Row>

                    <Col lg='12' className='mt-3 mb-3'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>

                    <Col lg='12' className='mt-3 mb-3'>
                        <label>
                            <span className='x1 me-4'>1</span>
                        </label>
                        <label>
                            <span className='x2'>2</span>
                        </label>
                    </Col>

                </Form.Group>
            </Form>
            
        </Container>
        <br /><br /><br />
        </>
    )
}

export default RegisterClients