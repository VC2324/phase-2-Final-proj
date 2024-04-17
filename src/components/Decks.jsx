import DeckContainer from "./DeckContainer"

//passing down mappedDecks and name

function Decks ({decks, setDecks, mappedDecks, name}){
  





    return(
    <div className="deck-page"> 
    <header><h1>Your Deck Collection</h1></header>
      {/* using props mappedDecks and name */}
        <div id="container" > {mappedDecks}{name}
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

    
    </div>)
}

export default Decks