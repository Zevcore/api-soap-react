import React, { useEffect, useState } from 'react';
import { FaDog } from 'react-icons/fa';


const Aside = () => {

    const clearLinks = () => {
        let socials = document.querySelector(".icons").querySelectorAll("a");
        for(let i = 0; i<socials.length; i++) {
            socials[i].classList.remove("active");
        }
    }

    const setActive = e => {
        clearLinks();
        e.target.classList.add("active");
    };

    const handleChange = e => {
        setActive(e);
    }

    return (
        <div className="social-icons">
        <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0 icons">
            <a className="btn dog btn-dark m-3 active" onClick={handleChange}><FaDog /></a>
            <a className="btn btn-dark m-3" onClick={handleChange}><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark m-3" onClick={handleChange}><i className="fab fa-instagram"></i></a>
            <a className="btn btn-dark m-3" onClick={handleChange}><i className="fab fa-instagram"></i></a>
        </div>
    </div>
    );
  }

export default Aside;