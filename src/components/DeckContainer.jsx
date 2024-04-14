import React, { useEffect, useState } from "react";
import Decks from "./Decks";
import DeckForm from "./DeckForm";
function DeckContainer(){

    const [decks, setDecks] = useState([]) 
   
    useEffect(()=>{
        fetch('http://localhost:3000/Decks')
        .then (response => response.json())
        .then (decksArray => setDecks(decksArray))
         },[])
 
         const mappedDecks = decks.map (deck =>
            {return <div id="decks" key={deck.id}><img src = {deck.image} key={deck.id}/>
           {deck.name} 
           <br></br>
          Color: {deck.color}
           </div>})
         
            
 
return(<>
<DeckForm decks={decks} setDecks = {setDecks}/>
<Decks decks={decks} setDecks ={setDecks} mappedDecks={mappedDecks}/>
</>
)}

export default DeckContainer