import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog'
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='home' element={<Home></Home>} ></Route>
        <Route path='about' element={<About></About>} ></Route>
        <Route path='reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='blog' element={<Blog></Blog>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
