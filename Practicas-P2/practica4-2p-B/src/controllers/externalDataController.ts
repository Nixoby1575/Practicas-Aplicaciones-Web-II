import { Request, Response } from 'express';
import { fetchDataAxios, fetchDataGot } from '../utils/httpClient';

const externalDataController = {
    getData: async (req: Request, res: Response) => {
        try {
            const url = 'https://api.companero.com/data'; // URL del servicio REST del compañero
            const data = await fetchDataAxios(url); // Cambiar a fetchDataGot para probar otra opción
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener datos externos' });
        }
    },
};

export default externalDataController;