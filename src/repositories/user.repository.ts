/* =========================
   REPOSITORY (SQLite)
   Tugas:
    1. Pindahkan ke file khusus (user.repository), dalam folder yang sesuai
    2. gunakan export const ...
    3. tambahkan delete(id: number) dengan query "DELETE FROM users WHERE id = ?"
========================= */
import { db } from "../config/db";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userRepository = {
  /**
   * Mengambil semua data user dan mengonversinya menjadi 
   * instance UserModel agar bisa menggunakan getter/method.
   */
  findAll(): UserModel[] {
    const rows = db.query("SELECT id, name, role FROM users").all() as User[];
    return rows.map(user => new UserModel(user));
  },

  /**
   * Menambahkan user baru ke dalam database.
   */
  create(user: User): void {
    db.query("INSERT INTO users (name, role) VALUES (?, ?)")
      .run(user.name, user.role);
  },

  /**
   * Memperbarui data user yang sudah ada berdasarkan ID.
   */
  update(id: number, user: User): void {
    db.query("UPDATE users SET name = ?, role = ? WHERE id = ?")
      .run(user.name, user.role, id);
  },

  /**
   * Tugas 3: Menghapus user berdasarkan ID menggunakan query SQL.
   */
  delete(id: number): void {
    db.query("DELETE FROM users WHERE id = ?")
      .run(id);
  }
};