import React from "react";
import "./index.css"
export default function Header (props) {
    return(
        <header>
            <div id="logo">RETRO</div>
            <nav>
                <a href="#">Wish List</a>
                <a href="#">Card</a>
                <a href="#">Log in / Sign up</a>
            </nav>
            <hr></hr>

        </header>
    )
}