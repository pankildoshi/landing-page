import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-6 shadow-xl bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100 rounded-md">
                <h1 className="text-3xl block text-center text-indigo-600  font-semibold">Login</h1>
                <hr className="mt-3 text-black" />
                <div className="mt-3">
                    <label for="username" className="block mb-2 text-indigo-600 font-semibold">Username</label>
                    <input type="text" id="username" className="border bg-transparent w-full text-base px-2 py-1 focus:outline-none border-3 border-indigo-500 hover:border-indigo-300 focus:border-indigo-900 text-black" placeholder="Enter Username..." />
                </div>
                <div className="mt-3">
                    <label for="password" className="block mb-2 text-indigo-600 font-semibold">Password</label>
                    <input type="password" id="password" className="border bg-transparent w-full text-base px-2 py-1 focus:outline-none border-3 focus:border-indigo-600 border-3 border-indigo-500 hover:border-indigo-300 text-black" placeholder="Enter Password..." />
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" />
                        <label className='ml-2 text-indigo-600'>Remember Me</label>
                    </div>
                    <div>
                        <a href="#" className="text-indigo-600 font-semibold">Forgot Password?</a>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-indigo-900">Login</button>
                    <h5 className="text-gray-500 mt-5">Don’t have an account yet? <span className="text-indigo-600"><Link to="/signup">Sign up</Link></span></h5>                
                </div>
            </div>
        </div>
    );
}