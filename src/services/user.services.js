const User = require("../repositories/user.repository.js");

async function createUser(input) {
  try {
        return await User.create(input);
  } catch (e) {
        throw new Error(e.message)
  }
}

async function getUsers() {
    try {
        return await User.find();
    } catch (e) {
        throw new Error(e.message)
    }
}

module.export = { createUser, getUsers};