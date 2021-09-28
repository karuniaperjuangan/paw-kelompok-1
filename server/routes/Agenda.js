import express from 'express';
import { getAgenda, createAgenda, deleteAgendaByID, updateAgendaByID, findAgendaByID } from "../controllers/Agenda.js";
const router = express.Router();

router.get('/', getAgenda);
router.post('/create', createAgenda);
router.get('/detail', findAgendaByID);
router.delete('/delete', deleteAgendaByID);
router.put('/update', updateAgendaByID);

export default router;