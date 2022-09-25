import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div><h1>ESTAS EN HOME</h1>
          <button onClick={()=>{navigate("/prueba")}}>IR A PRUEBA</button>
          </div>
        } />
        <Route path='/prueba' element={
          <h1>ESTAS EN PRUEBA</h1>
        } />
      </Routes>
    </div>
  );
}

export default App;
