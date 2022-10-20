import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Posts from './pages/posts/Posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/context-api' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
