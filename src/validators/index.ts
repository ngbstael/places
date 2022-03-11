import { body } from 'express-validator'

const firstNameValidator = body('firstName')
  .isString()
  .withMessage('FirstName field must be a string')
  .trim()
  .isLength({ min: 2, max: 25 })
  .withMessage('FirstName must be between 2 and 25 characters')

const secondNameValidator = body('secondName')
  .optional()
  .isString()
  .withMessage('SecondName field must be a string')
  .trim()
  .isLength({ min: 2, max: 25 })
  .withMessage('SecondName must be between 2 and 25 characters')

const birthDayValidator = body('birthDay')
  .optional()
  .isString()
  .withMessage('BirthDay field must be a string')
  .trim()
  .isLength({ min: 5, max: 100 })
  .withMessage('BirthDay must be between 5 and 100 characters')

const emailValidator = body('email')
  .optional()
  .isString()
  .withMessage('Email field must be a string')
  .trim()
  .isEmail()
  .withMessage('Email must be valid')

const passwordValidator = body('password')
  .isString()
  .trim()
  .withMessage('Password field must be a string')
  .isStrongPassword(
    {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
  .withMessage('Password is not enough strong (must contains 6 characters, 1 lower char, 1 upper char, 1 symbol)')

const phoneNumberValidator = body('phoneNumber')
  .optional()
  .isString()
  .trim()
  .withMessage('PhoneNumber field must be a string')
  .isMobilePhone('any')
  .withMessage('Body must contain a valid phoneNumber field')

export {
  firstNameValidator,
  secondNameValidator,
  birthDayValidator,
  emailValidator,
  passwordValidator,
  phoneNumberValidator
}
