import express from 'express'
import { addMaterial, getAllMaterial, updateMaterial } from '../controller/subject.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router()

router.post('/add',upload.single('subjectMaterial'),addMaterial)

router.get('/get',getAllMaterial)

router.put('/update/:id',updateMaterial)

export default router;