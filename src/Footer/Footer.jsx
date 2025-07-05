import './Footer.css'
import logo from '../Header/Images/logo.png';

import instagram from "../Footer/Images/instagram.png"
import facebook from "../Footer/Images/facebook.png"
import twitter from "../Footer/Images/twitter.png"
import youtube from "../Footer/Images/youtube.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                            <img className='footer-img' src={logo} alt="" />
                        </a>
                        <a href="https://www.foodnetwork.com/" className="footer-link">www.foodnetwork.com</a>
                        <a href="#" className="footer-link">foodnetwork@gmail.com</a>
                        <a href="#" className="footer-link">Phone: +7 485-118-03-25</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-head-link">Home</a>
                        <a href="#" className="footer-link">Landingpage</a>
                        <a href="#" className="footer-link">Documentation</a>
                        <a href="#" className="footer-link">Referral Program</a>
                        <a href="#" className="footer-link">UI & UX Design</a>
                        <a href="#" className="footer-link">Web Design</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-head-link">Menu</a>
                        <a href="#" className="footer-link">Landingpage</a>
                        <a href="#" className="footer-link">Documentation</a>
                        <a href="#" className="footer-link">Referral Program</a>
                        <a href="#" className="footer-link">UI & UX Design</a>
                        <a href="#" className="footer-link">Web Design</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-head-link">Company</a>
                        <a href="#" className="footer-link">Landingpage</a>
                        <a href="#" className="footer-link">Documentation</a>
                        <a href="#" className="footer-link">Referral Program</a>
                        <div className="logos">
                            <a href="https://www.instagram.com/FoodNetwork" className="instagram-link">
                                <img className='instagram' src={instagram} alt="" />
                            </a>
                            <a href="https://www.facebook.com/FoodNetwork" className="instagram-link">
                                <img className='facebook' src={facebook} alt="" />
                            </a>
                            <a href="https://x.com/FoodNetwork" className="instagram-link">
                                <img className='twitter' src={twitter} alt="" />
                            </a>
                            <a href="https://www.youtube.com/FoodNetwork" className="instagram-link">
                                <img className='youtube' src={youtube} alt="" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}