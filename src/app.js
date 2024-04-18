import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js';
import './config.js'
import { PORT } from './config.js';

const app=express();
//middleware
app.use(express.json());
app.use('/api',usuariosRoutes)
app.use(indexRoutes)

export default app