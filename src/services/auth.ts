import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { BadRequestError } from '../errors/BadRequestError'
import { User } from '../db/models/User'
import { jwtSecret } from '../config'

export const login = (req: Request, res: Response): void => {
  const { username } = req.body

  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || 'secret')

  res.json({ accessToken })
}

export const signup = async (req: Request, res: Response) => {
  const { firstName, secondName, birthDay, email, password, phoneNumber } = req.body

  const existingUser = await User.findOne({ firstName, phoneNumber, email })

  if (existingUser) {
    throw new BadRequestError('Email or Phone Number in use')
  }

  const user = new User()

  user.firstName = firstName
  user.secondName = secondName
  user.birthDay = birthDay
  user.email = email
  user.password = password
  user.phoneNumber = phoneNumber

  await user.save()

  const userJwt = jwt.sign(
    {
      id: user.id
    },
    jwtSecret
  )

  req.session = {
    jwt: userJwt
  }

  res.status(201).send(user)
}
