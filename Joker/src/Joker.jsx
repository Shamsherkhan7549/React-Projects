import { useState, useEffect } from "react";
export default function Joker(){
    let url = 'https://official-joke-api.appspot.com/random_joke';
    
    let [joke , setJoke] = useState("");

    let genRanJoke = async() => { 
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log(jsonRes)
        console.log(jsonRes.setup, jsonRes.punchline);

        setJoke({setup:jsonRes.setup, punchline:jsonRes.punchline})    
    }

    useEffect( () => {
       async function fetchData() {
            let res = await fetch(url);
            let jsonRes = await res.json();
            console.log(jsonRes)
            console.log(jsonRes.setup, jsonRes.punchline);

            setJoke({setup:jsonRes.setup, punchline:jsonRes.punchline})    
       }

       return fetchData;

    }, [])

    return(
        <div className="Joker">
            <h2>Joker &#128513;!</h2> <hr />
            <p>{joke.setup} <br /> {joke.punchline}</p>
            <button onClick={genRanJoke}>Generate Joke</button>
        </div>
    )
}