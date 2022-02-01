import React, {useEffect, useState} from 'react';
import {DogAPI} from "../../actions/requests";

function Sidebar() {

    const [res, setRes] = useState(null);

    const getActive = (e) => {
        console.log(res);

        let socials = document.querySelector(".icons").querySelectorAll("a");
        for(let i = 0; i<socials.length; i++) {
            if(socials[i].classList.contains("active")) {
                return socials[i];
            }
        }
    }

    useEffect(() => {
        setRes(DogAPI);
    });

    return (
            <div className="masthead">
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <h1 className="fst-italic lh-1 mb-4">REST & SOAP usage</h1>
                    <p className="mb-5"></p>
                    <form id="contactForm">
                        <div className="row input-group-newsletter">
                            <div className="col api_input"><input className="form-control" id="email" type="text" placeholder="" data-sb-validations="required,email" /></div>
                            <div className="col-auto"><button className="btn btn-primary" id="submitButton" onClick={getActive} type="submit">Notify Me!</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default Sidebar;