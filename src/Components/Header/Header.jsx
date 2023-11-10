import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
                <div className="container">

                    {/* logo */}
                    <Link className="navbar-brand" to="/">
                        <span className='md'>MD</span>
                        <span className='zarak '> Zarak Khan</span>

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
                                <span className='zarak '> Zarak Khan</span>
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
                                    <a className="nav-link" href="https://mdzarakkhan.me/blog" >
                                        <span className="link-name">Blog</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" >
                                        <span className="link-name desktop-btn">Contact</span>

                                        <span className="link-name mobile-btn">Contact</span>
                                    </NavLink>
                                </li>

                            </ul>

                            {/* custom fiverr upwork and linkedin buttons for mobile only */}
                            <div className='mobile-social-btns text-center'>
                                <a href='https://www.fiverr.com/md_zarak_khan'>
                                    <button id='fiverr-btn' className="btn secondary-button">Fiverr</button>
                                </a>

                                <a href='https://www.upwork.com/freelancers/~0182fd065637dfe6a4'>
                                    <button id='fiverr-btn' className="btn secondary-button">Upwork</button>
                                </a>
                            </div>
                            {/* ended custom fiverr upwork and linkedin buttons for mobile only*/}
                        </div>
                    </div>
                </div>
            </nav>




        </>
    );
};

export default Header;
