import React from 'react'
import { Button, Container, Row, Col, Form, FloatingLabel, Card } from 'react-bootstrap'
import { useForm } from "react-hook-form";

function Login() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container fluid className='p-5'>
            <Row>

                <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} xs={{ span: 8, offset: 2 }} className='border rounded'>
                    <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <Form.Group as={Row} className="" controlId="formPlaintextEmail">

                            <Col lg='6' className='border bg-secondary'>
                                <Col className='text center'>
                                    <p>Poner imagen o decoracion</p>
                                </Col>
                                <br />
                            </Col>
                            <Col lg='6' className='mt-3 mb-3'>
                                <Col lg={{ span: 8, offset: 2 }} md={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} xs={{ span: 8, offset: 2 }}>
                                    <FloatingLabel controlId="floatingInput"
                                        label="Identificacion"
                                        className="mb-4"><Form.Control type="text" placeholder="Id"{...register('identificacion', {
                                            required: {
                                                value: true,
                                                message: "*Campo requerido"
                                            },
                                            maxLength: {
                                                value: 7,
                                                message: "*La longitud maxima es de 7"
                                            }
                                        })} />
                                        {errors.identificacion && <span style={{ color: "red" }}>{errors.identificacion.message}</span>}
                                    </FloatingLabel>
                                </Col>

                                <Col lg={{ span: 8, offset: 2 }} md={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} xs={{ span: 8, offset: 2 }}>
                                    <FloatingLabel controlId="floatingInput"
                                        label="Password"
                                        className="mb-4"><Form.Control type="password" placeholder="Password" {...register('password', {
                                            required: {
                                                value: true,
                                                message: "*Campo requerido"
                                            },
                                            maxLength: {
                                                value: 45,
                                                message: "*La longitud maxima es de 45"
                                            }
                                        })} />
                                        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
                                    </FloatingLabel>
                                </Col>

                                <div className="d-flex justify-content-center mx-3 mb-4">
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <Col lg={{ span: 8, offset: 5 }} md={{ span: 6, offset: 5 }} sm={{ span: 6, offset: 5 }} xs={{ span: 8, offset: 5 }}    >
                                    <Button type="submit"  >Login</Button>
                                </Col>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login