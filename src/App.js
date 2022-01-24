import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Button } from './components/Button';


const App = () => {
  return (
  
    <Router>
   
      <Routes>

      <Route path='/' element={<Navbar/>} />
      <Route path='/' element={<Landing />} />
      <Route path='/' element={<Button /> }/>
      
      </Routes>
    </Router>
  
   
  );
}

export default App;
