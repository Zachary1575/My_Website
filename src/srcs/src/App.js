import './App.css';
//import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/HomePage/Home';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
