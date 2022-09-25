import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/componentes_react' element={
          <h1>ESTAS EN HOME</h1>
        } />
        <Route path='/componentes_react/prueba' element={
          <h1>ESTAS EN PRUEBA</h1>
        } />
      </Routes>
    </div>
  );
}

export default App;
