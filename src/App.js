import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Business from './Pages/business/Business';
import Animations from './Pages/animations/Animations';
import Photo from './Pages/photo/Photo';
import Techai from './Pages/techai/Techai';
import Video from './Pages/video/Video';
import Write from './Pages/write/Write';
import Design from './Pages/design/Design';
import Login from './Pages/login/Login';
import Footer from './components/Footer/Footer';
import Home from './Pages/home/Home';
import Navbar from './components/navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Contacts from './Pages/contact/Contacts';
import About from './Pages/about/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="business" element={<Business />} />
          <Route path='/animation' element={<Animations/>} />
          <Route path='/photo' element={<Photo/>}/>
          <Route path='/techai' element={<Techai/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='Write' element={<Write/>}/>
          <Route path='design' element={<Design/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='Contacts' element={<Contacts/>}/>
          <Route path='about' element={<About/>}/>
         </Routes>
         <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
