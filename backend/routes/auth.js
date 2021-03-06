const router = require('express').Router();
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation/authValidation')




router.post('/register', async (req, res) => {

    // validating data
    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // checking if email exists
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send('Email already exists')

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err) {
        res.status(400).send(err);
    }
})

router.post('/login', async (req, res) => {

    // validating data
    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // checking if user doesn't exist
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("Email is not found")

    // checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid password')

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
})


module.exports = router