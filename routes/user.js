import express from 'express'
import { fetchAllMessages, sendMessage } from '../controller/user.js'

const router = express.Router()

//send message
router.post('/send',sendMessage)

//fetch
router.get('/get',fetchAllMessages)

export default router