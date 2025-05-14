import React, { useState } from 'react';
import url2 from '../../utils';

const AddItems = () => {
  const [productImg, setProductImg] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const HandleSubmit = async () => {
    try {
      if (!productImg || !productDescription || !productName || !productPrice || !productCategory) {
        console.log("Any of the fields cannot be empty");
        return;
      }

      const url = `${url2}api/product/addproduct1`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ productImg, productName, productDescription, productPrice, productCategory }),
      };

      const response = await fetch(url, options);
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        console.log(message);
        // Reset form fields
        setProductImg('');
        setProductName('');
        setProductDescription('');
        setProductCategory('');
        setProductPrice('');
      } else {
        console.log(error || message);
      }
    } catch (error) {
      console.log(`Error in catch block of add items = ${error.message}`);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl border-2 p-6 sm:p-10 flex flex-col gap-6 bg-white shadow-md rounded-md">
        {/* Upload Image */}
        <div>
          <p className="font-semibold text-lg sm:text-xl mb-2">Upload Image</p>
          <input
            type="text"
            placeholder="Enter Image Address"
            className="border border-gray-400 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
          />
        </div>

        {/* Product Name */}
        <div>
          <p className="font-semibold text-lg sm:text-xl mb-2">Product Name</p>
          <input
            type="text"
            placeholder="Type Here"
            className="border border-gray-400 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Product Description */}
        <div>
          <p className="font-semibold text-lg sm:text-xl mb-2">Product Description</p>
          <textarea
            placeholder="Write Content Here"
            className="border border-gray-400 p-2 w-full h-24 sm:h-32 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        {/* Category and Price */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <p className="font-semibold text-md mb-2">Product Category</p>
            <select
              className="border border-gray-400 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-md mb-2">Product Price</p>
            <input
              type="number"
              placeholder="20$"
              className="border border-gray-400 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="bg-black text-white w-40 h-10 rounded-sm hover:bg-gray-800 transition-colors"
            onClick={HandleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
