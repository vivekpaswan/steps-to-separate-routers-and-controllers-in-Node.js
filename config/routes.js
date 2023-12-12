const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const homeController = require('../controllers/homepage.js'); 
const tokken = require('../controllers/tokken.js'); 
// 3.
router.get('/', homeController.newTea); 
router.get('/tokken', tokken.home); 
router.get('/generate-tokken', tokken.generate); 
// 4. 
module.exports = router; // export to use in server.js