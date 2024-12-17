import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const EstudianteModel = db.define(
    'Estudiante',
    {
        nombreEst: {type: DataTypes.STRING},
        apellidoPatEst: {type: DataTypes.STRING},
        apellidoMatEst: {type: DataTypes.STRING},
        domicilioEst: {type: DataTypes.STRING},
        ciudadEst: {type: DataTypes.STRING},
        telefonoEst: {type: DataTypes.STRING, unique: true},
        correoEst: {type: DataTypes.STRING, unique: true}, 
        controlEst: {type: DataTypes.STRING, unique: true},
    }
);

export default EstudianteModel;