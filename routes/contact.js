const express = require('express');
const Subscribe = require('../models/subscribe')
const Inquiry = require('../models/inquiry')

const router = express.Router();


router.get('/', async (req, res) => {
   res.render('pages/contact');
})

router.post('/subscribe', async (req,res) => {
    const email = req.body.email;
    const subscribe = new Subscribe({email: email});

    if (!validateEmail(email)) {
        console.log('Email invalid');
        res.redirect('/contact');
        return;
    }

    await subscribe.save((err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email saved success!')
        }
    })
    
    res.redirect('/contact');
})

router.post('/inquiry', async (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const message = req.body.message;

    const newInquiry = new Inquiry({
        fullName: fullname,
        email: email,
        phoneNumber: phonenumber,
        message: message
    })
    
    await newInquiry.save((err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Inquiry post success!')
        }
    })

    res.redirect('/contact');
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


module.exports = router;