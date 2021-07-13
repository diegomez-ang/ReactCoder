
import './App.css';
import NavBar from './components/pages/NavBar';
import ItemListcontainer from './components/pages/ItemListContainer';
import PropsExample from './components/pages/PropsExample'
import FunctionalComponentStateExample from './components/pages/FunctionalComponentStateExample';
import ClassComponentLifeCycles from './components/pages/ClassComponentLifeCycles';
import FunctionComponentLifeCycles from './components/pages/FunctionComponentLifeCycles';
import ClickTracker from './components/pages/ClickTracker';

function App() {
  return ( //todo lo que pasa en el explorador sale de aqui
    <div className='container'>
      <NavBar/>    
      <ItemListcontainer/>        
      <PropsExample/>
      <FunctionalComponentStateExample/>
      {/* <ClassComponentLifeCycles/> */}
      <FunctionComponentLifeCycles/>
      <ClickTracker/>
      
    </div>
    
  );
}

export default App;
