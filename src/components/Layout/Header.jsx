import React from 'react'

const Header = () => {
    return (
        <>
            <header className="tf-header">
                <div className="header-inner">
                            <div className="col-6 col-md-1">
                                <a href="#" className="logo-site">
                                   <img src="/assets/images/logo/logo.png" alt="Owais Aslam Logo"/>
                                </a>
                            </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-1">
                                <a href="#" className="logo-site">
                                  
                                </a>
                            </div>
                            <div className="col-7 d-none d-md-block">
                                <div className="box-navigation">
                                    <ul className="nav-menu-main">
                                        <li className="menu-item">
                                            <a href="#workScroll" className="item-link link text-caption">
                                                <span>01 /</span>WORKS
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="#serviceScroll"
                                                className="item-link link text-caption"
                                            >
                                                <span>02 /</span>SERVICES
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#aboutScroll" className="item-link link text-caption">
                                                <span>03 /</span>ABOUT
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="#contactScroll"
                                                className="item-link link text-caption"
                                            >
                                                <span>04 /</span>CONTACT
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3 col-md-2 d-none d-sm-block">
                                <div className="header-contact">
                                    <a href="mailto:owaisofficial22@gmail.com" className="link text-caption">
                                        OWAISOFFICIAL22@GMAIL.COM
                                    </a>
                                    <p className="text-caption">
                                        CUP <span className="clock" />
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3 col-md-2 d-flex justify-content-end align-items-start">
                                <button
                                    type="button"
                                    className="btn-mobile-menu open-mb-menu text-caption text-white link"
                                >
                                    <i className="icon icon-menu" />
                                    MENU
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <>
                {/* Mobile Menu */}
                <div className="offcanvas-menu">
                    <div className="offcanvas-content">
                        <div className="container h-100">
                            <div className="offcanvas-content_wrapin">
                                <div className="canvas_head">
                                    <a href="" className="logo-site">
                                       <img src="/assets/images/logo/logo.png" alt="" />
                                    </a>
                                    <div className="btn-mobile-menu close-mb-menu text-caption link">
                                        <i className="icon icon-close" />
                                        CLOSE
                                    </div>
                                </div>
                                <div className="canvas_center">
                                    <ul className="nav-ul-mb">
                                        <li>
                                            <div className="item close-mb-menu">
                                                <a href="#workScroll" className="mb-menu-link text-display-1">
                                                    <span className="text">Works</span>
                                                    <div className="infiniteSlide_text_main">
                                                        <div
                                                            className="infiniteSlide infiniteSlide_text"
                                                            data-clone={5}
                                                        >
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Works
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Works
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Works
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item close-mb-menu">
                                                <a
                                                    href="#aboutScroll"
                                                    className="mb-menu-link text-display-1"
                                                >
                                                    <span className="text">About</span>
                                                    <div className="infiniteSlide_text_main">
                                                        <div
                                                            className="infiniteSlide infiniteSlide_text"
                                                            data-clone={5}
                                                        >
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View About
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View About
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View About
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item close-mb-menu">
                                                <a
                                                    href="#serviceScroll"
                                                    className="mb-menu-link text-display-1"
                                                >
                                                    <span className="text">Services</span>
                                                    <div className="infiniteSlide_text_main">
                                                        <div
                                                            className="infiniteSlide infiniteSlide_text"
                                                            data-clone={5}
                                                        >
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Services
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Services
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Services
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item close-mb-menu">
                                                <a
                                                    href="#contactScroll"
                                                    className="mb-menu-link text-display-1"
                                                >
                                                    <span className="text">Contact</span>
                                                    <div className="infiniteSlide_text_main">
                                                        <div
                                                            className="infiniteSlide infiniteSlide_text"
                                                            data-clone={5}
                                                        >
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Contact
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Contact
                                                            </p>
                                                            <p className="text-body-2 letter-space--1">
                                                                <span className="text-primary">//</span> View Contact
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="canvas_foot">
                                    <div className="left">
                                        <a href="mailto:owaisofficial22@gmail.com" className="link text-caption">
                                           OWAISOFFICIAL22@GMAIL.COM
                                        </a>
                                        <p className="text-caption">
                                            CUP <span className="clock" />
                                        </p>
                                    </div>
                                    <div className="right">
                                        <a href="#" className="tf-link-icon text-caption link">
                                            <i className="icon icon-arrow-top-right" />
                                            TWITTER (X)
                                        </a>
                                        <a href="#" className="tf-link-icon text-caption link">
                                            <i className="icon icon-arrow-top-right" />
                                            DRIBBBLE
                                        </a>
                                        <a href="#" className="tf-link-icon text-caption link">
                                            <i className="icon icon-arrow-top-right" />
                                            LINKEDIN
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Mobile Menu */}
            </>

        </>
    )
}

export default Header
