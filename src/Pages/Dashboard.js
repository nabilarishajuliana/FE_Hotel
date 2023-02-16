import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Sidebar />
                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Header />
                    <div class="main-content flex flex-col flex-grow p-4">
                        <div class="flex flex-row h-40">
                            <div class="w-1/2 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md ">
                                <p>Jumlah Type Room</p>
                                <p>20</p>
                            </div>
                            <div class="w-1/2 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">
                                <p>Jumlah Room</p>
                                <p>20</p>
                            </div>
                        </div>
                        <div class="flex flex-row h-40">
                            <div class="w-1/2 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md ">
                                <p>Jumlah User</p>
                                <p>20</p>
                            </div>
                            <div class="w-1/2 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">
                                <p>Jumlah Customer</p>
                                <p>20</p>
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