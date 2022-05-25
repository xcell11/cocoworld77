const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
   res.render('pages/index');
})

router.get('/about', async (req, res) => {
   res.render('pages/about');
})

router.get('/products', async (req, res) => {
   res.render('pages/products');
})

router.get('/factory', async (req, res) => {
   res.render('pages/factory');
})


module.exports = router;