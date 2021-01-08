import React, { Component } from "react";


const NavBar = () => {
    return (
        <nav>
            <div>
                <a href='/user'> User </a>
            </div>
            <div>
                <a href='/book'> Add Book </a>
            </div>
            <div>
                <a href='/booklist'> Book list </a>
            </div>
        </nav>
    )
}

export default NavBar;