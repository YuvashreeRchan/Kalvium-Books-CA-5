import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage"
import FormPage from "./Pages/FormPage"
import NavBar from './components/NavBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>
      <div className="App">
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route exact path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/register" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
