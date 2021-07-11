
import './App.css';
import Clase4 from './components/pages/Clase4';
import NavBar from './components/pages/NavBar';
import ItemListcontainer from './components/pages/ItemListContainer';
import Text from './components/pages/Text';
import Clase5 from './components/pages/Clase5';



function App() {
  return ( //todo lo que pasa en el explorador sale de aqui
    <div className='container'>
      <NavBar/>    
      <ItemListcontainer/>        
      <Clase5/>
    </div>
    
  );
}

export default App;
