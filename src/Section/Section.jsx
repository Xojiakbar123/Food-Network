import './Section.css'
import meat from "../Section/Images/meat.png";



export default function Section(){

    



    return(
        <div className="section">
            <div className="container">
                <ul className="section-list">
                    <li  className="section-item">
                        <h2 className="section-title">
                            Making time a good time by making food the good food.
                        </h2>
                        <p className="section-text">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
                        </p>
                        <div className="section-btns">
                            <button className="section-btn">Order Now</button>
                            <button className="section-btn">Food Details</button>
                        </div>
                    </li>
                    <li  className="section-item">
                        <img src={meat} alt="" className="section-img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}