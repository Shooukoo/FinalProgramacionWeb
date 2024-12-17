// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import estudianteService from '../services/estudianteService';

const EstudianteForm = () => {
    const [formData, setFormData] = useState({
        nombreEst: '',
        apellidoPatEst: '',
        apellidoMatEst: '',
        domicilioEst: '',
        ciudadEst: '',
        telefonoEst: '',
        correoEst: '',
        controlEst: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await estudianteService.create(formData);
            setFormData({
                nombreEst: '',
                apellidoPatEst: '',
                apellidoMatEst: '',
                domicilioEst: '',
                ciudadEst: '',
                telefonoEst: '',
                correoEst: '',
                controlEst: '',
            });
            alert('Estudiante creado con éxito');
        } catch (error) {
            console.error('Error al crear estudiante:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Estudiante</h2>
            <input name="nombreEst" placeholder="Nombre" value={formData.nombreEst} onChange={handleChange} required />
            <input name="apellidoPatEst" placeholder="Apellido Paterno" value={formData.apellidoPatEst} onChange={handleChange} required />
            <input name="apellidoMatEst" placeholder="Apellido Materno" value={formData.apellidoMatEst} onChange={handleChange} />
            <input name="domicilioEst" placeholder="Domicilio" value={formData.domicilioEst} onChange={handleChange} />
            <input name="ciudadEst" placeholder="Ciudad" value={formData.ciudadEst} onChange={handleChange} />
            <input name="telefonoEst" placeholder="Teléfono" value={formData.telefonoEst} onChange={handleChange} />
            <input name="correoEst" placeholder="Correo" value={formData.correoEst} onChange={handleChange} />
            <input name="controlEst" placeholder="Número de Control" value={formData.controlEst} onChange={handleChange} />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default EstudianteForm;