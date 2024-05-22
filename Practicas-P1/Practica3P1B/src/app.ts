import express from 'express';
import bodyParser from 'body-parser';
import pacientesRoutes from './routes/pacientesRoutes';
import tipoExamenRoutes from './routes/tipoExamenRoutes';
import resultadosRoutes from './routes/resultadosRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pacientes', pacientesRoutes);
app.use('/tipoexamen', tipoExamenRoutes);
app.use('/resultados', resultadosRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
