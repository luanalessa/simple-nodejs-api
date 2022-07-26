const { createUser, getUsers } = require('../services/user.services.js');

async function createUserHandler(req, res, next) {
  try {
    const user = await createUser(req.body);

    return res.send(user);
  } catch (e) {
    return res.status(409).send(e.message);
  }
}

async function getUsersHandler(req, res) {
    try {
        const users = await getUsers();

        return res.send(users);
    } catch (e) {
        return res.status(409).send(e.message);
        
    }
}

module.export = { createUserHandler, getUsersHandler};