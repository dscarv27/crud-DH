// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', productsController.create); 
router.post('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/products/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', productsController.edit); 
router.patch('/products/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/products/:id', productsController.destroy); 


module.exports = router;
