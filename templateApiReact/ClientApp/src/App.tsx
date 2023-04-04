// import React from 'react';
// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
//import { TestingComponent } from './admin/testing/testing.component';
import { NavigationComponent } from './admin/Navigation/navigation.component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactr hello world

          <TestingComponent/>
        </a> 
              
        
        
      </header> */}

      <>
        <NavigationComponent/>
        <Outlet/>

        {/* <h2>TestingProject</h2>
          <p>This Project was build with react and C#</p>
          <p>I Used the following NPM Packets:</p>
          <TestingComponent/> */}
        </>
    </div>
  );
}

export default App;
