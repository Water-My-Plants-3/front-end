import React from 'react';

import Plants from './components/Plants'
import PlantForm from './components/PlantForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       PLANTS LIFE 🌵
       <Plants />
       <PlantForm />
      </header>
    </div>
  );
}
export default App;
