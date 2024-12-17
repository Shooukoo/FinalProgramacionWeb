import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import db from './database/db.js';
import clienteRoutes from './routes/clienteRoute.js';

config(); // Cargar variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await db.sync();
    console.log('Modelos sincronizados correctamente.');
} catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
}

// Rutas
app.use('/api/estudiantes', clienteRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('Bienvenido al back-end de Alumnos versión 1.0');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
