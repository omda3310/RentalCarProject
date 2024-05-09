import React from "react";

const About = () => {
    return (
        <div>
            <section id="About">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-5 mx-3 p-5 shadow order-2">
                            <form class="row g-3">
                                <div class="col-md-4">
                                    <label for="validationDefault04" class="form-label">Mark</label>
                                    <select class="form-select" id="validationDefault04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>BMW</option>
                                        <option>KIA</option>
                                        <option>FIAT</option>
                                        <option>PEUGEOT</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationDefault02" class="form-label">Model</label>
                                    <input type="text" class="form-control" id="validationDefault02" value="" required />
                                </div>
                                <div class="col-md-4">
                                    <label for="validationDefaultUsername" class="form-label">Email</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationDefault03" class="form-label">StartDate</label>
                                    <input type="date" class="form-control" id="validationDefault03" required />
                                </div>
                                <div class="col-md-4">
                                    <label for="validationDefault03" class="form-label">EndDate</label>
                                    <input type="date" class="form-control" id="validationDefault03" required />
                                </div>
                                <div class="col-md-4">
                                    <label  class="form-label">Mobile</label>
                                    <input type="int" class="form-control"  />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label class="form-check-label" for="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Reserve your car</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>we</b>are?</h1>
                            <hr className="w-50"></hr>
                            <p className="lead mb-4">
                                BRIDGES's car rental agency is a company that rents
                                automobiles for short periods of time to the public,
                                generally ranging from a few hours to a few weeks.
                                It is often organized with numerous local branches
                                (which allow a user to return a vehicle to a different
                                location).
                            </p>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
