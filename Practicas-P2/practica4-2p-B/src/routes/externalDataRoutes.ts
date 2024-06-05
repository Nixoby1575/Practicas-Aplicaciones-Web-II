import express from 'express';
import externalDataController from '../controllers/externalDataController';

const router = express.Router();

router.get('/data', externalDataController.getData);

export default router;