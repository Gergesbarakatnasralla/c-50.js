import { Router } from 'express'
import { addlog} from './log.service.js'

const router = Router()
router.post('/log', async (req, res) => {
  try {
    const result = await addlog(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default router; 