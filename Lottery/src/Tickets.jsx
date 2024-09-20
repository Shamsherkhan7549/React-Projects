import TicketNum from './TicketNum' 

export default function Tickets({ticket}){
  
    return(
        <>
         <div className='Tickets'>
         {   ticket.map((num, idx) => (
          
                  <TicketNum num = {num} key  = {idx}/>
                  
                ))
              }
         </div>
        </>
    )
}