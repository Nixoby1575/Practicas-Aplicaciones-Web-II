import { Router } from 'express';
import { getRepos } from '../controllers/githubreposController';

const router = Router();

router.get('/repos', getRepos);

export default router;
