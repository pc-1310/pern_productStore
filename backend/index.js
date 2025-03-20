import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import postgres from "postgres";
import productsRoutes from "./routes/productsRoutes.js";
import {sql} from "./config/db.js";

const app=express();

const PORT = process.env.PORT||3000;
console.log(PORT);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/products",productsRoutes);

async function initDB(){
  try{
    await sql `
    CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);  
     `;
     console.log("Database initialised successfully");
  }
  catch(error)
  {
    console.log("Error initDB", error);
  }
}
initDB().then(()=>{



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error("Server error:", err);
});
});

