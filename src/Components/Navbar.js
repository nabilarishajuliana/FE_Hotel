import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            role: ""
        }

        this.state.role = localStorage.getItem("role")
    }

    logout = () => {
        if (window.confirm("Are you sure to logout?")) {
            window.location = '/logincust'
            localStorage.clear()
        }
    }

    render() {
        return (
            <div>
                <nav className="bg-gray-50 drop-shadow-md md:drop-shadow-xl">
                    <div className="max-w-7xl mx-5 px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mr-10">
                                <div className="flex-shrink-0 flex items-center mr-2">
                                    <NavLink to="/home" className="hidden lg:block h-10 ml-3 w-10 mr-0 ">
                                        <img src="/assets/logo.png" alt="icon" />
                                    </NavLink>
                                </div>
                                {/* ini kalau semisal setelah login */}
                                {/* <div className="hidden sm:block sm:ml-1 mx-10">
                                    <div className="menu flex space-x-4 ml-10 ">
                                        <NavLink to="/home" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>
                                        <NavLink to="/services" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Services</NavLink>
                                        <NavLink to="/rooms" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Rooms</NavLink>
                                        <NavLink to="/mybookings" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">My Bookings</NavLink>
                                        <NavLink to="/home" className="no-underline text-gray-800 hover:text-blue-800 px-3 py-2 rounded-md text-2xl font-medium" aria-current="page" id="profile"><FontAwesomeIcon icon={faUser}/></NavLink>
                                        <button onClick={() => this.logout()} className="no-underline text-gray-800 px-3 py-2 hover:text-blue-800 rounded-md text-2xl font-medium" aria-current="page" ><FontAwesomeIcon icon={faSignOut}/></button>
                                    </div>
                                </div> */}

                                {/* ini kalau semisal sudah login */}
                                <div className="hidden sm:block sm:ml-1 mx-10">
                                    <div className="menu flex space-x-4 ml-10 ">
                                        <NavLink to="/home" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>
                                        <NavLink to="/services" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Services</NavLink>
                                        <NavLink to="/rooms" className="no-underline text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Rooms</NavLink>
                                        <NavLink to="/logincust" className="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-md" aria-current="page" id="profile" variant="outlined">Login</NavLink>
                                        <NavLink to="/registercust" className="no-underline text-gray-800 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-sm font-medium" aria-current="page" id="profile">Register</NavLink>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                </div>
            </div>
        )
    }
}