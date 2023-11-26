
/* dependencies */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const carController = require('../controllers/carController');


/* routes */
router.post('/users', userController.createUser);
router.post('/log', userController.loginUser);

router.post('/markCar', carController.markCar);

module.exports = router;

