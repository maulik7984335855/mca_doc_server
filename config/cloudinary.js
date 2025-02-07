import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
      return {
        
        format: file.mimetype.split('/')[1], // Get file format dynamically
        public_id: file.originalname.split('.')[0], // Use filename as public_id
      };
    },
  });

const upload = multer({ storage });

export { cloudinary, upload };
