import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Registro from '../registro/Registro';

const RoutesApp = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
    );
};

export default RoutesApp;
