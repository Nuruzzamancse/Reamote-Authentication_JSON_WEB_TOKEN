var base = process.env.PWD;
var express = require('express');
var router = express.Router();
var userController = require('C:/Users/Nuruzzaman/Documents/NodeJS/Reamote Authentication_JSON_WEB_TOKEN/app/controllers/userController/user');
var authenticateController = require('C:/Users/Nuruzzaman/Documents/NodeJS/Reamote Authentication_JSON_WEB_TOKEN/app/controllers/authenticateController/authenticate');

router.get('/users', authenticateController.checkAuthentication, userController.getUsers);

router.post('/user', userController.createUser);
router.post('/authenticate', authenticateController.authenticateUser);

module.exports = router;