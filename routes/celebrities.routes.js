const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');


//LISTING OUR CELEBRITIES

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find()
    res.render("/celebrities/celebrities", { celebrities })
  } catch (err) {
    console.log(`ERROR: ${err}`);
    next(err);
  }

});

// ADDING NEW CELEBRITIES 
router.get('/celebrities/create', async (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity.hbs")
  } catch (error) {
    console.log(`ERROR:D ${error.message}`);
    next(error);
  }
});

router.post('/celebrities/create', async (req, res, next) => {
  try {
    const celebrityData = req.body;
    await Celebrity.create(celebrityData);
    res.redirect("/celebrities")
  } catch (err) {
    res.render('celebrities/new-celebrity');
  }


  module.exports = router;