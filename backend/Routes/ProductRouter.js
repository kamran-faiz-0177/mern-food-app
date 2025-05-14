const router = require("express").Router();
const { AddProduct, DeleteProduct, FetchProduct, FetchProductByCategoroy } = require("../Controllers/ProductController");

router.post("/addproduct", AddProduct);
router.delete("/deleteproduct/:id", DeleteProduct);
router.get("/fetchproduct",FetchProduct);
router.get("/fetchbycategory/:category",FetchProductByCategoroy);

module.exports = router;