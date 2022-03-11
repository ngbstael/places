import express from 'express'

import { login, signup } from '../services/auth'
import { validateRequest } from '../middlewares/validateRequest'
import {
  birthDayValidator,
  emailValidator,
  firstNameValidator,
  passwordValidator,
  phoneNumberValidator,
  secondNameValidator
} from '../validators'

const router = express.Router()

router.route('/login').post(login)

router.route('/signup').post(
  [
    firstNameValidator,
    secondNameValidator,
    birthDayValidator,
    emailValidator,
    passwordValidator,
    phoneNumberValidator
  ],
  validateRequest,
  signup
)

export default router
