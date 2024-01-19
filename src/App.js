import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

import About from "./components/navpages/about";
import Blog from "./components/navpages/blog";
import Contact from "./components/navpages/contact";


import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />

          <Route path='/navpages/about' element={<About/>}/>
          <Route path='/navpages/blog' element={<Blog/>}/>
          <Route path='/navpages/contact' element={<Contact/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
