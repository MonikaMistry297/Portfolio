import React from 'react';
import Typical from "react-typical"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Button } from 'react-bootstrap';
import "./Profile.css"

export default function Profile() {
    return(
    <div className='profile-container'>
        <div className='colz-icon'>
            <FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon>
        </div>

        <div className='profile-details-name'>
            <span className='primary-text'>
                {" "}
                Hello, I'M <span className='highlighted-text'>Monika Mistry</span>
            </span>
        </div>

        <div className='profile-details-role'>
            <span className='primary-text'>
                {" "}
                <h1>
                    {" "}
                    <Typical 
                        loop = {Infinity}
                        steps = {[
                            "Automation Tester",1000,
                             "API Tester",1000,
                             "Manual Tester",1000, 
                             "Functional Tester", 1000
                        ]}
                    />
                </h1>
            
       

            <span className='profile-role-tagline'>
                knack of testing application and website with Mannual and Automation.
            </span>
            </span>
        </div>
        
        <div className='profile-options'>
            <button className='btn primary-btn'>
                {" "}
                Hire Me{"  "}
            </button><br></br>
            <a href='cv.pdf' download="Monika cv.pdf">
                <Button className='btn highlighted-btn'>Get Resume</Button>
            </a>
        </div>

        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
        </div>
    )
}