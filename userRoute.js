const express = require('express');
const router = express.Router()

const userController = require("./userController") //this is how you import the controller functions



router.get('/all', userController.getAllUsers) //this is using the function from the controller file


router.post('/login',userController.loginAuth)
router.post('/register', userController.register)






module.exports = router; //this is how you export the Routes for use in the index file