import { db } from "../config/database.js";

class ProductModel {
    getProducts = (result) => {
        let sql = "SELECT * FROM product";
        db.query(sql, (err, results) =>
            err ? result(err, null) : result(null, results)
        );
    };

    getProductById = (id, result) => {
        let sql = "SELECT * FROM product WHERE product_id = ?";
        db.query(sql, [id], (err, results) =>
            err ? result(err, null) : result(null, results[0])
        );
    };

    deleteProductById = (id, result) => {
        let sql = "DELETE FROM product WHERE product_id = ?";
        db.query(sql, [id], (err, results) =>
            err ? result(err, null) : result(results)
        );
    };
}

export default ProductModel;
