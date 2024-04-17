import React from "react";
import { useState } from "react"
function DeckForm({decks, setDecks, createDeck}){
    // console.log(decks)
    const [name, setName] =useState("")
    const [color, setColor] =useState("")
    const [image, setImage] =useState("")


    // now we need a post req within a handle submit fuction sothat we can post new deck
//first need to make a new array decks 

   function handleSubmit (event){
    event.preventDefault()
    // console.log('subin', name)
    fetch("http://localhost:3000/Decks",{
    method:"POST",
    headers:{
        "Content-Type": 'application/json',
        "accept": 'application/json',
    },
    body: JSON.stringify({
        name: name,
        color : color,
        image : image

    })
    })
    // .then (response => response.json())
    // .then (newDeck => createDeck(newDeck))
    .then((response) => response.json())
    .then((newDeck) => {
      createDeck(newDeck);

      // Reset the state variables
      setName("");
      setColor("");
      setImage("");
    });

} 

// // move this to deckcontainer form and pass this down 
// function createDeck (newDeck){
//     // console.log(decks)
//   setDecks  ([...decks, newDeck])
    
// }




    return(

<>
    <form onSubmit={handleSubmit} id="deck-form">
        
    <h1 >Add A New Deck To Your Collection</h1>

    <label htmlFor="name">Deck Name</label>   
    <input onChange={event =>setName(event.target.value)}value ={name}></input> 

    <label htmlFor="color">Color</label>   
    <input onChange ={event => setColor(event.target.value)} value = {color}></input> 

    <label htmlFor="image_Url">Sleeve Image</label>   
    <input onChange ={event => setImage(event.target.value)} value = {image}></input> 

    <input type="submit" value="Add Deck"/>
    </form>
</>)
}

export default DeckForm