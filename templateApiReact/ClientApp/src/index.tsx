import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/redux_store";
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { CounterComponent } from './admin/counter/counter.component';
import { TestingComponent } from './admin/testing/testing.component';
import ErrorPageOverview from './admin/errorPage/errorpage';
import HomeComponent from './admin/home/home.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPageOverview/>,
    children:[
      {
        path:"/home",
        element : <HomeComponent/>
      }, 
      {
        path:"/counter",
        element : <CounterComponent/>
      }, 
      {
        path:"/testing",
        element: <TestingComponent/>
      }
    ]
  },
]);


root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider  router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
