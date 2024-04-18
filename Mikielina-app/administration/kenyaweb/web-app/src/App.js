// import logo from './logo.svg';
import './App.css';
import Register  from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import React, {components} from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Dashboard/>
      <Register/>
      <Login/>
      <Logout/>


      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Logout></Logout> */}
      {/* <Block/> */}

    </div>
  );
}

export default App;

