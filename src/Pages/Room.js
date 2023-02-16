import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPencilSquare } from "@fortawesome/free-solid-svg-icons";

let people = [
    {
        ID: "01",
        roomNumber: "Room-0012",
        roomType: "Exlusive",
        
    },
];


export default class Room extends React.Component {

    render() {
        return (
            <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Sidebar />
                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Header />
                    <div class="main-content flex flex-col flex-grow p-4">
                        <h1 class="font-bold text-xl text-black-700">Daftar Room</h1>

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

                        <div className="flex flex-col mt-2">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        No
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Room Number
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Room Type
                                                    </th>
                                                    
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {people.map((person) => (
                                                    <tr key={person.ID}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">1</div>
                                                        </td>
                                                        
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {person.ID}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {person.roomNumber}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                                {person.roomType}
                                                            </span>
                                                        </td>
                                                        
                                                        {/* px-6 py-4 whitespace-nowrap text-center text-sm font-medium */}
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <button class="bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded mr-2">
                                                                <FontAwesomeIcon icon={faPencilSquare} size="lg" />
                                                            </button>
                                                            <button class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
                                                                <FontAwesomeIcon icon={faTrash} size="lg" />
                                                            </button>
                                                            {/* <a href="#" className="text-indigo-600 hover:text-indigo-900" > Edit </a>
                                                                <a href="#" className="text-indigo-600 hover:text-indigo-900" > hapus </a> */}
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
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