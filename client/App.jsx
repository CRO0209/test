import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css'
import AppRoutes from "./routes";
import { useState } from 'react';
import {Button} from 'react-bootstrap'


function App() {

  const [data, setData] = useState('');

  const isUserLoggedIn = () => {
    setData(false);
  }
  const login = () => setData(true)

  return (
    <Router>
      <div>
        <Button primary onClick={() => login()}>Login</Button>
        <Button primary onClick={() => isUserLoggedIn()} >Logout</Button>
      </div>
      <AppRoutes isUserLoggedIn={data} />
    </Router>
  )
}


export default App
