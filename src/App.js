import './App.css';
import {Route,Routes} from 'react-router-dom'
import Posts from './pages/posts/Posts';


const App = ()=> {
  return (
    <div className="App">
        <Routes>
          <Route path='/context-api' element={<Posts />} />
        </Routes>
    </div>
  );
}

export default App;
