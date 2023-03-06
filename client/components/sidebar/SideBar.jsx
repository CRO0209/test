import React from 'react'
import { Navbar, ButtonGroup, Button, Container, Card, Col, Row } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import {
    FaAngleRight,
    FaAngleLeft,
    FaBars
} from 'react-icons/fa';
import "./SideBar.css";



function SideBar({ visible, show, tipo }) {
    return (
        <>
            <div className="mobile-nav">
                <button className="mobile-nav-btn" onClick={() => show(!visible)}>
                    <FaBars size={24} />
                </button>
            </div>

            <header className={!visible ? 'sidebar' : ''} >

                <ButtonGroup vertical className="menuOptions">

                    <button type="button" className="nav-btn" onClick={() => show(!visible)}>
                        {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
                    </button>

                    <Row className='d-flex justify-content-center text-center'>

                        <Col lg='12' className='mt-3 mb-3'><h4>BrokeLine</h4></Col>
                        <Col lg='12' className='mt-2 mb-3'>
                            <div className='d-flex justify-content-center'>
                                <div style={{ width: 150, height: 150, backgroundColor: 'powderblue', borderRadius: 100 }}></div>
                            </div>
                        </Col>

                        <Col lg='8' className='mt-2 mb-2'><div><h5>Nombre</h5></div></Col>

                    </Row>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/dashboard-clients">DashboardClientes</NavLink>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/dashboard-brokers">DashboardBrokers</NavLink>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/contratos">Contratos</NavLink>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/register-brokers">RegisterBrokers</NavLink>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/register-clients">RegisterClients</NavLink>

                    <NavLink exact className={!tipo ? 'Boton' : 'ocultar'} as={Link} to="/">Logout</NavLink>

                </ButtonGroup>
            </header>
        </>
    )
}

export default SideBar