
import { Container, Row, Col, Stack } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg='8' className="border pt-4 pb-4">
                    <Stack gap={3} className='mt-2 mb-2'>
                        <Col lg='12' className="border">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos tempora, in expedita modi ex sint commodi suscipit tenetur consectetur, ipsa deserunt, animi consequuntur? Possimus, quas. Ut aspernatur fugit dolor?</p>
                            <br /><br /><br /><br /><br />
                        </Col>
                        <Col lg='12' className="border">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos tempora, in expedita modi ex sint commodi suscipit tenetur consectetur, ipsa deserunt, animi consequuntur? Possimus, quas. Ut aspernatur fugit dolor?</p>
                            <br /><br /><br /><br /><br />
                        </Col>
                    </Stack>
                </Col>
                <Col lg='4' className="border">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos tempora, in expedita modi ex sint commodi suscipit tenetur consectetur, ipsa deserunt, animi consequuntur? Possimus, quas. Ut aspernatur fugit dolor?</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Home