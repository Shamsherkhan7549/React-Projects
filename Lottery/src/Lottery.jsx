import { useState } from "react";
import Tickets from "./Tickets";
import { getNo,sum } from "./helper";
import './Lottery.css'
export default function Lottery({n, winingCondition}){
    let [ticket, setTicket] = useState(getNo(n));
    let isWinning = winingCondition(ticket);
    let genTicket = () => {
        setTicket(getNo(n));

    }

    return(
        <>
                <div className="Lottery">
                    <h3>Lottery Ticket</h3>
                    <Tickets ticket = {ticket}/>
                </div>
                    <br />
                <button onClick={genTicket}>Buy new Ticket</button>
                <br />
                <h2>{isWinning && "Congrats, you won!"}</h2>
        </>
    )
}