import React from 'react';

const Header = () => {
    return (
        <header className="fixed-top">
         {/* navbar */}
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center col-6 col-lg-6" href="#logo">
                    <i className="far fa-flag"><span className="span-default"> All Country</span></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#bikes">Countries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#review">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#subscribe">Subscribe</a>
                            </li>
                            <button className="btn btn-purchase ms-5"><i className="fas fa-sign-in-alt"> Login</i></button>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        </header>
    );
};

export default Header;