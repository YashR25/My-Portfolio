import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { Route, Router, Routes, Switch, Redirect} from 'react-router-dom';
import Default from './components/Default/Default';
import MoreProject from './components/MoreProject/MoreProject';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<Default />} />
          <Route path='/projects' element={<MoreProject />} />
      </Routes>
    </div>
  );
}

export default App;
