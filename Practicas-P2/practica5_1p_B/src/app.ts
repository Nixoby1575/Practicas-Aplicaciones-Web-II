import express from 'express';
import { PrismaClient } from '@prisma/client';
import pacienteRoutes from './routes/pacienteRoutes';
import tipoExamenRoutes from './routes/tipoExamenRoutes';
import resultadoRoutes from './routes/resultadoRoutes';
import externalRoutes from './routes/githubreposRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/pacientes', pacienteRoutes);
app.use('/tipos-examen', tipoExamenRoutes);
app.use('/resultados', resultadoRoutes);
app.use('/github', externalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
