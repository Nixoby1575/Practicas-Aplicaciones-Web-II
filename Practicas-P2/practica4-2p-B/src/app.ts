import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pacientesRoutes from './routes/pacientesRoutes';
import tipoExamenRoutes from './routes/tipoExamenRoutes';
import resultadosRoutes from './routes/resultadosRoutes';
import externalDataRoutes from './routes/externalDataRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pacientes', pacientesRoutes);
app.use('/tipoexamen', tipoExamenRoutes);
app.use('/resultados', resultadosRoutes);
app.use('/external', externalDataRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});