import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import process from 'process'

const authenticateToken = (req: Request, res: Response, next:NextFunction) => {
  const authHeader = req.headers.authorization

  const token = authHeader && authHeader?.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || '', (err, user) => {
    if (err) return res.sendStatus(403)

    next()
  })
}

export default authenticateToken
