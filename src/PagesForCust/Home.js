import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import LinesEllipsis from "react-lines-ellipsis";
import $ from "jquery";
import moment from "moment";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      nama_user: "", //1
      tipe_kamar: "", // 4 nama tipe kamar
      kamars: [],
      in: "",
      out: "",
      id_tipeKamar: "",
      nama_tipe_kamar: "",
      harga: "",
      deskripsi: "",
      foto: "",
      kamar: [],
      pemesanan: [],
      id: "",
      userId: "",
      tipeKamarId: "",
      nomor_pemesanan: "",
      tgl_pemesanan: "",
      tgl_check_in: "", //2
      tgl_check_out: "", //3
      nama_tamu: "", //6
      jumlah_kamar: "", //5
      tipeKamar: [],
      user: [],
      role: "",
      token: "",
      action: "",
      isLogin: false,
      id_customer: "",
    };

    this.state.id_customer = localStorage.getItem("id");
    this.state.nama_user = localStorage.getItem("username");
    this.state.token = localStorage.getItem("token");
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClose = () => {
    $("#modal_detail").hide();
  };

  handleDetail = (item) => {
    $("#modal_detail").show();
    this.setState({
      id_tipeKamar: item.id_room_type,
      nama_tipe_kamar: item.name_room_type,
      harga: item.price,
      deskripsi: item.description,
      foto: item.photo,
    });
  };

  handleCloseBooking = () => {
    $("#modal_booking").hide();
  };

  showModal = (item) => {
    $("#modal_booking").show();
    this.setState({
      // id_user: "",
      // userId: this.state.id_customer,
      // tipeKamarId: "",
      nomor_pemesanan: Math.floor(Math.random() * 90000) + 10000,
      // tgl_pemesanan: moment().format('YYYY-MM-DD'),
      tipe_kamar: item.nama_tipe_kamar,
      tgl_check_in: this.state.in,
      tgl_check_out: this.state.out,
      nama_tamu: "",
      jumlah_kamar: "",
      action: "insert",
    });
  };
  handleAddBooking = () => {
    let form = {
      // userId: this.state.userId,
      // tipeKamarId: this.state.tipeKamarId,
      nomor_pemesanan: this.state.nomor_pemesanan,
      nama_user: this.state.nama_user,
      tipe_kamar: this.state.tipe_kamar,

      // tgl_pemesanan: this.state.tgl_pemesanan,
      tgl_check_in: this.state.tgl_check_in,
      tgl_check_out: this.state.tgl_check_out,
      nama_tamu: this.state.nama_tamu,
      jumlah_kamar: this.state.jumlah_kamar,
    };
    let url = "http://localhost:8000/pemesanan/addPemesanan";
    axios
      .post(url, form, this.headerConfig())
      .then((response) => {
        this.getBooking();
        this.handleClose();
        window.location = "/mybookings";
      })
      .catch((error) => {
        console.log("error add data", error);
        if (error.response.status === 500 || error.response.status === 404) {
          window.confirm("Failed booking room");
        } else if (error.response.status === 400) {
          window.alert("kamar sudah tidak tersedia untuk tanggal tersebut!");
        } else {
          console.log("error add data", error);
          window.confirm("Failed booking room");
        }
      });
  };

  _handleFilter = () => {
    let data = {
      tgl_check_in: this.state.in,
      tgl_check_out: this.state.out,
    };
    let url = "http://localhost:8000/kamar/find/available";
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            kamars: response.data.data,
          });
          // console.log(response.data.room);
          // console.log(response.data.bookedRoom);
        } else {
          alert(response.data.message);
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => {
        console.log("error", error.response.status);
      });
  };

  getBooking = () => {
    let url = "http://localhost:8000/pemesanan/getAllKamar";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          kamar: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getTypeRoom = () => {
    let url = "http://localhost:8000/tipeKamar/getAllTipe";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          tipeKamar: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getUser = () => {
    let url = "http://localhost:8000/user/getAllUser";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          user: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  showAlertMustLogin = () => {
    window.alert("You must Register or Login as Customer");
    window.location = "/";
  };

  componentDidMount() {
    this.getBooking();
    this.getTypeRoom();
    this.getUser();
    if (this.state.token) {
      this.setState({
        isLogin: true,
      });
    }
  }

  render() {
    const today = new Date().toISOString().split("T")[0];
    return (
      <div>
        <div
          name="home"
          className="relative bg-gray-50 flex flex-col justify-between"
        >
          <Navbar />
          <div className="relative bg-slate-400">
            <img
              src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="absolute inset-0 object-cover w-full h-full opacity-20"
              alt=""
            />
            <div className="relative grid md:grid-cols-2 max-w-[1240px] m-auto">
              <div>
                <img
                  className="mt-6 ml-32 mb-10 w-3/5 h-96"
                  src="/assets/PhotoHome.png"
                  alt="/"
                />
              </div>
              <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <p className="py-3 text-5xl md:text-5xl font-bold  ">
                  Ciptakan Moment dalam
                  <span className="text-red-700"> Cherry Blossom</span>
                  <span className="text-green-700"> Resort</span>
                </p>
                {/* <p className="text-5xl md:text-5xl font-bold mb-8">
                With Slippy.
              </p> */}
                <p className="text-md mr-12 mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour,or randomised but the majority have
                  suffered alteration{" "}
                </p>
                {/* {this.state.isLogin ? (
                <button
                  className="py-2 px-1 sm:w-[25%] my-4 text-white border bg-blue-500 border-blue-500 rounded-md text-lg font-semibold hover:bg-blue-600 hover:text-white"
                  onClick={() => this.showModal()}
                >
                  Booking Now
                </button>
              ) : (
                <button
                  className="py-2 px-1 sm:w-[25%] my-4 text-white border bg-blue-500 border-blue-500 rounded-md text-lg font-semibold hover:bg-blue-600 hover:text-white"
                  onClick={() => this.showAlertMustLogin()}
                >
                  Booking Now
                </button>
              )} */}
              </div>
            </div>

            <div class="relative flex flex-col mr-19 ml-11 mb-8">
            <div class="ml-48 w-3/5 bg-white-200 border-2 border-grey rounded-lg shadow h-auto">
              <div class="flex flex-row">
                <div className="pr-10 pl-10 pt-5 pb-6">
                  <div class="flex items-center">
                    <div className="mr-3 bg-green-200 p-4 rounded-md h-auto">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        size="2x"
                        color="green"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Check-In Date</h3>
                      <input
                        type="date"
                        name="in"
                        id="in"
                        className="border-2 border-green-700 rounded-md p-1"
                        value={this.state.in}
                        onChange={this.handleChange}
                        min={today}
                      />
                    </div>
                  </div>
                </div>
                <div className="pr-10 pl-4 pt-5 pb-6">
                  <div class="flex items-center">
                    <div className="mr-3 bg-red-200 p-4 rounded-md h-auto">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        size="2x"
                        color="red"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Check-Out Date</h3>
                      <input
                        type="date"
                        name="out"
                        id="out"
                        className="border-2 border-red-700 rounded-md p-1"
                        value={this.state.out}
                        onChange={this.handleChange}
                        min={this.state.tgl_check_in}
                      />
                    </div>
                  </div>
                </div>
                <div className="pr-2 pl-2 pt-9 pb-6">
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold p-2 pr-3 pl-3 w-full rounded focus:outline-none focus:shadow-outline"
                    onClick={this._handleFilter}
                  >
                    Check Rooms
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          

          {/* ini buat available room */}
          <>{/* ini buat tempat yang dihapus */}</>

          {this.state.kamars.length > 0 && (
            <div className="m-6 pl-6">
              <p className="text-5xl font-bold mt-2">
                <span className="text-green-700">Available</span> Room{" "}
              </p>

              <div class="grid grid-cols-4 gap-4 mt-8">
                {this.state.kamars.map((item, index) => (
                  <div class="col-span-1">
                    {/* Card untuk type room */}
                    <div class="CardEvent">
                      <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-gray-200 bg-gray-100">
                        <div className="container">
                          <img
                            class="w-full h-48"
                            src={"http://localhost:8000/" + item.foto}
                          />
                        </div>
                        <div class="px-6 py-4">
                          <div class="font-bold text-2xl mb-2">
                            {item.nama_tipe_kamar}
                          </div>
                          <div class="font-semibold text-xl mb-2 ">
                            Rp {item.harga.toLocaleString("id-ID")}{" "}
                            <span className="text-green-600">/ Night</span>
                          </div>
                          <p class="text-gray-700 text-base">
                            <LinesEllipsis
                              text={item.deskripsi}
                              maxLine="3"
                              ellipsis="..."
                            />
                          </p>
                          {/* <div class="px-2 py-0.5 text-base mt-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {item.room.length} room available
                                                    </div> */}
                        </div>
                        <div class="px-6 pt-4 pb-2">
                          {/* <button
                            class="mb-2 ml-40  bg-green-600 hover:bg-green-700 text-white  font-bold p-2 w-1/3 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => this.showModal(item)}
                          >
                            Pesan
                          </button> */}
                          {this.state.isLogin ? (
                            <button
                              class="mb-2 ml-40  bg-green-600 hover:bg-green-700 text-white  font-bold p-2 w-1/3 rounded focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={() => this.showModal(item)}
                            >
                              Pesan
                            </button>
                          ) : (
                            <button
                              class="mb-2 ml-40  bg-green-600 hover:bg-green-700 text-white  font-bold p-2 w-1/3 rounded focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={() => this.showAlertMustLogin()}
                            >
                              Pesan
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* modal detail room */}
        <div
          id="modal_detail"
          tabindex="-1"
          class="overflow-x-auto fixed top-0 left-0 right-0 z-50 hidden w-full pt-10 pb-10 pl-96 md:inset-0 h-modal md:h-full bg-tranparent bg-black bg-opacity-50"
        >
          <div class="relative w-full h-full max-w-lg md:h-auto border-2 border-gray-500 rounded-lg shadow-2xl items-center">
            <div class="relative bg-white rounded-lg">
              <div class="flex items-center justify-between p-5 border-b rounded-t border-gray-500">
                <h3 class="p-2 text-xl font-medium text-gray-900 ">
                  {this.state.name_room_type}
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                  data-modal-hide="medium-modal"
                  onClick={() => this.handleClose()}
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-6">
                <div className="container">
                  <img
                    class="rounded-md w-200 h-100"
                    src={"http://localhost:8000/" + this.state.photo}
                  />
                </div>
                <div class="px-2 py-4">
                  <div class="font-bold text-2xl mb-2">
                    {this.state.name_room_type}
                  </div>
                  <div class="font-bold text-xl mb-2 text-blue-600">
                    {this.state.price}/night
                  </div>
                  <p class="text-black-700 text-base">
                    {this.state.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <div
          id="modal_booking"
          tabindex="-1"
          class="overflow-x-auto fixed top-0 left-0 right-0 z-50 hidden w-full pt-10 pb-10 pl-96 md:inset-0 h-modal md:h-full bg-tranparent bg-black bg-opacity-50"
        >
          <div class="relative w-full h-full max-w-lg md:h-auto border-2 border-gray-500 rounded-lg  shadow-2xl items-center">
            <div class="relative bg-white rounded-lg">
              <div class="flex items-center justify-between p-5 border-b rounded-t border-gray-500">
                <h3 class="p-2 text-xl font-medium text-gray-900 ">
                  Add Booking Room
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                  data-modal-hide="medium-modal"
                  onClick={() => this.handleCloseBooking()}
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-2">
                <div class="px-8 py-2 ">
                  <form
                    class="space-y-6"
                    onSubmit={(event) => this.handleAddBooking(event)}
                  >
                    <div>
                      <label
                        for="nama_tamu"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                      >
                        Guest Name
                      </label>
                      <input
                        type="text"
                        name="nama_tamu"
                        id="nama_tamu"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-800 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                        placeholder="Name for guest"
                        value={this.state.nama_tamu}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="jumlah_kamar"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                      >
                        Total Room{" "}
                      </label>
                      <input
                        type="number"
                        name="jumlah_kamar"
                        id="jumlah_kamar"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-800 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                        placeholder="Total room your booked"
                        value={this.state.jumlah_kamar}
                        onChange={this.handleChange}
                        min="1"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="tipe_kamar"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                      >
                        Room Type
                      </label>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-800 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                        placeholder="Jenis Room Type"
                        name="tipe_kamar"
                        value={this.state.tipe_kamar}
                        onChange={this.handleChange}
                        required
                      >
                        <option value="">Choose Room Type</option>
                        {this.state.tipeKamar.map((item, index) => (
                          <option value={item.nama_tipe_kamar}>
                            {item.nama_tipe_kamar}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        for="tgl_check_in"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                      >
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        name="tgl_check_in"
                        id="tgl_check_in"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-800 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                        placeholder="Choose check in date"
                        value={this.state.tgl_check_in}
                        onChange={this.handleChange}
                        required
                        min={today}
                      />
                    </div>
                    <div>
                      <label
                        for="tgl_check_out"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                      >
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        name="tgl_check_out"
                        id="tgl_check_out"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-800 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                        placeholder="Choose check out date"
                        value={this.state.tgl_check_out}
                        onChange={this.handleChange}
                        min={this.state.tgl_check_in}
                        required
                      />
                    </div>
                    <div></div>
                    <button
                      type="submit"
                      class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
