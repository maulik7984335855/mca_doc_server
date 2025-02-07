import express from 'express'
import { addMaterial, getAllMaterial } from '../controller/subject.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router()

router.post('/add',upload.single('subjectMaterial'),addMaterial)

router.get('/get',getAllMaterial)

export default router;