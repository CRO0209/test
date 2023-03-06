import { Button, Container, Row, Col, Card, Stack } from 'react-bootstrap'
function DashboardBrokers() {
    return (
        <Container fluid className='border rounded'>
                <Row>
                    <Col lg='8' className='border'>
                        <Stack gap={3} className='mt-2 mb-2'>
                            <Col lg='12' className='border border-primary d-flex justify-content-center align-content-center'>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="https://www.homemade-gifts-made-easy.com/image-files/february-calendar-2023-printable-blank-600x464.png" />
                                </Card>
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

export default DashboardBrokers