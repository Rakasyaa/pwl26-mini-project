import "dotenv/config";
import express from "express";
import bukuRoutes from "./src/routes/buku.routes.js";
import peminjamanRoutes from "./src/routes/peminjaman.routes.js";
import { logger } from "./src/middleware/logger.js";
import { notFound } from "./src/middleware/notFound.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ pesan: "Books API - Mini Project ETS PWL" });
});

app.use("/buku", bukuRoutes);
app.use("/peminjaman", peminjamanRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Gagal menjalankan server:", err.message);
    process.exit(1);
  }
  console.log(`Server jalan di http://localhost:${PORT}`);
});
