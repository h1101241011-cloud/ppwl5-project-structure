/* =========================
   TYPES (Issue: Langsung di index)
   Tugas: 
    1. Pindahkan ke file khusus (user.type), dalam folder yang sesuai, ok
    2. gunakan export interface ... ok
    3. jadika id opsional -> id?: number
   ========================= */

export interface User {
  id?: number; 
  name: string;
  role: string;
}