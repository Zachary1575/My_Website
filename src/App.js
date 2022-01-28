import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//Pages
import Home from './Pages/HomePage/Home';
import About from './Pages/About/about';
import Contact from './Pages/Contact-me/contact-me';
import Error from './Components/Web-Routing/Error';


function App() {
  return (
    <BrowserRouter>
      <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>

    
      </div>
    </BrowserRouter>
  );
}


export default App;
