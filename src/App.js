import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import Contact from './components/Contact'
import SingleUser from './components/SingleUser';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import Counter from './components/testing/Counter';

function App() {
  return (
    <>
      <nav className='navigator'>
        <ul>
          <li>
            <Link to="/about-us" >About us </Link>
          </li>
          <li>
            <Link to="/our-mission" >Our mission </Link>

          </li>
          <li>
            <Link to="/" >Home </Link>

          </li>
          <li>
            <Link to="/contact" >Contact </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/our-mission' element={<OurMission/>}/>
        <Route path='/our-mission/vision' element={<OurMission/>}/>
        <Route path='/our-mission/mission' element={<Contact/>}/>

        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/testing' element={<Counter/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/about-us/:id' element={<SingleUser/>}/>
      
      </Routes>
    </>
  );
}

export default App;
