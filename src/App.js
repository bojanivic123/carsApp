import './App.css';
import { Routes, Route } from "react-router-dom";
import Cars from './pages/Cars';
import AddCar from './pages/AddCar';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index path="/cars" element={<Cars />}></Route>  
          <Route path="/add" element={<AddCar />}></Route>
          <Route path="/edit/:id" element={<AddCar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
