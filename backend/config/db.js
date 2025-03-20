import {neon} from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config(); 
const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD}=process.env;
export const sql=neon(
    `postgresql://neondb_owner:npg_FnxJD6e7EzLv@ep-sweet-credit-a1hrache-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`
)
