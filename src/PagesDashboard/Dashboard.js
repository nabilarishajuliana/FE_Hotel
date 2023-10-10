import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import axios from 'axios'

export default class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            user: [],
            customer: [],
            typeroom: [],
            room: [],
            role: "",
            token: "",
            nama_user:"",
            action: ""

        }

        if (localStorage.getItem("token")) {
            if (localStorage.getItem("role") === "admin" ||
                localStorage.getItem("role") === "resepsionis") {
                this.state.token = localStorage.getItem("token")
                this.state.role = localStorage.getItem("role")
                this.state.nama_user = localStorage.getItem("username")

            } else {
                window.alert("You're not admin or resepsionis!")
                window.location = "/"
            }
        }
    }

    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header;
    }

    getUser = () => {
        let url = "http://localhost:8000/user/getAllUser";
        axios
            .get(url, this.headerConfig())
            .then((response) => {
                const userData = response.data.data.filter(item => item.role === "admin" || item.role === "resepsionis");
                const customerData = response.data.data.filter(item => item.role === "customer");

            this.setState({
                user: userData,
                customer: customerData,

            });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // getCustomer = () => {
    //     let url = "http://localhost:8000/user/getAllUser";
    //     axios.get(url)
    //         .then((response) => {
    //             const customerData = response.data.data.filter(item => item.role === "customer");
            
    //         this.setState({
    //             customer: customerData,
    //         });
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    getRoom = () => {
        let url = "http://localhost:8000/kamar/getAllKamar"
        axios.get(url)
            .then(response => {
                this.setState({
                    room: response.data.data
                })
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getTypeRoom = () => {
        let url = "http://localhost:8000/tipeKamar/getAllTipe"
        axios.get(url)
            .then(response => {
                this.setState({
                    typeroom: response.data.data
                })
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    checkRole = () => {
        if (this.state.role !== "admin" && this.state.role !== "resepsionis") {
            localStorage.clear()
            window.alert("You're not admin or resepsionis!")
            window.location = '/'
        }
    }

    componentDidMount() {
        this.getUser();
        // this.getCustomer();
        this.getRoom()
        this.getTypeRoom()
        this.checkRole()
    }

    render() {
        return (
            <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Sidebar />
                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Header />
                    <div className='relative'>
                    <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
        alt=""
      />
                        <div class="relative main-content flex flex-col flex-grow p-4">
                        {/* <div class="flex flex-row h-40">
                            <div class="w-1/2 text-gray-700 text-center bg-rose-300 px-4 py-2 m-2 rounded-md border-2  border-rose-400 ">
                                <p class="mt-8 text-xl font-medium">Jumlah User</p>
                                <p class="text-lg font-bold">{this.state.user}</p>
                            </div>
                            <div class="w-1/2 text-gray-700 text-center bg-fuchsia-300 px-4 py-2 m-2 rounded-md border-2  border-fuchsia-400 ">
                                <p class="mt-8 text-xl font-medium">Jumlah Customer</p>
                                <p class="text-lg font-bold">{this.state.customer}</p>
                            </div>
                        </div>
                        <div class="flex flex-row h-40">
                            <div class="w-1/2 text-gray-700 text-center bg-sky-300 px-4 py-2 m-2 rounded-md border-2  border-sky-400 ">
                                <p class="mt-8 text-xl font-medium">Jumlah Room</p>
                                <p class="text-lg font-bold">{this.state.room}</p>
                            </div>
                            <div class="w-1/2 text-gray-700 text-center bg-cyan-300 px-4 py-2 m-2 rounded-md border-2  border-cyan-400 ">
                                <p class="mt-8 text-xl font-medium">Jumlah Type Room</p>
                                <p class="text-lg font-bold">{this.state.typeroom}</p>
                            </div>
                        </div> */}
                        {/* <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div> */}

                        <section className="dark:bg-gray-800 dark:text-gray-100">
                            <div className="container mx-auto flex flex-col items-center px-4 py-16  text-center md:py-20 md:px-10 lg:px-32 xl:max-w-3xl">
                                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Selamat Datang&nbsp;
                                    <span className="text-red-700">{this.state.nama_user.charAt(0).toUpperCase() + this.state.nama_user.slice(1)}</span> Di Cherry Blossom Resort
                                </h1>
                                <p className="px-8 mt-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec massa nec dui congue varius tempus ut nulla. Maecenas nec vehicula leo, nec congue lacus. Proin a pellentesque velit.</p>
                                {/* <div className="flex flex-wrap justify-center">
                                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                                    <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
                                </div> */}
                            </div>
                        </section>

                        <div className="flex w-full mb-2 ">
                            <div className="grid flex-grow card  place-items-center">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-green-700">Jumlah User</h2>
                                        <p>{this.state.user.length}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid  flex-grow card  place-items-center">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-green-700">Jumlah Customer</h2>
                                        <p>{this.state.customer.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full mb-2">
                            <div className="grid flex-grow card  place-items-center">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-green-700">Jumlah Kamar</h2>
                                        <p>{this.state.room.length}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid  flex-grow card  place-items-center">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-green-700">Jumlah Tipe Kamar</h2>
                                        <p>{this.state.typeroom.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                    
                    <footer class="footer px-4 py-2">
                        <div class="footer-content">
                            <p class="text-sm text-gray-600 text-center">© Brandname 2023. All rights reserved. <a href="https://www.instagram.com/nabilarisha01/">by NabilaRisha</a></p>
                        </div>
                    </footer>
                </main>
            </div>
        );
    }
}