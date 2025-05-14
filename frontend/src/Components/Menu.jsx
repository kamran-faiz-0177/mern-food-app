import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import url2 from "../utils";

const Menu = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const FetchProduct = async () => {
        try {
            const url = `${url2}api/product/fetchproduct`;
            const response = await fetch(url);
            const result = await response.json();
            const { success, message, error, productList } = result;
            if (success) {
                setProducts(productList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const FetchProductByCategory = async (category) => {
        try {
            const url = `${url2}api/product/fetchbycategory/${category}`;
            const response = await fetch(url);
            const result = await response.json();
            const { success, message, error, productList } = result;
            if (success) {
                setProducts(productList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    return (
        <div id='menu' className="w-full overflow-x-hidden p-4 sm:p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-center md:text-left">
                    Explore Our Menu
                </h1>
                <p className="mt-2 text-sm md:text-base xl:text-lg text-center md:text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum accusantium explicabo nesciunt sequi. Libero, voluptates, fugiat labore exercitationem molestiae nostrum.
                </p>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-10 gap-6 md:gap-8 border-b-2 pb-10">
                    {[
                        'Salad', 'Rolls', 'Desert', 'Sandwich', 'Cake',
                        'Pure Veg', 'Pasta', 'Noodles'
                    ].map((category, index) => (
                        <div
                            key={index}
                            onClick={() => FetchProductByCategory(category)}
                            className="cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={`./menu_${index + 1}.png`}
                                className="w-20 sm:w-24 md:w-28 xl:w-32 mx-auto rounded-full"
                                alt={category}
                            />
                            <h2 className="text-center mt-3 text-gray-600 text-sm sm:text-base xl:text-lg font-semibold">
                                {category}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Products Section */}
                <div>
                    <h1 className="text-xl md:text-2xl mt-10 font-bold text-center md:text-left">
                        Top Dishes Near You
                    </h1>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 text-center rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-lg font-semibold line-clamp-1">{item.productName}</h2>
                                <img
                                    src={item.productImg}
                                    alt={item.productName}
                                    className="w-full h-40 object-cover rounded mt-4"
                                />
                                <p className="text-sm mt-4 text-gray-700 line-clamp-4">
                                    {item.productDescription}
                                </p>
                                <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow">
                                    <p className="text-lg font-semibold text-orange-500 font-mono">
                                        Price: ${item.productPrice}
                                    </p>
                                    <button
                                        className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300"
                                        onClick={() => dispatch(addItem(item))}
                                    >
                                        <FaCartPlus className="text-white text-xl" />
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
