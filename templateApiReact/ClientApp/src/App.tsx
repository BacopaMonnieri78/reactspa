// import React from 'react';
// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
//import { TestingComponent } from './admin/testing/testing.component';
import { NavigationComponent } from './admin/Navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <>
        <NavigationComponent/>
        <Outlet/>


        </>
    </div>
  );
}

export default App;
