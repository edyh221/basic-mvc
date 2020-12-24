import ProductModel from "../models/ProductModel.js";

class ProductController {
    constructor() {
        this.product = new ProductModel();
    }

    showProducts = (req, res) => {
        this.product.getProducts((err, results) => {
            err
                ? res.send(err)
                : res.render("show-product", { products: results });
        });
    };

    showProductById = (req, res) => {
        this.product.getProductById(req.params.id, (err, results) => {
            err
                ? res.send(err)
                : res.render("show-product-detail", { product: results });
        });
    };

    deleteProductById = (req, res) => {
        this.product.deleteProductById(req.params.id, (err, results) => {
            err ? res.send(err) : res.json(results);
        });
    };

    addProduct = (req, res) => {
        res.render("add-product");
    };
}

export default ProductController;
