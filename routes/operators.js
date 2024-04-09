const express = require('express');
const asyncHandler = require('express-async-handler');
const Operator = require('../models/operators');
const router = express.Router();

router.post('/register', asyncHandler(async (req, res) => {
    	
    const { firstname, lastname, email, phone, url } = req.body;
    if (!firstname || !lastname || !email || !phone || !url) {
    	return res.status(400).json({ 'message': 'Fields required!' });
    }

    const operator = await Operator.findOne({ email: email });
    if (operator) {
    	return res.status(400).json({'message':'Operator already exists!'});
    }

    const newOperator = new Operator({
    	firstname: firstname,
    	lastname: lastname,
    	email: email,
    	phone: phone,
    	url: url
    });
    
    await newOperator.save();
    res.status(200).json({'message': 'Operator registered successfully'});
}));

module.exports = router;
