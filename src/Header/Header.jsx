import logo from '../Header/Images/logo.png';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import './Header.css';

export default function Header(){

    useEffect(() => {
    AOS.init({ duration: 1000 });
    }, []);

    return(
        <div data-aos="fade-up" className="header">
            <div className="container">
                <ul className="header-list">
                    <li className="header-item">
                        <a href="#" className="header-link"><img src={logo} alt="" className="logo" /></a>
                        <a href="#" className="header-link">Home</a>
                        <a href="#" className="header-link">About Us</a>
                        <a href="#" className="header-link">Menu</a>
                        <a href="#" className="header-link">Features</a>
                        <a href="#" className="header-link">Contact Us</a>
                    </li>
                    <li className="header-item">
                        <button className='header-btn'>Booking Now</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};