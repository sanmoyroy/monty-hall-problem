import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import { useState } from 'react';
import SimulationResult from './components/SimulationResult/SimulationResult';

function App() {
  const [data, setData] = useState({'results': [], totalWins: 0});
  return (
    <div className='container'>
      <h2 className='title'>Monty Hall Simulator</h2>
      <SimulationForm setData={setData} />
      <hr />
      <h3 className='title'>Simulation Results</h3>
      <SimulationResult data={data} />
    </div>
  );
}

export default App;
