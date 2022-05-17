import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='appointment' element={<Appointment/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;


// ------ ****technology used:****---------//
// 1. React router v6
// 2. Tailwind daisyui