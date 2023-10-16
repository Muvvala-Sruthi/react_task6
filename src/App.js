// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css'; // Import your CSS file
// import Navbar from "./components/Navbar";
// const App = () => {
//   return (
//     <div className="background-image">
// <Navbar/>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import  './App.css';

const App = () => {
  return (
    <div class="background-image">
    <Router>      
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

