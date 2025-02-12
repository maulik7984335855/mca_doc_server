import express from 'express'
import { addMaterial, deleteMaterial, getAllMaterial, updateMaterial } from '../controller/subject.js';
import { upload } from '../config/cloudinary.js';
import { isauthenticated } from '../middleware/Auth.js';

const router = express.Router()

router.post('/add',upload.single('subjectMaterial'),addMaterial)

router.get('/get',getAllMaterial)

router.put('/update/:id',upload.single('subjectMaterial'),updateMaterial)

router.delete('/delete/:id',isauthenticated,deleteMaterial)

export default router;