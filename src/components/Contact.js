import React from "react";

const Contact = () => {
    return (
        <div>
            <section id="Contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have a some <b>questions</b>?</h1>
                            <hr className="w-50 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <img src="./assets/bg3.png" alt="Contact" className="w-75 h-100" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Imed Aziz"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your message:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send message
                                <i className="fa fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;