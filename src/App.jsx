import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PaginaPrincipal from './components/pages/PaginaPrincipal';
import NavPrincipal from './components/common/NavPrincipal';
import Servicios from './components/pages/Servicios';
import Sobrenosotros from './components/pages/Sobrenosotros';
import Ubicacion from './components/pages/Ubicacion';
import Contacto from './components/pages/Contacto';
import FooterPrinci from './components/common/FooterPrinci';
import Error404 from './components/pages/Error404';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 

  return (
   <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
   <NavPrincipal></NavPrincipal>
   <Routes>
    <Route path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
    <Route path='*' element={<Error404></Error404>}></Route>
   </Routes>
   <FooterPrinci></FooterPrinci>
   </BrowserRouter>
  )
}

export default App
