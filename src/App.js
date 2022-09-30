import './App.css';
// import Navbar from './component/navbar/Navbar';
import {BrowserRouter}  from 'react-router-dom'
import Router from './component/router/Router'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
