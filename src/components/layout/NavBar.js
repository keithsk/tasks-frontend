import React from "react";
import {
  Link
} from "react-router-dom";



const NavBar = () => {

    const logoutNow = () => {
        localStorage.removeItem("token");
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
            Task Management
            </Link>
            <div className="navbar-nav mr-auto">

                <li className="nav-item">
                    <Link to={"/tasks"} className="nav-link">
                    Tasks
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/tasks/add"} className="nav-link">
                    Add Task
                    </Link>
                </li>

                {localStorage.getItem('token')? (
                    <li className="nav-item">
                        <a className="nav-link" onClick={logoutNow}>Logout</a>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>
                )}
                
                
            </div>
        </nav>
    );
};

export default NavBar;