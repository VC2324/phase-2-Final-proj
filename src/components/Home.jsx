import { Outlet } from "react-router-dom"




function Home(){
    return(
        <div  className="home-container">

    <h1 id="home-header">Magic the Gathering</h1>
    
    <div> 
        <h2 className="homeh2">History</h2>
       
        <p className="phometext">Magic: The Gathering (colloquially known as Magic or MTG) is a tabletop and digital collectible card game created by Richard Garfield. 
            Released in 1993 by Wizards of the Coast, Magic was the first trading card game and had approximately fifty million players as of February 2023.
             Over twenty billion Magic cards were produced in the period from 2008 to 2016, during which time it grew in popularity.
             As of the 2022 fiscal year, Magic generates over $1 billion in revenue annually.Players in a game of Magic represent powerful, dueling wizards called Planeswalkers. 
             Each card a player draws from their deck represents a magical spell which can be used to their advantage in battle. 
             Instant and Sorcery cards represent magical spells a player may cast for a one-time effect, while Creature, Artifact, and Enchantment cards remain on the Battlefield to provide long-term advantage. 
             Additionally, players must include resource, or Land cards representing the amount of magic that is available to cast their spells. Typically, a player defeats their opponent(s) by reducing their 
             life totals to zero, which is commonly done via combat damage, or attacking with creatures. Many other sources of damage exist in the game, however, in addition to alternative win-conditions which do not check life totals.
             </p>
       
        <h2 className="homeh2">The Rules</h2>

        <p className= "phometext" >A typical game of Magic involves two or more players who are engaged in a battle acting as powerful wizards, known as Planeswalkers. 
            Each player has their own deck of cards, either one previously constructed or made from a limited pool of cards for the event.
             A player typically starts the game with a "life total" of twenty and loses the game when their life total is reduced to zero.
             A player can also lose if they must draw from an empty deck. Some cards specify other ways to win or lose the game.
             Additionally, one of the "Magic Golden Rules" is that "Whenever a card's text directly contradicts these rules, the card takes precedence".
             CNET highlighted that the game has many variants; also, "Magic tends to embrace all that house ruling, making it official when it catches on. 
             Commander started as a fan-created format, after all".
             <br/>
             Players begin the game by shuffling their decks and then drawing seven cards. On each player's turn, following a set phase order, they draw a card, 
             tap their lands and other permanents as necessary to gain mana as to cast spells, engage their creatures in a single attack round against their opponent who may use their own creatures to block the attack,
              and then complete other actions with any remaining mana. Most actions that a player can perform enter the "Stack", a concept similar to the stack in computer programming, as either player can react to these 
              actions with other actions, such as counter-spells; the stack provides a method of resolving complex interactions that may result in certain scenarios</p>
             </div>
         <Outlet/>
         </div>
         
         
         )
}

export default Home