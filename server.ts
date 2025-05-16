// server.ts
import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.POSTGRESSUSER, // use your Docker DB username
  password: process.env.POSTGRESPASSWORD, // use your Docker DB password
  database: "auth_test",
});

app.get("/users", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM user");
  res.json(rows);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(3003, () => {
  console.log("API server running on http://localhost:3003");
});
