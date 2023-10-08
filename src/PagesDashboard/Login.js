import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            nama_user: "",
            isModalOpen: false,
            logged: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        let url = "http://localhost:8000/user/login"
        axios.post(url, data)
            .then(response => {
                this.setState({ logged: response.data.data.logged })
                if (response.status === 200) {
                    if (response.data.data.role === "admin" || response.data.data.role === "resepsionis") {
                        let id = response.data.data.id_user
                        let token = response.data.data.token
                        let role = response.data.data.role
                        let email = response.data.data.email
                        let nama_user = response.data.data.nama_user
                        let foto = response.data.data.foto

                        localStorage.setItem("id", id)
                        localStorage.setItem("token", token)
                        localStorage.setItem("role", role)
                        localStorage.setItem("email", email)
                        localStorage.setItem("username", nama_user)
                        localStorage.setItem("foto", foto)


                        alert("Success Login")
                        window.location.href = "/dashboard"
                        console.log(response.data)
                    }

                    else{
                        let id = response.data.data.id_user
                        let token = response.data.data.token
                        let role = response.data.data.role
                        let email = response.data.data.email
                        let nama_user = response.data.data.nama_user
                        localStorage.setItem("id", id)
                        localStorage.setItem("token", token)
                        localStorage.setItem("role", role)
                        localStorage.setItem("email", email)
                        localStorage.setItem("username", nama_user)

                        alert("Success Login")
                        window.location.href = "/home"
                        console.log(response.data)
                    }

                } else {
                    alert(response.data.message)
                    this.setState({ message: response.data.message })

                }
            })
            .catch(error => {
                console.log("error", error.response.status)
                if (error.response.status === 500 || error.response.status === 404) {
                    window.alert("Failed to login dashboard");
                    console.log( error.response.status)

                }
            })
    }

    render() {
        return (
            <div className="dashboard1">
                <div class="flex">
                    <div class="w-1/2 bg-gray-200 text-left">
                        <form class="bg-gray-100 shadow-md rounded px-8 pt-6 p-8 m-24 mt-30" onSubmit={(e) => this.handleLogin(e)}>
                            <p class="text-gray-700 text-2xl font-bold mb-8 text-center">Login Dashboard Slippy</p>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email_user" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="w-1/2 bg-gray-500 text-center">
                        <img src="/assets/loginnn.jpeg" className="w-screen h-screen" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
