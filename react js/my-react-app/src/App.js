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

// export default App;



// import React from 'react';
// import Home from './components/HomePage'
// import About from './components/AboutPage';
// import Contact from './components/ContactPage';
// import './App.css';
// import './components/Style.css';
// function App() {
//   return (   
//     <div className="App">
//       <Home/>
//       <About/>
//       <Contact/>
//     </div>
//   );
// }
// export default App;



import React, { useState } from 'react';
import LoginForm from './components/Loginform';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (username, password) => {
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>thank you !</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
export default App;