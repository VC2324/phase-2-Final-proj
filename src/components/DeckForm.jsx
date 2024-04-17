import React from "react";
import { useState } from "react"

//recieving createDecks for use later
function DeckForm({decks, setDecks, createDeck}){
// uses useState to set these 3 name, color, image,
    const [name, setName] =useState("")
    const [color, setColor] =useState("")
    const [image, setImage] =useState("")

//function that handles submit
   function handleSubmit (event){
    //using the event.preventDefault function  so that it doesnt rerender the whole page
    event.preventDefault()
/// this is the fetch post so that we can post data to our API
// fetching data from our Restful API and using the POST method
    fetch("http://localhost:3000/Decks",{
    method:"POST",
    headers:{
        "Content-Type": 'application/json',
        "accept": 'application/json',
    },

    //stringifying the specific fromat to post in api
    body: JSON.stringify({
        name: name,
        color : color,
        image : image

    })
    })
    //then changing response to json
    .then((response) => response.json())
   //.then new deck to createdeck calling back the newdeck function
    .then((newDeck) => {
      createDeck(newDeck);

      // Reset the state variables
      setName("");
      setColor("");
      setImage("");
    });

} 



    return(

<>
    {/* using on submit property and calling in handleSubmit  */}
    <form onSubmit={handleSubmit} id="deck-form">
        
    <h1 >Add A New Deck To Your Collection</h1>

    <label htmlFor="name">Deck Name</label> 
    {/* using onChange  event and setName to the target value of name and  color image url   */}
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