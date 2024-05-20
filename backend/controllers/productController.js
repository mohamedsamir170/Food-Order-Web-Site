import express from "express"
import { Product } from "../models/Product.js"
import { verifyToken ,verifyTokenAdmin } from "../midllewares/verifyToken.js"
const router = express.Router()
// get all
router.get('/', verifyToken, async(req, res) => {
    try {
        const products = await Product.find(req.query)
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
})

// get one
router.get('/find/:id', verifyToken, async(req, res) => {
   try {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if(!product){
        return res.status(500).json({msg: "No product with such id!"})
    }
    return res.status(200).json(product)
   } catch (error) {
    console.error(error)
   }
})

// create product
router.post('/', verifyTokenAdmin, async(req, res) => {
    try {
        const newProduct = await Product.create({...req.body})
        return res.status(201).json(newProduct)
    } catch (error) {
        console.error(error)
    }
})

export {router as prodRouter}