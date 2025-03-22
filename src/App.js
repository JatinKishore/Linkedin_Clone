import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/home' element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
