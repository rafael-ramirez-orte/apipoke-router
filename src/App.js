import React, {useState } from 'react';
import './App.css';
import { Route,Link,BrowserRouter,Routes } from 'react-router-dom';
import{Conexion} from './conexion/conexion';
import { Cards } from './Cards/card';
import Main from './Components/Main';
import './Components/style.css';


const Home = () => <h1>Rafa</h1>

const Pokemons = () => {
  const [url,setUrl]=useState ('https://pokeapi.co/api/v2/pokemon/');
  const estado = Conexion(url);
  const {cargando,dato}=estado
  cargando? console.log('cargando'): console.log(dato.results);
  return (
  <div>
      <h1>Pokemones</h1>
      {
      cargando
      ?
      <h1>cargando</h1>
      :
      <div>
      <Cards results={dato.results}/>

      <div className='botones'>
          <button className='boton' onClick={()=>setUrl(dato.previous)}>Anterior</button>
          <button className='boton' onClick={()=>setUrl(dato.next)}>Siguiente</button>
      </div>
      </div>
      }
  </div>
  )
}

  function Pokemon(){
  return(
    <div className="App">
      <h1>Pokemones</h1>
    <Main />
  </div>
  )

} 

const Matricula = () =>{

  return(
    <div>
      <h1 className='matricula'>190024</h1><br></br>
      <p className='matricula'>Rafael Ramirez Ortega</p>
    </div>
  )
}


const App = () => {
  return(
    <BrowserRouter>
    <header>
      <nav>
      <Link to='/' className='nav-bar'>
        Inicio
      </Link>

      <Link to='/Pokemons' className='nav-bar'>
        Pokemons
      </Link>

      <Link to='/Pokemon' className='nav-bar'>
        Pokemon
      </Link>

      <Link to='/Matricula' className='nav-bar'>
        Matricula
      </Link>
      </nav>
    </header>

    <Routes> 
    <Route exact path='/' element={<Home />} >
    </Route>

    <Route path='/Pokemons'  element={<Pokemons />}>
    </Route>

    <Route path='/Pokemon'  element={<Pokemon />}>
    </Route>

    <Route path='/Matricula'  element={<Matricula />}>
    </Route> 
    </Routes>
    </BrowserRouter>
    )
}

export default App;