import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subjectMaterial: {
      type: String,
      required: true,
    },
    subjectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

export const Subject = mongoose.model("Subject", subjectSchema);
