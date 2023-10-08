import './App.css';
import Mensaje from './mensaje';
import Description from './Descripcion';


function App() {
  return (
    <div className="App">
      <Mensaje/> 
      <Description color = 'blue' newTitle = 'Mensaje ingresado desde props o propiedades en React ... !!!'/>  
      <Description color = 'pink' message = 'mensaje ingresado como props (propiedades)'/>
    </div>
  ); 
}

export default App;
