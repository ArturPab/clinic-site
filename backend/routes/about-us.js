const router = require('express').Router();
const verify = require('./verifyToken')
const { managementValidation } = require('../validation/managementValidation');
const { certificatesValidation } = require('../validation/certificatesValidation');
const { awardValidation } = require('../validation/awardValidation')
const ManagementMember = require('../model/ManagementMember');
const Certificate = require('../model/Certificate')
const Award = require('../model/Award')

router.get('/management', async (req, res) => {
    const management = await ManagementMember.find({})

    try {
        res.send(management)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.post('/management/add', async (req, res) => {
    const { error } = managementValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const managementMember = new ManagementMember({
        name: req.body.name,
        jobPosition: req.body.jobPosition,
        about: req.body.about,
        imgPath: "artur.jpg"
    })

    try {
        const savedMember = await managementMember.save()
        res.send(savedMember)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.get('/certificates', async (req, res) => {
    const certificates = await Certificate.find({})

    try {
        res.send(certificates)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.post('/certificates/add', async (req, res) => {
    const { error } = certificatesValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const certificate = new Certificate({
        name: req.body.name,
        content: req.body.content,
        imageUrl: "certificate.jpg"
    })

    try {
        const savedCertificate = await certificate.save()
        res.send(savedCertificate)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.get('/awards', async (req, res) => {
    const awards = await Award.find({})

    try {
        res.send(awards)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.post('/awards/add', async (req, res) => {
    const { error } = awardValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const award = new Award({
        name: req.body.name,
        content: req.body.content,
        imageUrl: "certificate.jpg"
    })

    try {
        const savedAward = await award.save()
        res.send(savedAward)
    } catch(err) {
        res.status(400).send(err)
    }
})



module.exports = router