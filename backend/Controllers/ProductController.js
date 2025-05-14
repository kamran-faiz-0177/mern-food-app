const ProductModel = require("../Models/ProductModel");

const AddProduct = async (req, res) => {
    try {
        const { productImg, productDescription, productName, productPrice, productCategory } = req.body;
        const addproduct = new ProductModel({ productImg, productDescription, productName, productPrice, productCategory });
        await addproduct.save();

        res.status(200).json({
            message: 'product added successfully',
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to add product",
            error: error.message,
        })
    }
};

const FetchProduct = async (req, res) => {
    try {
      const productList = await ProductModel.aggregate([{ $sample: { size: 8 } }]);
      res.status(200).json({
        message: "Random products fetched successfully",
        success: true,
        productList,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error while fetching products",
        error: error.message,
      });
    }
  };
  

const FetchProductByCategoroy = async (req, res) => {
    try {
        const { category } = req.params;
        const productList = await ProductModel.find({ productCategory: category });
        res.status(200).json({
            message: "product fetch by category is successfull",
            success: true,
            productList,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to add product",
            error: error.message,
        })
    }
}

const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductModel.findByIdAndDelete(id);
        const productList = await ProductModel.find();

        res.status(200).json({
            message: 'product deleted successfully',
            success: true,
            productList,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to delete product",
            error: error.message,
        })
    }
};


module.exports = { AddProduct, DeleteProduct, FetchProduct, FetchProductByCategoroy };