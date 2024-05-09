import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import { NavLink , useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('http://localhost:9000/api/users', {
                name,
                email,
                password,
            })
            .then(res => {
                if(res.data === "successful"){
                    swal({
                        text: "Saved!",
                        button: "Click me!",
                    });
                    navigate('/login')
                }
                if(res.data === "ko") {
                    swal({
                        text: "Already, you have count",
                        button: "Click me!",
                    });
                    navigate("/login")
                }
            })      

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello Friend</h1>
                        <p className="lead text-center">Please Enter Your Credentials To Register</p>
                        <h5 className="mb-2">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-4">
                        <h1 className="display-6 fw-bolder mb-3 mx-5">Register</h1>
                        <form onSubmit={handleSubmit} className="col-9 mx-5">
                            <div className="mb-2">
                                <label htmlFor="text" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" value={name}
                                    name="name" onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" value={email}
                                    name="email" onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password}
                                    name="password" onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1" name="lcheck">I Agree Terms And Conditions.</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;