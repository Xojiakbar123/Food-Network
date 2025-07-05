import axios from "axios";
import './Request.css'


export default function Request(){
    const SendMessage = (event)=>{
        event.preventDefault();
    const token = "7569147949:AAH8nAUUuf5b8TqEbQu2SZ_OBNr2UlzPyoI";
    const chat_id = 7439893038;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;


    const message = document.getElementById("message").value;

    axios({
        url:url,
        method: 'POST',
        data:{
            "chat_id":chat_id,
            "text" :message,
        }
    }).then((res)=>{
        document.getElementById("request-form").reset();
        alert("Sent succesfuly")
    }).catch((error)=>{
        console.log("Error with sending!", error);
    })




    }
    return(
        <div className="request">
            <div className="container">
                <h4 className="request-subtitle">
                    CONTACT
                </h4>
                <h2 className="request-title">
                    Food Stalls with Persons but also specialized <br /> equipment, Skills to manage.
                </h2>
                <div className="forms">
                    <form id='request-form' onSubmit={SendMessage}>
                        <input id='message' type="text" placeholder='Enter your message' />
                        <button className="rqst-btn" type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}