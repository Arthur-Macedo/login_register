import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Registro from '../registro/Registro';

const RoutesApp = () => {
    return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
     </HashRouter>
    );
};

export default RoutesApp;
