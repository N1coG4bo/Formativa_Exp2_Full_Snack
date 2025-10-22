import logo from './logo.svg';
import './App.css';
import { Nav } from 'react-bootstrap';
import NavbarPrincipal from './components/navbar';
import BannerPrincipal from './components/banner';
import InformacionPrincipal from './components/informacion';
import Productos from './components/productos';

function App() {
  return (
    <div className='App'>
      <div className=''>
        <NavbarPrincipal />
        <BannerPrincipal />
        <InformacionPrincipal />
        <Productos/>
      </div>
    </div>
  );
}

export default App;
