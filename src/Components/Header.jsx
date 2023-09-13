import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">

                    {/* logo */}
                    <Link className="navbar-brand" to="/">
                        <span className='md'>MD</span>
                        <span className='zarak '> Zarak</span>
                        <span className='khan'> Khan</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* sidebar */}
                    <div className="sidebar offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        {/* sidebar header */}
                        <div className="offcanvas-header text bg-white border-bottom">
                            <Link id="offcanvasNavbarLabel" className="navbar-brand offcanvas-title" to="/">
                                <span className='md'>MD</span>
                                <span className='zarak '> Zarak</span>
                                <span className='khan'> Khan</span>
                            </Link>

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        {/* sidebar body  */}
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/" >
                                        <span className="link-name ">About Me</span>
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/resume" >
                                        <span className="link-name">Resume</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/portfolio" >
                                        <span className="link-name">Portfolio</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog" >
                                        <span className="link-name">Blog</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" >
                                        <span className="link-name">Contact</span>
                                    </NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>




        </>
    );
};

export default Header;
