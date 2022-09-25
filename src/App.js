import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <h1>ESTAS EN HOME</h1>
        } />
        <Route path='/prueba' element={
          <h1>ESTAS EN PRUEBA</h1>
        } />
      </Routes>
    </div>
  );
}

export default App;
