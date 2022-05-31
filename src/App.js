import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './composants/Navbar';
import Pokemon from './composants/Pokemon';

import AllPokemon from './container/infoPokemon';
import CreatePokemon from './composants/CreatePokemon';



const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/pokemon/:id' element={<Pokemon/>} />
          <Route path='/index' element={<AllPokemon/>} />
          <Route path='/create' element={<CreatePokemon/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;