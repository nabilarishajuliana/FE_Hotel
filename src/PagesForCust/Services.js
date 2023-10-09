import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faBed,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="text-center pb-8">
          <p className="p-8 text-5xl font-bold">
            The <span className="text-red-700">Services</span> You Get From CB
            Ressort
          </p>
          <p className="mr-64 ml-64  text-gray-600 text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration variations of passages of
            Lorem Ipsum available
          </p>
        </div>

        <div class="flex flex-row ml-12 mr-12 mt-4">
          <div class="basis-1/3">
            <div class="max-w-sm p-6 bg-lime-100 rounded-lg shadow h-60 border border-gray-200 drop-shadow-md">
              <div className="mb-2">
                <FontAwesomeIcon icon={faBowlFood} size="2x" color="green" />
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold text-black-600">
                  High Quality Foods
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div class="basis-1/3">
            <div class="max-w-sm p-6 bg-lime-100 rounded-lg shadow h-60 border border-gray-200 drop-shadow-md">
              <div className="mb-2">
                <FontAwesomeIcon icon={faBed} size="2x" color="green" />
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold text-black-600">
                  Simple & Elegant Room
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div class="basis-1/3">
            <div class="max-w-sm p-6 bg-lime-100 rounded-lg shadow h-60 border border-gray-200 drop-shadow-md">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faSwimmingPool}
                  size="2x"
                  color="green"
                />
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold text-black-600">
                  Swimming Pool
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="mt-12 ml-10 mb-10">
            <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FDSBs8NtpWU?si=D9DU1H7J_O1la_Sq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
            {/* <img
              className="mt-6 ml-32 mb-10 w-3/5 h-96"
              src="/assets/PhotoHome.png"
              alt="/"
            /> */}
          </div>
          <div className="flex flex-col justify-center md:items-start w-full  px-2 py-8">
            <p className="py-3 text-5xl md:text-5xl font-bold">
              Our Profile
              <span className="text-red-700"> Video</span>
            </p>
           
            <p className="text-md mr-12 mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour,or randomised but the majority have suffered
              alteration{" "}
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}
