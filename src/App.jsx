import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './components/Navbar/Login';
import Dashboard from './components/Navbar/Dashboard';
import Home from './components/Navbar/Home';

import ProtectedRoute from './components/Routes/ProtectedRoute';
import Register from './components/Navbar/Register';
import Sevice from './components/Navbar/Sevice';
import {Provider} from 'react-redux';
import store from './components/utils/store/store';


export default function App() {
  return ( 
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route element={<Dashboard/>}  path='/dashboard' exact/>
        </Route>
        
        <Route path = "/" element={<Home/>} exact />
        <Route path = "/login" element={<Login/>} exact/>
        <Route path = "/register" element={<Register/>} exact/>

      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}