import React from 'react'
import './DashboardClientes.css'
import { Container, Row, Col, Stack } from "react-bootstrap";

function DashboardClientes() {


    return (
        <Container fluid className='border rounded'>
            <Row>

                <Col lg='5'>
                    <h2>Saldo: XXXX(traer valor de DB)</h2> 
                </Col>
                <Col lg={{span: 5, offset: 2}}>
                    <h2>Fecha de Pago: XX/XX/XX (traer valor de DB)</h2>
                </Col>
                <Col lg='8' className='border'>
                    <Stack gap={3} className='mt-2 mb-2'>
                        <Col lg='12' className='border border-primary d-flex justify-content-center align-content-center'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae eveniet cupiditate inventore nemo ducimus assumenda libero? Cum unde aspernatur quod hic amet dolores voluptate, impedit, eos nostrum, sapiente esse?</p>
                        </Col>
                        <Col lg='12' className='border border-primary d-flex justify-content-center align-content-center'>
                            <h2>Archivos?</h2>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Col>
                    </Stack>
                </Col>
                <Col lg='4' className='border' >
                    <h3>Notificaciones</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident quisquam tempora dolore! Possimus, nostrum porro labore dolore, non pariatur distinctio, maiores nihil temporibus doloribus velit quae voluptas aliquid cumque.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default DashboardClientes