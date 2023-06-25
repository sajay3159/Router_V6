import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/NavBar';
// import Page404 from './Component/Page404';
import User from './Component/User';
import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/> 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/user/:name" element={<User/>}></Route>
      {/* <Route path="/*" element={<Page404/>}>404 Page Not found</Route> */}
      <Route path="/*" element={<Navigate to="/about"/>}></Route>
      <Route path="/navigation" element={<Navigation/>} ></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
