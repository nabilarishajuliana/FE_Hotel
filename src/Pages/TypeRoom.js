import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import '../styles/room.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilSquare } from "@fortawesome/free-solid-svg-icons";

export default class TypeRoom extends React.Component {
    render() {
        return (
            <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Sidebar />
                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Header />
                    <div class="main-content flex flex-col flex-grow p-4">
                        <div class="mb-4">
                            <div className="flex items-center">
                                <div className="flex rounded w-1/2">
                                    <input
                                        type="text"
                                        className="w-5/6 block w-full px-4 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                                        placeholder="Search..."
                                    />
                                    <button className="w-1/6 ml-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-1">
                                {/* Card untuk type room */}
                                <div class="CardEvent">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                        <div className='container'>
                                            <img class="w-full h-48" src="/assets/roomType1.png" />
                                            <button class='btn'><FontAwesomeIcon icon={faTrash} size="lg" color="red" /></button>
                                            <button class='btn1'><FontAwesomeIcon icon={faPencilSquare} size="xl" color="orange" /></button>
                                        </div>
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-2xl mb-2">The Coldest Sunset</div>
                                            <div class="font-bold text-xl mb-2 text-blue-600">Rp 20.000 /night</div>
                                            <p class="text-gray-700 text-base">
                                                <LinesEllipsis
                                                    text="This is a long text that needs to be limited Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                                                    maxLine="3"
                                                    ellipsis="..."
                                                />
                                            </p>
                                        </div>
                                        <div class="px-6 pt-4 pb-2">
                                            <button class="mb-2 ml-48 bg-blue-600 hover:bg-blue-500 text-white font-bold p-2 w-1/3 rounded focus:outline-none focus:shadow-outline" type="button">
                                                <a href="/dashboard">
                                                    Detail
                                                </a>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-span-1">
                                <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
                            </div>
                            <div class="col-span-1">
                                <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
                            </div>
                            <div class="col-span-1">
                                <div class="CardEvent">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                        <div className='container'>
                                            <img class="w-full h-48" src="/assets/roomType1.png" />
                                            <button class='btn'><FontAwesomeIcon icon={faTrash} size="lg" color="red" /></button>
                                            <button class='btn1'><FontAwesomeIcon icon={faPencilSquare} size="xl" color="orange" /></button>
                                        </div>
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-2xl mb-2">The Coldest Sunset</div>
                                            <div class="font-bold text-xl mb-2 text-blue-600">Rp 20.000 /night</div>
                                            <p class="text-gray-700 text-base">
                                                <LinesEllipsis
                                                    text="This is a long text that needs to be limited Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                                                    maxLine="3"
                                                    ellipsis="..."
                                                />
                                            </p>
                                        </div>
                                        <div class="px-6 pt-4 pb-2">
                                            <button class="mb-2 ml-48 bg-blue-600 hover:bg-blue-500 text-white font-bold p-2 w-1/3 rounded focus:outline-none focus:shadow-outline" type="button">
                                                <a href="/dashboard">
                                                    Detail
                                                </a>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-span-1">
                                <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
                            </div>
                            <div class="col-span-1">
                                <div class="text-gray-700 text-center bg-gray-400 p-2">6</div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                    <footer class="footer px-4 py-2">
                        <div class="footer-content">
                            <p class="text-sm text-gray-600 text-center">© Brandname 2023. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a></p>
                        </div>
                    </footer>
                </main >
            </div >


        );


    }
}