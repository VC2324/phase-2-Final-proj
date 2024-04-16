import { Outlet } from "react-router-dom"




function Home(){
    return(
        <div className="home-container">

    <h1 id="home-header">Welcome Home this is where the history and simple rules will live</h1>
    
    <div> 
        <h2 className="homeh2">History</h2>
        <p>Magic: The Gathering (colloquially known as Magic or MTG) is a tabletop and digital collectible card game created by Richard Garfield. 
            Released in 1993 by Wizards of the Coast, Magic was the first trading card game and had approximately fifty million players as of February 2023.
             Over twenty billion Magic cards were produced in the period from 2008 to 2016, during which time it grew in popularity.
             As of the 2022 fiscal year, Magic generates over $1 billion in revenue annually.</p>
        <h2 className="homeh2">The Rules</h2>
        <p>A typical game of Magic involves two or more players who are engaged in a battle acting as powerful wizards, known as Planeswalkers. 
            Each player has their own deck of cards, either one previously constructed or made from a limited pool of cards for the event.
             A player typically starts the game with a "life total" of twenty and loses the game when their life total is reduced to zero.
             A player can also lose if they must draw from an empty deck. Some cards specify other ways to win or lose the game.
             Additionally, one of the "Magic Golden Rules" is that "Whenever a card's text directly contradicts these rules, the card takes precedence".
             CNET highlighted that the game has many variants; also, "Magic tends to embrace all that house ruling, making it official when it catches on. 
             Commander started as a fan-created format, after all".</p>
             </div>
         <Outlet/>
         </div>
         
         
         )
}

export default Home