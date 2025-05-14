import React, { useEffect, useState } from 'react';
import url2 from '../../utils';

const ListItems = () => {
  const [products, setProducts] = useState([])

  const FetchProduct = async () => {
    try {
      const url = `${url2}api/product/fetchproduct`;
      const response = await fetch(url);
      const result = await response.json();
      const { success, message, error, productList } = result;
      if (success) {
        console.log(message);
        setProducts(productList);
      } else {
        console.log(message, error);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    FetchProduct();
  }, [])


  const handleDelete = async (id) => {
    try {
      console.log(id);
      const url = `${url2}api/product/deleteproduct/${id}`;
      const options = {
        method: 'DELETE',
      };
      const response = await fetch(url, options);
      const result = await response.json();
      const { success, message, error, productList } = result;
      if (success) {
        console.log(message);
        setProducts(productList);
      } else {
        console.log(message, error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price ($)</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.productImg}
                    alt={product.productName}
                    className="w-20 h-16 object-cover mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border-b">{product.productCategory}</td>
                <td className="py-2 px-4 border-b">{product.productName}</td>
                <td className="py-2 px-4 border-b">{product.productPrice}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListItems;
