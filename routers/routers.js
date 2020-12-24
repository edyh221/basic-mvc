import express from "express";
import ProductController from "../controllers/ProductController.js";
const router = express.Router();
const product = new ProductController();

router.get("/", product.showProducts);
router.get("/add", product.addProduct);
router.post("/add", (req, res) => {
    console.log(req);
});
router.get("/:id(\\d+)", product.showProductById);
router.delete("/:id(\\d+)", product.deleteProductById);

export default router;
