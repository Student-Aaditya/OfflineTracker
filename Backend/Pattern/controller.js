import joi from 'joi'

export const validatorSchema= joi.object({
    username:joi.string().min(2).required().messages({
        'string.base':'name must be length of 2',
        'any.required':'must be required',
    }),
    email:joi.string().required().pattern(/@gmail\.com$/).messages({
        'string.base':'email must contain @gmail.com',
        'any.required':'must be required',
    }),
    role:joi.string().required().messages({
        'string.base':'role must be required',
        'any.required':'mention the role',
    }),
    password:joi.string().min(6).required().messages({
        'string.base':'must be required',
        'any.required':'make it strong',
    })
});