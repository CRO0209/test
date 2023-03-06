import React from 'react'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import DashboardClientes from "../pages/DashboardClientes";
import { RegisterBrokers, RegisterBrokers2 } from "../pages/RegisterBrokers";
import DashboardBrokers from '../pages/DashboardBrokers';
import RegisterClients from '../pages/RegisterClients';

function PrivateRoutes() {

  const [navVisible, showNavbar] = useState(false);

  return (
    <div className="app">

      <SideBar visible={navVisible} show={showNavbar}/>

      <Routes>
        <Route path="dashboard-clients" element={<div className={!navVisible ? 'page' : 'page page-with-navbar'} ><DashboardClientes /></div>} />

        <Route path="dashboard-brokers" element={<div className={!navVisible ? 'page' : 'page page-with-navbar'} ><DashboardBrokers /></div>} />

        <Route path="register-brokers" element={<div className={!navVisible ? 'page' : 'page page-with-navbar'} ><RegisterBrokers /></div>} />

        <Route path="register-brokers2" element={<RegisterBrokers2 />} />

        <Route path="register-clients" element={<div className={!navVisible ? 'page' : 'page page-with-navbar'} ><RegisterClients /></div>} />
      </Routes>
    </div>
  )
}

export default PrivateRoutes