import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PaginaPrincipal from './components/pages/PaginaPrincipal';
import NavPrincipal from './components/common/NavPrincipal';
import Servicios from './components/pages/Servicios';
import Sobrenosotros from './components/pages/Sobrenosotros';
import Ubicacion from './components/pages/Ubicacion';
import Contacto from './components/pages/Contacto';
import FooterPrinci from './components/common/FooterPrinci';

function App() {
 

  return (
    <section className='pagPrinc'>
      <NavPrincipal></NavPrincipal>
      <PaginaPrincipal></PaginaPrincipal>
      <Servicios></Servicios>
      <Sobrenosotros></Sobrenosotros>
      <Ubicacion></Ubicacion>
      <Contacto></Contacto>
      <FooterPrinci></FooterPrinci>
    </section>
  )
}

export default App
