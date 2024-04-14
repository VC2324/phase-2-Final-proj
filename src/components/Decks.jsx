import DeckContainer from "./DeckContainer"
function Decks ({decks, setDecks, mappedDecks, name}){
    // console.log(decks)
    // this needs to populate with the multiple decks in 
// const mappedDecks = decks.map (deck =>
//     {return <Decks key={deck.id} decks ={deck}/>})

    return(
    <> 
    <header><h1>Decks and sleeves titlelive here</h1></header>
        <div></div>
        <div id="container" > {mappedDecks}{name}this is where you would house the deck imgses
        </div>
        
     <form>
    <label htmlFor="name">Deck Name</label>   
    <input></input> 

    <label htmlFor="color">Color</label>   
    <input></input> 

    <label htmlFor="image_Url">Deck Sleeve Image</label>   
    <input></input> 
    <input type="submit" value="Add Deck"/>
    </form>

    
    </>)
}

export default Decks