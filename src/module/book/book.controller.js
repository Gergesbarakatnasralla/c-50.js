import { Router } from 'express'
import {
  addBook, addBooksBatch, updateBookYear,
  getBookByTitle, getBooksByYearRange, getBooksByGenre,
  getBooksSkipLimit,getBooksYearInteger,getBooksExcludeGenres, deleteBooksBeforeYear,getBooksAggregate1,getBooksAggregate2,getLogsWithBooks,getBooksAggregate3
} from './book.service.js'
const router = Router()
///////q5
router.post('/', async (req, res) => {
  try {
    const result = await addBook(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
///q6
router.post('/batch', async (req, res) => {
  try {
    const result = await addBooksBatch(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
///q8
router.patch('/:title', async (req, res) => {
  try {
    const result = await updateBookYear(req.params.title, req.body.year)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/////q9
router.get('/title', async (req, res) => {
  try {
    const result = await getBookByTitle(req.query.title)
    if (!result) return res.status(404).json({ message: 'Book not found' })
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

////q10
router.get('/year', async (req, res) => {
  try {
    const { from, to } = req.query
    const result = await getBooksByYearRange(from, to)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

///q11
router.get('/genre', async (req, res) => {
  try {
    const result = await getBooksByGenre(req.query.genre)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/////q12
router.get('/skip-limit', async (req, res) => {
  try {
    const result = await getBooksSkipLimit()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/////13
router.get('/year-integer', async (req, res) => {
  try {
    const result = await getBooksYearInteger()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/////q14
router.get('/exclude-genres', async (req, res) => {
  try {
    const result = await getBooksExcludeGenres()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/////q15
router.delete('/before-year', async (req, res) => {
  try {
    const result = await deleteBooksBeforeYear(req.query.year)
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
///q16
router.get('/aggregate1', async (req, res) => {
  try {
    const result = await getBooksAggregate1()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
////17
router.get('/aggregate2', async (req, res) => {
  try {
    const result = await getBooksAggregate2()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

///19
router.get('/aggregate4', async (req, res) => {
  try {
    const result = await getLogsWithBooks()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
router.get('/aggregate3', async (req, res) => {
  try {
    const result = await getBooksAggregate3()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default router