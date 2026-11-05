import express from 'express'
import config from './config/db.config.js'
import connectDB from './DB/db.connection.js'
import collectionRouter from './module/collection/collection.controller.js'
import bookRouter from './module/book/book.controller.js'
import logRouter from './module/log/log.controller.js'


const app = express()
app.use(express.json())
app.use('/collection', collectionRouter)
app.use('/books', bookRouter)
app.use('/log', logRouter)
connectDB()


app.listen(3000, () => {
  console.log("server is runningin port ",3000)
})