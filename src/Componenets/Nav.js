import React from 'react'
import './Nav.css'


export default function Nav(props) {
    return (
        <div className="header-nav" >
            <div className="logo">
                <img src="images/logo.png" alt="" />
            </div>
            {props.menu &&<div className="menu">
                <a href="">HOME</a>
                <a href="">FIND A DOCTOR</a>
                <a href="">DOWNLOAD LAB REPORT</a>
                <a href="">LOGIN</a>
            </div>}
            
        </div>
    )
}
