import { AppError } from "../../shared/errors/AppError.js";
import { toPublicUser, users } from "../../shared/data/store.js";

export function listUsers() {
  return users.map(toPublicUser);
}

export function getUser(id: string) {
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return toPublicUser(user);
}
