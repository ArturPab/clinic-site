const router = require('express').Router();
const verify = require('./verifyToken')
const Management = require('../model/ManagementMember');
const { postValidation } = require('../validation/managementValidation');
const ManagementMember = require('../model/ManagementMember');

router.get('/management', async (req, res) => {
    const management = await Management.find({})

    try {
        res.send(management)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.post('/management/add', async (req, res) => {
    const { error } = postValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const managementMember = new ManagementMember({
        name: req.body.name,
        jobPosition: req.body.jobPosition,
        about: req.body.about,
        imgPath: "artur.jpg"
    })

    try {
        const savedMember = await managementMember.save()
        res.send(managementMember)
    } catch(err) {
        res.status(400).send(err)
    }
})

module.exports = router