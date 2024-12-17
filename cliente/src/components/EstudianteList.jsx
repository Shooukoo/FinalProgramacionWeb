/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import estudianteService from '../services/estudianteService';
import '../styles/styles.css'; 

const EstudianteList = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        loadEstudiantes();
    }, []);

    const loadEstudiantes = async () => {
        try {
            const response = await estudianteService.getAll();
            setEstudiantes(response.data);
        } catch (error) {
            console.error('Error al cargar los estudiantes:', error);
        }
    };

    const deleteEstudiante = async (id) => {
        try {
            await estudianteService.remove(id);
            loadEstudiantes();  // Recarga los estudiantes después de eliminar
        } catch (error) {
            console.error('Error al eliminar el estudiante:', error);
        }
    };

    return (
        <div className="list-container">
            <h2>Listado de Estudiantes</h2>
            {estudiantes.length === 0 ? (
                <p>No hay estudiantes registrados.</p>
            ) : (
                <ul>
                    {estudiantes.map((estudiante) => (
                        <li key={estudiante.id}>
                            <span>{estudiante.nombreEst} {estudiante.apellidoPatEst}</span>
                            <button onClick={() => deleteEstudiante(estudiante.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EstudianteList;
