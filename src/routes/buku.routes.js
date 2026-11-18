import express from "express";
import * as ctrl from "../controllers/buku.controller.js";
import { validasi } from "../middleware/validasi.js";
import { skemaBuku } from "../validators/buku.validator.js";

const router = express.Router();

router.get("/", ctrl.daftar);
router.get("/:id", ctrl.detail);
router.post("/", validasi(skemaBuku), ctrl.buat);
router.put("/:id", validasi(skemaBuku), ctrl.ubah);
router.delete("/:id", ctrl.hapus);

export default router;
