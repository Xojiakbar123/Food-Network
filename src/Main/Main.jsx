import './Main.css'
import chicken from "../Main/Images/chicken.png"
import dish from "../Main/Images/dish.png"
import egg from "../Main/Images/egg.png"
import hamburger from "../Main/Images/hamburger.png"
import peach from "../Main/Images/peach.png"
import salad from "../Main/Images/salad.png"
import axios from "axios";

import { IoIosStar } from "react-icons/io";


export default function Main(){

    const handleOrder = (name, price) => {
    alert("Ordered Successfully!");

    const token = "7569147949:AAH8nAUUuf5b8TqEbQu2SZ_OBNr2UlzPyoI";
    const chat_id = 7439893038;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `🛒 New Order!\n${name}\nPrice: ${price}$`;

    axios.post(url, {
        chat_id: chat_id,
        text: text,
    })
    .then(() => console.log("Sent to Telegram"))
    .catch((err) => console.error("Error sending message:", err));
};





    return(
        <div className="main">
            <div className="container">
                <h4 className="main-subtitle">Menu</h4>
                <h2 className="main-title">Food Full of treaty Love</h2>
                <p className="main-text">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls <br /> with Persons but also specialized equipment, Skills to manage Customers, 
                </p>
                <ul className="main-list">
                    <li className="main-item">
                        <img src={chicken} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Chicken
                            </h3>
                            <h3 className="item-price">16$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Chicken", 16)}>+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                    <li className="main-item">
                        <img src={salad} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Salads
                            </h3>
                            <h3 className="item-price">12$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Salads", 12)} >+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                    <li className="main-item">
                        <img src={hamburger} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Burgers
                            </h3>
                            <h3 className="item-price">10$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Burgers", 10)}>+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                    <li className="main-item">
                        <img src={dish} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Vegie Muffen
                            </h3>
                            <h3 className="item-price">14$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Vegie Muffen", 14)}>+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                    <li className="main-item">
                        <img src={egg} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Egg Masala
                            </h3>
                            <h3 className="item-price">9$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Egg Masala", 9)}>+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                    <li className="main-item">
                        <img src={peach} alt="" className="main-png" />
                        <div className="item-box">
                            <h3 className="item-title">
                                Peach Melba dish 
                            </h3>
                            <h3 className="item-price">15$</h3>
                        </div>
                        <p className="item-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="item-bar">
                            <button className="item-btn" onClick={() => handleOrder("Peach Melba dish", 15)}>+</button>
                            <nav className="icons">
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                                <IoIosStar className='star' />
                            </nav>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}