import DeckContainer from "./DeckContainer"



function Decks ({decks, setDecks, mappedDecks, name}){
  





    return(
    <> 
    <header><h1>Decks and sleeves titlelive here</h1></header>
        <div></div>
        <div id="container" > {mappedDecks}{name}this is where you would house the deck imgses
        </div>
        
     {/* <form id="deck-form">
        <h2>Add A New Deck</h2>
    <label htmlFor="name">Deck Name</label>   
    <input></input> 

    <label htmlFor="color">Color</label>   
    <input></input> 

    <label htmlFor="image_Url">Deck Sleeve Image</label>   
    <input></input> 
    <input type="submit" value="Add Deck"/>
    </form> */}

    
    </>)
}

export default Decks