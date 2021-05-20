const Joi = require('joi')

const CertificateSchema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    content: Joi.string().min(6).max(2048).required(),
    imageUrl: Joi.string().min(1).max(255)
})

const certificatesValidation = data => {
    const schema = CertificateSchema

    return schema.validate(data)
}

module.exports.certificatesValidation = certificatesValidation