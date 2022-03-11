import express, { Application } from 'express'
import cookieSession from 'cookie-session'

import 'express-async-errors'

import authRoutes from './routes/auth'
import { NotFoundError } from './errors/NotFoundError'
import { errorHandler } from './middlewares/errorHanlder'

const app: Application = express()

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
