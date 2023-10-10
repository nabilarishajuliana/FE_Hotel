import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nama_user: "",
      isModalOpen: false,
      logged: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let url = "http://localhost:8000/user/login";
    axios
      .post(url, data)
      .then((response) => {
        this.setState({ logged: response.data.data.logged });
        if (response.status === 200) {
          if (
            response.data.data.role === "admin" ||
            response.data.data.role === "resepsionis"
          ) {
            let id = response.data.data.id_user;
            let token = response.data.data.token;
            let role = response.data.data.role;
            let email = response.data.data.email;
            let nama_user = response.data.data.nama_user;
            let foto = response.data.data.foto;

            localStorage.setItem("id", id);
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("email", email);
            localStorage.setItem("username", nama_user);
            localStorage.setItem("foto", foto);

            alert("Success Login");
            window.location.href = "/dashboard";
            console.log(response.data);
          } else {
            let id = response.data.data.id_user;
            let token = response.data.data.token;
            let role = response.data.data.role;
            let email = response.data.data.email;
            let nama_user = response.data.data.nama_user;
            localStorage.setItem("id", id);
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("email", email);
            localStorage.setItem("username", nama_user);

            alert("Success Login");
            window.location.href = "/home";
            console.log(response.data);
          }
        } else {
          alert(response.data.message);
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => {
        console.log("error", error.response.status);
        if (error.response.status === 500 || error.response.status === 404) {
          window.alert("Failed to login dashboard");
          console.log(error.response.status);
        }
      });
  };
  preventBack = () => {
    window.history.forward();
  };

  componentDidMount() {
    this.preventBack();
    window.addEventListener("popstate", this.preventBack);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.preventBack);
  }

  render() {
    return (
      // <div className="dashboard1">
      //     <div class="flex">
      //         <div class="w-1/2 bg-gray-200 text-left">
      //             <form class="bg-gray-100 shadow-md rounded px-8 pt-6 p-8 m-24 mt-30" onSubmit={(e) => this.handleLogin(e)}>
      //                 <p class="text-gray-700 text-2xl font-bold mb-8 text-center">Login Dashboard Slippy</p>
      //                 <div class="mb-4">
      //                     <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      //                         Email
      //                     </label>
      //                     <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email_user" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
      //                 </div>
      //                 <div class="mb-6">
      //                     <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      //                         Password
      //                     </label>
      //                     <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
      //                 </div>
      //                 <div class="flex items-center justify-between">
      //                     <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="submit">
      //                         Login
      //                     </button>
      //                 </div>
      //             </form>
      //         </div>
      //         <div class="w-1/2 bg-gray-500 text-center">
      //             <img src="/assets/loginnn.jpeg" className="w-screen h-screen" alt="" />
      //         </div>
      //     </div>
      // </div>

      <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-amber-50 bg-opacity-40">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl  text-red-800">
              Log In Cherry Blossom<span className="text-green-700"> Resort!</span> 
            </h1>

            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form onSubmit={(e) => this.handleLogin(e)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className=" text-gray-700 text-lg font-bold pl-2 pb-4">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email_user" 
                  name="email"
                  className="w-full rounded-lg border-gray-200 bg-blue-300 bg-opacity-30 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={this.state.email} 
                  onChange={this.handleChange} 
                  required
                />

            
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 text-lg font-bold pl-2 pb-4">
                Password
              </label>

              <div className="relative">
                <input
                id="password" 
                name="password"
                  type="password"
                  className="w-full rounded-lg border-gray-200 bg-blue-300 bg-opacity-30 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={this.state.password} 
                  onChange={this.handleChange} 
                  required
                />

                
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="registercust">
                  Create your Account
                </a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-gradient-to-br from-lime-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-10 py-3 text-sm font-bold text-white "
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 bg-gray-900">
          <img
            alt="Welcome"
            src="/assets/lobby4.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80 "
          />
        </div>
      </section>
    );
  }
}
