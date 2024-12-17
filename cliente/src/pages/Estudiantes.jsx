/* eslint-disable no-unused-vars */
import React from 'react';
import EstudianteList from '../components/EstudianteList';
import EstudianteForm from '../components/EstudianteForm';

const Estudiantes = () => {
    return (
        <div>
            <h1>Gestión de Estudiantes</h1>
            <EstudianteForm />
            <EstudianteList />
        </div>
    );
};

export default Estudiantes;
