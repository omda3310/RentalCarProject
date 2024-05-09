import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white bg-primary">
                <div className="container">
                    <div className="pt-5">
                        <div className="row">
                        <div className="col-2">
                                
                            </div>
                            <div className="col-2">
                                <h5>Sections</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-3 mt-5">
                                        <a href="/Home" className="nav-link p-0 text-white">Home</a>
                                    </li>
                                    <li className="nav-item mb-4">
                                        <a href="/about" className="nav-link p-0 text-white">About</a>
                                    </li>
                                    <li className="nav-item mb-4">
                                        <a href="/services" className="nav-link p-0 text-white">Services</a>
                                    </li>
                                    <li className="nav-item mb-4">
                                        <a href="/contact" className="nav-link p-0 text-white">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3 mx-2">
                                <form action="">
                                    <div class="mb-2">
                                        <label for="exampleFormControlInput1" class="form-label">Your name</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"
                                            placeholder="Imed Aziz" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"
                                            placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your message:</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Send message
                                        <i className="fa fa-paper-plane ms-2"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="col-3 ms-4">
                                <div class="card p-1">
                                    <div class="card-body text-center">
                                        <i className="fa fa-mobile fa-4x mb-1 text-primary"></i>
                                        <h5 class="card-title mb-1 fs-6 fw-bold">Card title</h5>
                                        <p class="card-text lead">Some quick example text to build
                                            on the card title and make up the bulk of the card's
                                            content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-between pt-2 mt-2 border-top">
                                <p>@2023, all rights reserved</p>
                                <ul className="list-unstyled d-flex">
                                    <li className="ms-4">
                                        <a className="link-light" href="https://www.facebook.com">
                                            <i className="fa fa-facebook fa-2x"></i>
                                        </a>

                                    </li>
                                    <li className="ms-4">
                                        <a className="link-light" href="https://www.instagram.com/">
                                            <i className="fa fa-instagram fa-2x"></i>
                                        </a>
                                    </li>
                                    <li className="ms-4">
                                        <a className="link-light" href="https://www.twitter.com">
                                            <i className="fa fa-twitter fa-2x"></i>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
