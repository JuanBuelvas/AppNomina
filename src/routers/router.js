const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userController = require('../controllers/userController')

//course
router.get(apiRoute+'/user',userController.getUser)

module.exports = router;