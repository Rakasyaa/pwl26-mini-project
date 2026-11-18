// src/routes/peminjaman.routes.js
import express from 'express';
import * as ctrl from '../controllers/peminjaman.controller.js';
import { validasi } from '../middleware/validasi.js';
import { skemaPeminjaman } from '../validators/peminjaman.validator.js';

const router = express.Router();

router.get('/', ctrl.daftar);
router.post('/', validasi(skemaPeminjaman), ctrl.buat);

export default router;
