import logo from './logo.svg';
import './App.css';
import { Nav } from 'react-bootstrap';
import NavbarPrincipal from './components/navbar';
import BannerPrincipal from './components/banner';
import informacionPrincipal from './components/informacion';
 

function App() {
  return (
    <div className='App'>
      <div className=''>
        <NavbarPrincipal />
        <BannerPrincipal />
        <informacionPrincipal />
      </div>
    </div>
  );
}

export default App;
