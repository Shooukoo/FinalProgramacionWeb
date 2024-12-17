/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido al sistema de estudiantes</h1>
            <nav>
                <Link to="/estudiantes">Gestión de Estudiantes</Link>
            </nav>
        </div>
    );
};

export default Home;
