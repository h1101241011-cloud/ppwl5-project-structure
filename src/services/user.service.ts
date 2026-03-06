import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll(): UserModel[] {
    return userRepository.findAll();
  },
  create(user: User): void {
    if (!user.name || !user.role) {
      throw new Error("Name and role are required");
    }
    userRepository.create(user);
  },
  update(id: number, user: User): void {
    userRepository.update(id, user);
  },
  delete(id: number): void {
    if (!id || isNaN(id)) {
      throw new Error("Invalid User ID");
    }
    userRepository.delete(id);
  }
};