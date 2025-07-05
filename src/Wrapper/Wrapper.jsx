import './Wrapper.css'
import girl from "../Wrapper/Images/girl.png"


export default function Wrapper(){
    return(
        <div className="wrapper">
            <div className="container">
                <ul className="wrapper-list">
                    <li className="wrapper-item">
                        <img src={girl} alt="" className="wrapper-img" />
                    </li>
                    <li className="wrapper-item">
                        <h4 className="wrapper-subtitle">
                            ABOUT US
                        </h4>
                        <h2 className="wrapper-title">
                            Food Stalls with Persons but  to  Product marketing plane
                            catlogues etc to. 
                        </h2>
                        <p className="wrapper-text">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                            equipment  make your marketing plane Effective.
                        </p>
                        <button className="wrapper-btn">
                            Read More
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}