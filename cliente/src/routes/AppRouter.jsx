/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Estudiantes from '../pages/Estudiantes';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudiantes" element={<Estudiantes />} />
        </Routes>
    );
};

export default AppRouter;
