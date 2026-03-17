import { drizzle } from "drizzle-orm/node-postgres";
import {Connection, Pool} from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if(!ENV.DB_URL) {
    throw new Error("DB URL environment variable is missing environment");
}

const pool = new Pool({ connectionString: ENV.DB_URL });

pool.on("connect", () => {
    console.log("Connected to DB");
});

pool.on("error", (error) => {
    console.error("Database connection error:", error);
});

export const db = drizzle({ client: pool, schema});

