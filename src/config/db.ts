import { Database } from "bun:sqlite";

export const db = new Database("users.db");

export const initDB = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);
  console.log("📂 Database initialized.");
};