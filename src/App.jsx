import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PaginaPrincipal from './components/pages/paginaPrincipal';
import NavPrincipal from './components/common/NavPrincipal';

function App() {
 

  return (
    <section className='pagPrinc'>
      <NavPrincipal></NavPrincipal>
      <PaginaPrincipal></PaginaPrincipal>
    </section>
  )
}

export default App
