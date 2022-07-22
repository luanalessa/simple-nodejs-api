import User from "../repositories/user.repository.js";

export async function createUser(input) {
  try {
        return await User.create(input);
  } catch (e) {
        throw new Error(e.message)
  }
}

export async function getUsers() {
    try {
        return await User.find();
    } catch (e) {
        throw new Error(e.message)
    }
}
