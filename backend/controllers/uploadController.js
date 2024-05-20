import express from "express"
import multer from "multer"
import { verifyToken} from "../midllewares/verifyToken.js"
const router =express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../public/images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage
    // same as storage: storage
})

// req.body.image
router.post('/image', verifyToken, upload.single('image'), (req, res) => {
  try {
    return res.status(201).json({msg: "Successfully uploaded file"})
  } catch (error) {
    console.error(error.message)
  }
})

export {router as uplRouter}