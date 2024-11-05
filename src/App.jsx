import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PaginaPrincipal from './components/pages/paginaPrincipal';
import NavPrincipal from './components/common/NavPrincipal';
import Servicios from './components/pages/Servicios';
import Sobrenosotros from './components/pages/Sobrenosotros';

function App() {
 

  return (
    <section className='pagPrinc'>
      <NavPrincipal></NavPrincipal>
      <PaginaPrincipal></PaginaPrincipal>
      <Servicios></Servicios>
      <Sobrenosotros></Sobrenosotros>
    </section>
  )
}

export default App
