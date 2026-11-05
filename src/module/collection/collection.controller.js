////Q1///
import { Router } from 'express'
import {
  createBooksCollection,
  createAuthor,
  createLogsCappedCollection,  createBooksTitleIndex,
} from './collection.service.js'

const router = Router()

router.post('/books', async (req, res) => {
  try {
    const result = await createBooksCollection()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
///q2
router.post('/authors', async (req, res) => {
  try {
    const result = await createAuthor(req.body)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
//q3
router.post('/logs/capped', async (req, res) => {
  try {
    const result = await createLogsCappedCollection()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
////q4
router.post('/books/index', async (req, res) => {
  try {
    const result = await createBooksTitleIndex()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router