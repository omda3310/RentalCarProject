import React from "react";
import About from "./About";
import Services from "./Services";
import Cars from "./Cars";
import Contact from "./Contact";



const Home = () => {
   
    return (
        <div>
           <section id="home">               
             <div className="contianer">
                <div className="row justify-content-center">
                    <div className="col-md-9 mt-5">
                        <h3 className="display-8 fw-bolder text-center text-center text-black">
                            <br />
                            <br />
                            <br />
                        Save money on rental cars by searching for car rental deals on
                        </h3>
                        
                    </div>
                </div>
             </div>
           </section> 
           
           <About />
           <Services />
           <Cars />
           <Contact />
        </div>
    );
}

export default Home;