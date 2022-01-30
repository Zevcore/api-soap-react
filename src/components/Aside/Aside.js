import React, { useEffect } from 'react';
import { FaDog } from 'react-icons/fa';


const Aside = () => {

    const setActive = event => {
        console.log(event);
    };

    useEffect(() => {
        let socials = document.querySelector(".icons").querySelectorAll("a");
        for(let i = 0; i<socials.length; i++) {
           if(socials[i].classList.contains("active")) {
               socials[i].style.border = "2px solid lime";
           }
        }
    });

    return (
        <div className="social-icons">
        <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0 icons">
            <a className="btn btn-dark m-3 active" href="#!"><FaDog /></a>
            <a className="btn btn-dark m-3" href="#!" onClick={setActive}><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark m-3" href="#!"><i className="fab fa-instagram"></i></a>
            <a className="btn btn-dark m-3" href="#!"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
    );
  }

export default Aside;