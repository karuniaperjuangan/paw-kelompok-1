import express from 'express';
import { getAgenda, createAgenda } from "../controllers/Agenda.js";
const router = express.Router();

router.get('/', getAgenda);
router.post('/create', createAgenda);

export default router;