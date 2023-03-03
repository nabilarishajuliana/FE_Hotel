import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Navbar from '../Components/Navbar'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }


}