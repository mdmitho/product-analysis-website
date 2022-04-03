
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
// import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from '../src/components/Dashboard/Dashboard'
import NotFound from '../src/components/NotFound/NotFound'


function App() {
  return (
    <div className="container">
        <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/reviews' element={<Reviews></Reviews>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}


export default App;
