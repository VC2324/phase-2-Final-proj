import React, { useEffect, useState } from "react";
import Decks from "./Decks";
import DeckForm from "./DeckForm";
function DeckContainer(){

  //used Use state so that i setDecks which will be changing depending on which new decks input, 
    const [decks, setDecks] = useState([]) 
   //used useEffect  to fetch data from my restful API and set decks to the decksarray
    useEffect(()=>{
        fetch('http://localhost:3000/Decks')
        .then (response => response.json())
        .then (decksArray => setDecks(decksArray))
         },[])
        //mapped the decks to an so we can use its key, img, name, and color and wrapped it into a div so that we can use it later
         const mappedDecks = decks.map (deck =>
            {return <div id="decks" key={deck.id}><img src = {deck.image} key={deck.id}/>
          <p className="p-deck-cn"> {deck.name} </p>
         <p className="p-deck-cn"> Color: {deck.color}</p>
           </div>})
         
            //creating a duplicate "decks" array with the spread function  
         function createDeck (newDeck){
          // seting set deck to the duplicate array and adding "newDeck" into that array
          setDecks  ([...decks, newDeck])
            
        }
return(<>
{/* passing down deck setDecks createDecks to DeckForm as props */}
<DeckForm decks={decks} setDecks = {setDecks} createDeck={createDeck}/>
{/* passing down decks setDecks  mappedDecks Decks as props */}
<Decks decks={decks} setDecks ={setDecks} mappedDecks={mappedDecks}/>
</>
)}

export default DeckContainer