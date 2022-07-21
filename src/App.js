import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
      <>
          
          <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/service' element={<Service/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </Router>
          <Footer/>
      </>
  )
}

export default App;
