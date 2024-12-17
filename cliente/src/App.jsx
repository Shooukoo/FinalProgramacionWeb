/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import '../src/styles/styles.css';

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
