import './App.css'
import Lottery from './Lottery.jsx'

function App() {

  let winingCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0])
    // return ticket[0] === 0;
  }

  return (
    <>
     <Lottery n = {3} winingCondition={winingCondition}/>
    </>
  )
}

export default App
