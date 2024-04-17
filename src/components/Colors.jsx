
import { Outlet } from "react-router-dom"
function Colors(){
    return(
      <div className="color-container">
      <h1 id="h1-color"> Mana Colors</h1>

      <h2 className="h-blue">Blue: Knowledge, deceit, caution, deliberation, perfection</h2>
           <p id="p-blue"><img src="src/assets/Blue Mana png.png" alt="Blue" />
           Blue is the color that wants perfection and looks on the world and sees opportunity 
           to achieve that: figuring out what one could achieve with the right education, experience,
           and tools. For Blue, life is constant discovery as one keeps seeking to better oneself. 
           This requires one to be open to possibilities, but to also not be too hasty to act. 
           Blue is methodical and exact and recognizes that there are many forces, even some that come 
           from within, that lead an individual astray: better to think one's options out carefully and 
           select correctly than to rush. Consequently Blue is, at times, excessively patient in the face of 
           adversaries, but Blue regards this as a virtue rather than a vice.
           Implicit in its world-view, blue believes in tabula rasa: every one of us is born a blank slate with 
           the potential to become anything; one need only understand the how to make the change. Blue then reasons
            that if it is to make itself better, it must acquire the knowledge necessary to become capable of 
            everything it could be capable of: to discern the potential for any conscious action. Conceiving
            itself capable of changing anything if it both understands the change and knows how to achieve every
            capability it could have, Blue concludes that it must also control change itself. As such, Blue is 
            the color most interested in technology and wants the latest and greatest version of whatever it is using. 
            Moreover, Blue believes in logic, as it is the only tool that Blue regards as being truly objective: Blue
            has little use for sentimentality. Beyond its devotion to logic and direction of change, blue seeks to understand 
            everything; for truly, comprehension can only improve one's effectiveness in any task. Since acquiring knowledge
             will inform every other decision, blue thusly forms its ultimate goal: omniscience, the knowledge of all.
           Blue is allied with White, which shares its desire to promote civilization, and Black, which shares its value 
           of individualistic self-improvement. Blue is opposed to Green, which it regards as savage and afraid of progress, 
           and Red, which it regards as insane and destructive to itself and everything else.
           </p>
           <h3 className="h-blue">Play-Style</h3>
           <ul id="h-li-blue">
           <li>Card draw </li>
           <li>Counterspells</li>
           <li>Mimicry</li>
           </ul>


      <h2 id="h-white">White: Peace, law, structure, selflessness, equality</h2>
           <p id="p-white"><img src="src/assets/white mana symbol.png" alt="White" />
           White puts value in the group, the community, and its civilization as a whole. White believes that suffering is a by-product of individuals not prioritizing the good of the group. White's ultimate goal is peace—a world where there is no unnecessary suffering; a world where life is as good as it can be for each individual; a world where everyone gets along and no one seeks to disturb the bonds of unity that White has worked so long to forge. To govern and protect its community, White makes use of and puts value in a number of broad concepts: morality (ethics, grace, truth), order (law, discipline, duty), uniformity (conformity, religion), and structure (government, planning, reason). More than every other color, White believes there is clear good and evil in the world and it is not too hard to distinguish them. White is a color commonly associated with fairness and justice but, if left unchecked or if everyone is not working toward the same unified goal, White can become totalitarian, inflexible, and capable of sacrificing a small group for the sake of a larger one: everything necessary to preserve the laws, rules, and governance that White has created. White is able to convince people to work together in a way no other color can, but White must be ever vigilant that it does not become the very evil it hopes to eradicate from the world. Withal, White is stereotyped as being the "vanilla" or boring color, yet each White character or society embodies but one iteration of a panoply of conflicting political and economic views about the best way to pragmatically actualize White's ideals; the struggle within and between White characters and societies to uphold their own interpretations of White's principles is what makes the color so interesting. What all White beings have in common is a belief in the power of social organization and in the common good. White has an ally in Green, which appreciates White's defense of life and tradition, and in Blue, which understands White's need for science and progress. However, Red's belief in anarchy and freedom puts it at odds with White's goal of supporting institutions, and White's altruism puts it directly at odds with Black's egoism.
           </p>
           <h3 className="h-white">Play-Style</h3>
           <ul className="h-white">
           <li>Damage prevention and life gain </li>
           <li>Total protection</li>
           <li>Small creatures (Weenies)</li>
           </ul>


           <h2 id="h-black"> Black: Power, self-interest, death, sacrifice, uninhibitedness</h2>
           <p id="p-black"><img src="src/assets/black mana .png" alt="Black" />
           To Black, the only measure of right and wrong should be whether or not an approach leads to success: amorality, rather than morality or immorality. Unnecessary suffering in Black's view is the result of a counterproductive approach, yet in different circumstances the same approach could be the right one. Black understands the value of selfishness, so it is open to opportunities and strategies rejected by others as taboo or forbidden—undeath, torment, infection, betrayal. Black characters will ensure their own well-being even at the expense of others; to Black, anything less only allows others to do the same. Thus, Black does everything possible to gain the only commodity that can secure it from weakness and ensure its ability to get whatever it needs or wants—power, even omnipotence. The only thing Black values more than its own life is its own will, as it sees the self as that which is most precious to all beings.

        Black's selfishness and lack of ethical restraint can result in tragedy if misapplied, but Black is not inherently evil: egoism and pragmatic ambition are the source of much good in the world, especially when coupled with self-growth, and are the basis of individual rights. Unfortunately, the association of Black with villains and anti-heroes masks the other colors' potential for tremendous evil (a misconception that their own villains and anti-heroes gleefully abuse), yet Black's heroes often reach the highest pinnacles of self-actualization and personal growth out of all heroes: Black's virtues, including self-love, self-reliance, and willingness to face the ugly side of things, are all great seeds of heroic potential. Black has a very cynical world-view, and its core philosophy is that of self-determination and release from society's imposed limitations, so when things truly go awry, a Black hero capable of waking people up to reality is exactly what the world needs. This is because, beneath its wall of cynicism, Black is the color that most believes that it can change fate against the most impossible odds—even if it must stand alone.

        Black has an ally in Blue, as it appreciates its subtlety and use of cold logic. Black is also allied with Red, respecting its desire to do things on its own terms. However, Black's disregard for other members of the group, spirituality/religion, and the sanctity of life oppose it to Green and White. This is ironic in Green's case, as Black and Green agree that each alone is merely surviving and adapting to the world as it is: they just disagree upon what "the world as it is" is.
           </p>
           <h3 className="h-black">Play-Style</h3>
           <ul className="h-black">
           <li>Creature destruction </li>
           <li>Culling the weak</li>
           <li>Necromancy</li>
           </ul>



           <h2 id="h-red">Red: Freedom, emotion, action, impulse, destruction</h2>
           <p id="p-red"><img src="src/assets/red mana symbol.png" alt="Red" />
           Above all else, Red values freedom. It wants to do what it wants when it wants, and to whom it wants, and nobody can tell it otherwise. In summary, Red thinks that all you have to do is listen to your heart and simply act accordingly, letting your emotions guide you. Red loves life much more than any other color and so it believes that all people must live it to the fullest. Red believes that life is an adventure, and that it would be much more fun if everyone stopped caring about rules, laws, and personal appearances and just spent their time indulging their desires through experience. Red doesn't live its life questioning choices it has made and lives in the moment; Red is spontaneous and embraces every adventure put before it. Red is often charismatic, even as its antics upturn the established order.

           Red is the color of immediate action and immediate gratification. If it wants something, it will act on its impulses and take it, regardless of the consequences. On the other hand, Red may also seek to make amends: Red embraces relationships and knows passion and loyalty and camaraderie and lust. When Red bonds with another, it bonds strongly and fiercely. To outsiders, Red might seem a bit chaotic; that's only because others can't see what's in Red's heart. Red tendencies differ greatly: they may exist anywhere on the spectrum between loving empathy and vile hate, plus everything in-between. In general, Red sees the concept of external order of any kind as pointlessly inhibiting, believing that only by embracing anarchy can everyone really be free to enjoy life to the maximum with no regrets.

           Red gets along well with Green, which understands the value of listening to one's inner voice, and Black, which agrees with Red's lack of adherence to social norms. But Red does not get along with White, which regards Red's quest for ultimate freedom as a threat to civilization, nor with Blue, which sees Red's brand of creativity as extremely destructive rather than productive. Red, for its part, feels that White and Blue strip people of what makes them unique.
           </p>
           <h3 className="h-red">Play-Style</h3>
           <ul className="h-red">
           <li>Direct damage (Burn) </li>
           <li>Artifact and land destruction</li>
           <li>Randomness</li>
           </ul>


           <h2 id="h-green">Green: Nature, wildlife, connection, spirituality, tradition</h2>
           <p id="p-green"><img src="src/assets/green mana symbol.png" alt="Green" />
           Green loves the world just the way it is. This is because Green is convinced that nature has gotten everything right fundamentally, and that it merely needs to be allowed the time and opportunity to develop its growth into further perfection. Green tries to coexist with the ecosystem instead of trying to change it, regulate it, norm it, or take advantage of it. As such, Green is the color of nature and interdependence. It believes that the truth of sentient beings is grounded in the natural order: a thing of beauty that has all the answers to life's problems as long as one listens closely enough to hear them. Green thinks that obeying our instincts is the best way to exist: that we, as part of the ecosystem, have a responsibility to protect it and to honor our natural selves. Wherever nature is lost, so are the available answers to us in the struggle to survive; so what affects one part of the ecosystem affects every part.

Green favors a simplistic way of living: being in harmony and communion with the natural world. This can lead to it being perceived as a pacifistic color, as it prefers to avoid extraneous conflict. Yet it is fierce when threatened and can be predatory and aggressive if its instincts dictate, and it may embrace change in the service of expanding nature and its cause. Green believes individuals are each born with a purpose: imprinted in their genes and interconnected with the physical and spiritual worlds. As everyone is born with unique roles, people's goal is to find what theirs are and do what they are destined to do. Each thread is woven into the web of life: we are not alone, but part of a complex system of inter-dependency. Green truly believes that every individual organism is part of this bigger picture—nature, the tapestry of life, fate and destiny—but that individuals may get too caught up in the details to see it.

White and Red understand Green's desire to protect nature better than the other colors, being representative of its order and freedom respectively, so this forms the basis of their alliance with Green. On the other hand, in Green's view Black's liberal use of death, and of undeath, is a violation of the cycle of life and a rejection of Black's role in the grand scheme, causing them to be enemies. Finally, Green regards technology as both a frequent threat to nature and an often hubristic attempt to replace the natural order with an artificial one; Green therefore comes into conflict with Blue which seeks to actively reshape and improve the world by means of technology.
           </p>
           <h3 className="h-green">Play-Style</h3>
           <ul className="h-green">
           <li>Powerful creatures </li>
           <li>"Pump" effects</li>
           <li>Permanent mana acceleration</li>
           </ul>
            <Outlet/>
        
        </div>
    )
}

export default Colors