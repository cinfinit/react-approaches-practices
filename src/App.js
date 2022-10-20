import './App.css';
import {Route,Routes} from 'react-router-dom'
import PostsList from './pages/posts/PostsList';


const App = ()=> {
  return (
    <div className="App">
        <Routes>
          <Route path='/context-api' element={<PostsList />} />
        </Routes>
    </div>
  );
}

export default App;
