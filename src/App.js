import './App.css';
import { Routes, Route } from "react-router-dom";
import ChoosePet from './pages/pets/choosePet'
import Home from './Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<ChoosePet />} />
      </Routes>
  );
}

export default App;
