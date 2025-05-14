import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  const itemCount = useSelector((state) => state.cart.itemCount);

  // Calculate subtotal
  const subtotal = cartList.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div>
      <Navbar />

      <div className="w-full px-4 md:px-10 py-30 flex flex-col lg:flex-row gap-10">
        {/* Cart Items Table */}
        <div className="flex-1">
          {cartList.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm md:text-base">
                    <th className="px-4 py-3 border-b">Image</th>
                    <th className="px-4 py-3 border-b">Product</th>
                    <th className="px-4 py-3 border-b">Price</th>
                    <th className="px-4 py-3 border-b">Category</th>
                    <th className="px-4 py-3 border-b">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((val, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <img
                          src={val.productImg}
                          alt={val.productName}
                          className="h-16 w-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm md:text-base">{val.productName}</td>
                      <td className="px-4 py-3 text-sm md:text-base">${val.productPrice}</td>
                      <td className="px-4 py-3 text-sm md:text-base">{val.productCategory}</td>
                      <td className="px-4 py-3 text-sm md:text-base">{val.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-1/3 border border-gray-200 rounded p-6 shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-3 mt-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
