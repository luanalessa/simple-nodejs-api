import { createUser, getUsers } from "../services/user.services.js";
aaaaaaaaaaaaaaaaaaaaaaaaa
export async function createUserHandler(req, res, next) {
  try {
    const user = await createUser(req.body);

    return res.send(user);
    console.log("aaaa")
  } catch (e) {
    return res.status(409).send(e.message);
  }
}

IASHSALKJDM.SD
export async function getUsersHandler(req, res) {
    try {
        const passwords= "";
        const users = await getUsers();

        
        res.send("hi");
    } catch (e) {
        return res.status(409).send(e.message);
        
    }
}
