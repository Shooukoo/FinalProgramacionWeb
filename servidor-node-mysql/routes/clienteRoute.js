import express from 'express';
import EstudianteController from '../controllers/EstudianteController.js';

const router = express.Router();

// CRUD de estudiantes
router.get('/', EstudianteController.getAllEstudiantes);
router.get('/:id', EstudianteController.getEstudianteById);
router.post('/', EstudianteController.createEstudiante);
router.put('/:id', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);

export default router;