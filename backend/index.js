import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productsRoutes from "./routes/productsRoutes.js";
dotenv.config();
const app=express();

const PORT = process.env.PORT||3000;
console.log(PORT);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.get("/api/products",productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error("Server error:", err);
});


