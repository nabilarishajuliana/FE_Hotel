import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class HistoryTransaksi extends React.Component {
    render() {
        return (
            <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Sidebar />
                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Header />
                    <div class="main-content flex flex-col flex-grow p-4">

                        <h1 class="font-bold text-xl text-black-700">Daftar History Transaksi Customer</h1>
                        <p class="text-gray-700">For History Booking Room</p>

                        <div className="flex mt-2 flex-row-reverse">
                            <div className="flex rounded w-1/3">
                                <input
                                    type="text"
                                    className="w-2/3 block w-full px-4 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                                    placeholder="Search..."
                                />
                                <button className="w-1/3 ml-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700">
                                    <FontAwesomeIcon icon={faPlus} size="" /> Add
                                </button>
                            </div>
                        </div>



                    </div>
                    <footer class="footer px-4 py-2">
                        <div class="footer-content">
                            <p class="text-sm text-gray-600 text-center">© Brandname 2023. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a></p>
                        </div>
                    </footer>
                </main>
            </div>


        );


    }
}