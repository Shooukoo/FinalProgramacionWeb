import EstudianteModel from '../models/clienteModel.js';

const EstudianteController = {
    getAllEstudiantes: async (req, res) => {
        try {
            const estudiantes = await EstudianteModel.findAll();
            res.json(estudiantes);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener estudiantes', error });
        }
    },

    getEstudianteById: async (req, res) => {
        try {
            const estudiante = await EstudianteModel.findByPk(req.params.id);
            if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
            res.json(estudiante);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el estudiante', error });
        }
    },

    createEstudiante: async (req, res) => {
        try {
            const estudiante = await EstudianteModel.create(req.body);
            res.status(201).json(estudiante);
        } catch (error) {
            res.status(400).json({ message: 'Error al crear estudiante', error });
        }
    },

    updateEstudiante: async (req, res) => {
        try {
            const estudiante = await EstudianteModel.findByPk(req.params.id);
            if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
            await estudiante.update(req.body);
            res.json(estudiante);
        } catch (error) {
            res.status(400).json({ message: 'Error al actualizar estudiante', error });
        }
    },

    deleteEstudiante: async (req, res) => {
        try {
            const estudiante = await EstudianteModel.findByPk(req.params.id);
            if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
            await estudiante.destroy();
            res.json({ message: 'Estudiante eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar estudiante', error });
        }
    },
};

export default EstudianteController;
