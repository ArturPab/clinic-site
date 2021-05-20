const Joi = require('joi')

const AwardSchema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    content: Joi.string().min(6).max(4096).required(),
    imageUrl: Joi.string().min(1).max(255)
})

const awardValidation = data => {
    const schema = AwardSchema

    return schema.validate(data)
}

module.exports.awardValidation = awardValidation