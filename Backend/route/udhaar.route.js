import express from 'express';
import { getUdhaar } from '../controller/udhaar.controller.js';

const router = express.Router();

router.get('/', getUdhaar);

export default router;
