const Joi = require('joi')

const ManagementSchema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    jobPosition: Joi.string().min(6).max(255).required(),
    about: Joi.string().min(30).max(4096).required(),
    imgPath: Joi.string().min(1).max(255)
})

const postValidation = data => {
    const schema = ManagementSchema

    return schema.validate(data)
}

module.exports.postValidation = postValidation