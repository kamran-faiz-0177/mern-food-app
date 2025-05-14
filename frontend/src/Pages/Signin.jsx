import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from "../store/authSlice";
import url2 from "../utils";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = async () => {
    if (!email || !password) {
      console.log('email, or password cannot be empty');
      return;
    }

    try {
      const url = `${url2}api/user/signin`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(url, options);
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        console.log(message);
        dispatch(signIn(email));
        navigate('/');
      } else {
        console.log('Signin failed:', message || error);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="border-2 border-white bg-white w-[400px] h-[500px] rounded-2xl flex flex-col items-center justify-center gap-6 shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl text-center font-bold text-blue-600">Sign In</h1>
        <div className="flex flex-col gap-4 w-[80%]">
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 w-[60%] h-[40px] rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 transform transition duration-300"
            onClick={HandleSubmit}
          >
            Sign In
          </button>
        </div>
        <p className="mt-4 text-lg text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
