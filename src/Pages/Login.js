import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {

    render() {
        return (
            <div className="dashboard1">
                <div class="flex">
                    <div class="w-1/2 bg-gray-200 text-left">
                        <form class="bg-gray-100 shadow-md rounded px-8 pt-6 p-8 m-24 mt-30">
                            <p class="text-gray-700 text-2xl font-bold mb-8 text-center">Login Dashboard Slippy</p>
                            {/* <p class="text-gray-700 text-sm font mb-8">Silahkan login untuk mengakses laman dashboard</p> */}
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                    <a href="/dashboard">
                                        Login
                                    </a>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="w-1/2 bg-gray-500 text-center">
                        <img src="/assets/loginnn.jpeg" className="w-screen h-screen" alt="" id="logo" />
                    </div>
                </div>
            </div>
        );
    }
}
