const user = require('../controllers/user.controller.js');
const  Router  = require('express');

const router = Router();

router.post('/user', (req,res) => user.createUserHandler);
router.get('/users', (req,res) => user.getUsersHandler);

module.exports = router;