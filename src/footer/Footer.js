import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faAppStoreIos,
    faBitcoin,
    faGooglePlay
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='mainbox'>
            <div className='box1'>
                <h1>
                    Social Sites
                </h1>
                <div className='socialicon'>
                    <a href="/" className='yt'>
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="/" className="fb">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="/" className="twit">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="/" className="insta">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>

            </div>

            <div className='box2'>
                <div className='logo'>
                    <h1>Cricket-Info</h1>
                </div>
                <div className='over'>
                    <p>Overview</p>
                    <Link to='/about'>About</Link>
                    <Link to='/location'>Location</Link>
                    <Link to='/careers'>Careers</Link>
                    <Link to='/'>Contacts</Link>
                </div>
                
                    <div className='supp'>
                        <p>Support</p>
                        <a href='/'>Product</a>
                        <a href='/'>Bugs</a>
                        <a href='/'>Other</a>
                    </div>
                    <div className='resor'>
                        <p>Resource</p>
                        <a href='/'>Privecy</a>
                        <a href='/'>Brands Standred</a>
                    </div>

                
            </div>
            <div className='box3'>
                
                    <a href="/" className="app1">
                        <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                    </a>
                    <a href="/" className="app2">
                        <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
                    </a>
                    <a href="/" className="app3">
                        <FontAwesomeIcon icon={faBitcoin} size="2x" />
                    </a>
                
            </div>

            <div className='box4'>
                
                    <div className='tandc'>
                        <Link to='/term'>Term and Condition</Link>
                    </div>
                    <div className='privecy'>
                        <a href='/'>Upcoming</a>
                    </div>
                    <div className='copy'>
                        <p>copyright @2022</p>
                    </div>
                    <div className='top'>
                        <button>Top</button>
                    </div>
                
            </div>
        </div>
    )
}
export default Footer;