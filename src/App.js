import logo from './logo.svg';
import './App.css';
import { Nav } from 'react-bootstrap';
import NavbarPrincipal from './components/navbar';
import BannerPrincipal from './components/banner';
 

function App() {
  return (
    <div className='App'>
      <div className=''>
        <NavbarPrincipal />
        <BannerPrincipal />
      </div>
    </div>
  );
}

export default App;
