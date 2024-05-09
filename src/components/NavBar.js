import React from 'react';


const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
              <div class="container">
                <button class="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active"  href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/cars">Cars</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/contact">Contact</a>
                    </li>
                  </ul>
                  <a class="navbar-brand fw-bolder fs-4 me-auto" href="/">RENTAL-CARS</a>
                                 
                  <form class="d-flex" role="search">  
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  

                  <a className='btn btn-outline-primary ms-3 px-2' href="/register">
                    <i className='fa fa-user-plus me-2'>Sign In</i>
                  </a>
                </div>
              </div>
           </nav>
        </div>
    );
}

export default NavBar;