import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import moment from 'moment';

export default class MyBookings extends React.Component {
    constructor() {
        super()
        this.state = {
            booking: [],
            id_booking: "",
            id_user: "",
            id_customer: "",
            id_room_type: "",
            booking_number: "",
            name_customer: "",
            email: "",
            booking_date: "",
            check_in_date: "",
            check_out_date: "",
            guest_name: "",
            total_room: "",
            booking_status: "",
            role: "",
            token: "",
            action: "",
            keyword: ""
        }

        this.state.id_customer = localStorage.getItem("id")
        if (localStorage.getItem("token")) {
            if (
                localStorage.getItem("role") === "customer"
            ) {
                this.state.token = localStorage.getItem("token");
                this.state.role = localStorage.getItem("role");
            } else {
                window.alert("You must register or login as customer !");
                window.location = "/logincust";
            }
        }
    }

    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getBookingByCust = () => {
        let url = "http://localhost:8080/booking/customer/" + this.state.id_customer
        axios.get(url, this.headerConfig())
            .then(response => {
                this.setState({
                    booking: response.data.data
                })
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    checkRole = () => {
        if (this.state.role !== "customer") {
            localStorage.clear()
            window.alert("You must register or login as customer !")
            window.location = '/logincust'
        }
    }

    componentDidMount() {
        this.getBookingByCust()
        this.checkRole()
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="m-6 pl-6">
                    <p className="text-xl font-semibold text-blue-600">History </p>
                    <p className="text-5xl font-bold mt-2">Transaction List</p>
                </div>

                <div className="flex flex-col mt-2 ml-12 mr-8">
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
                                                Booking Number
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Guest
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tipe Room
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Total Room
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Booking
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Check In
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Check Out
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {this.state.booking.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {item.booking_number}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {item.guest_name}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {item.room_type.name_room_type}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {item.total_room}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {moment(item.booking_date).format('DD-MM-YYYY')}

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {moment(item.check_in_date).format('DD-MM-YYYY')}

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {moment(item.check_out_date).format('DD-MM-YYYY')}

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {item.booking_status === "baru" &&
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                                {item.booking_status}
                                                            </span>
                                                        }
                                                        {item.booking_status === "check_in" &&
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                                {item.booking_status}
                                                            </span>
                                                        }
                                                        {item.booking_status === "check_out" &&
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                                {item.booking_status}
                                                            </span>
                                                        }
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        )
    }

}