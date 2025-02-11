import { Subject } from "../Models/Subject.js";

// Add Subject Material
export const addMaterial = async (req, res) => {
  try {
    const { subjectName, description } = req.body;

    // Validate required fields
    if (!subjectName || !description) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Validate file upload
    if (!req.file || !req.file.path) {
      return res
        .status(400)
        .json({ message: "Material not found", success: false });
    }

    // Create new subject entry
    const subject = await Subject.create({
      subjectMaterial: req.file.path, // Cloudinary file URL
      subjectName,
      description,
    });

    res
      .status(201)
      .json({ message: "Material added successfully", success: true, subject });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get All Subject Materials
export const getAllMaterial = async (req, res) => {
  try {
    const subjects = await Subject.find(); // Returns an array

    res.status(200).json({ message: "Success", success: true, subjects });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

//update the content
export const updateMaterial = async (req, res) => {
  try {
    const id = req.params.id;
    const { subjectName, description } = req.body;

    // Validate required fields
    if (!subjectName || !description) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    let subject = await Subject.findById(id);
    if (!subject) {
      return res.json({ message: "Subject Not Found", success: false });
    }
    const updateData = {
      subjectName,
      description,
      subjectMaterial: req.file ? req.file.path : subject.subjectMaterial,
    };
    subject = await Subject.findByIdAndUpdate(id, updateData, { new: true });
    if (!subject) {
      return res.json({ message: "Update Failed", success: false });
    }
    res.json({
      message: "Update Material Successfully",
      success: true,
      subject,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
