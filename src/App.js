
import './App.css';
import Clase4 from './components/pages/Clase4';
import NavBar from './components/pages/NavBar';
import ItemListcontainer from './components/pages/ItemListContainer';
import Text from './components/pages/Text';



function App() {
  return ( //todo lo que pasa en el explorador sale de aqui
    <div className='container'>
      <NavBar/>    
      <ItemListcontainer/>        
    </div>
    
  );
}

export default App;
