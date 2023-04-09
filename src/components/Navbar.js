import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import { useState } from 'react';


export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title} </Link>
                {/* <a className="navbar-brand" href="/">{props.title} </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.main}</Link>
                            {/* <a className="nav-link active" aria-current="page" href="/">{props.main}</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cancer">About</Link>
                            {/* <a className="nav-link" href="/cancer">About</a> */}
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-danger" onClick={props.doRed}>Red Theme</button>
                        <button type="button" class="btn btn-success" onClick={props.doGreen}>Green Theme</button>
                        <button type="button" class="btn btn-primary" onClick={props.doBlue}>Blue Theme</button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    main: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Set a Title here',
    main: 'main text here'
};