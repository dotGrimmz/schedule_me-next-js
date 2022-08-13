import { User } from "../../types/user.types";

import fs from "fs";

import users from "../../data/users.json";

import { v4 as uuidv4 } from "uuid";
const USERS_PATH = "data/users.json";

export const usersRepo = {
  getAllUsers: () => users,
  getUserById: (id: keyof User) => users.find((user: User) => user.id === id),
  findByUserName,
  createUser,
  updateUser,
};

function findByUserName(userName: keyof User) {
  return users.find((x: User) => x.userName === userName);
}

function createUser(user: User) {
  user.id = uuidv4();
  users.push(user);
  saveUsers();
  return user;
}

function updateUser(updatedUser: User) {
  const { id } = updatedUser;
  const user = users.find((x: User) => x.id === id);
  Object.assign(user, updatedUser);
  saveUsers();
}

function saveUsers() {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 4));
}
