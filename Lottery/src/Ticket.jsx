import { useState } from "react"
import './Ticket.css'
import {getNo, sum} from "./helper";
export function Ticket(){
    let [ticket, setTicket] = useState(getNo(3)) ;

    let isWinning = sum(ticket) === 15;

    let genTicket = () => {
        setTicket(getNo(3));
        
    }


    return(
        <>
            <h1>Ticket</h1>
            <div className="ticketNo">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div><br />
            <button onClick={genTicket}>Buy new Ticket</button>
            <h2> {isWinning && "Congrats you won!" }</h2>
        </>
    )
}