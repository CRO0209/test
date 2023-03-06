import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  return (
    <Router>
      <PrivateRoutes/>
    </Router>
  )
}

export default App
