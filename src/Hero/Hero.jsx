import './Hero.css'
import home from "../Hero/Images/home.png"
import food from "../Hero/Images/food.png"
import sticker from "../Hero/Images/sticker.png"





export default function Hero(){

    return(
        <div className="hero">
            <div className="container">
                <h4 className="hero-subtitle">
                    FEATURES
                </h4>
                <h2 className="hero-title">
                    Food With A New Passion
                </h2>
                <ul className="hero-list">
                    <li className="hero-item">
                        <img src={home} alt="" className="hero-img" />
                        <h3 className="ittem-title">
                            Quality Food
                        </h3>
                        <p className="item-text">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </li>
                    <li className="hero-item">
                        <img src={food} alt="" className="hero-img" />
                        <h3 className="ittem-title">
                            Food Delivery
                        </h3>
                        <p className="item-text">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </li>
                    <li className="hero-item">
                        <img src={sticker} alt="" className="hero-img" />
                        <h3 className="ittem-title">
                            Super Taste
                        </h3>
                        <p className="item-text">
                            It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    )
}