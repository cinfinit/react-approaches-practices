import './App.css';
import { Routes, Route } from "react-router-dom";
import ChoosePet from './pages/pets/choosePet'
import Home from './Home';
import ViewPet from './pages/pets/viewPet';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<ChoosePet />} />
        <Route path="/pets/view" element={<ViewPet />} />
      </Routes>
  );
}

export default App;
