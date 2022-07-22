import { createUser, getUsers } from "../services/user.services.js";

export async function createUserHandler(req, res, next) {
  try {
    const user = await createUser(req.body);

    return res.send(user);
  } catch (e) {
    return res.status(409).send(e.message);
  }
}

export async function getUsersHandler(req, res) {
    try {
        const users = await getUsers();

        return res.send(users);
    } catch (e) {
        return res.status(409).send(e.message);
        
    }
}