import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { NavLink , useNavigate} from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    //handleSubmit :
    const handleSubmit = async (event) => {
        event.preventDefault();


        try {        
            await axios.post("http://localhost:9000/api/log", {
                email: email,
                password: password
            })
            .then(res => {
                if(res.data === "success"){
                swal({
                    text: `Hello ${email}`,
                    button: "Click me!",
                  })
                navigate('/');
                }
                else {
                    swal({
                        text: "Please sign up!",
                        button: "Click me!",
                      }) 
                      navigate('/register')
                }
                })
            setEmail('');
            setPassword('');
        } catch(error) {
            console.error(error);
        }
    }
            
    

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-center
                    justify-content-center text-white form">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Please Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light
                        rounded-pill pb-2 w-50">Register
                        </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5 mx-5">login</h1>
                        <form className="mx-5" onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="" aria-describedby="emailHelp"
                                onChange={(event) => {setEmail(event.target.value)}} />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="" name="password"
                                onChange={(event) => {setPassword(event.target.value)}} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remenber Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
