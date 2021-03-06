//Goblin Coliseum

  //Goblins are Objects
  //Wielding Objects
  //Using these Objects to assault other Objects

  /* Let's break down that code into 3 steps */
    
    /* 1
    Goblins are Objects */
    let goblin1 = {
        health: 100,
        power: 7,
    };

    /* A Goblin is a changeable Object
        which begins with 100% of it's health.
        It has 7 power, a lucky number */

    /* 2
    Wielding Objects */
    let axe = {
        damage: 21,
        reach: 3,
    };

    /* An Axe is a changeable Object
        which does 21 damage
        and can reach 3 meters */

    /* 3
    Using these Objects to assault other Objects */
    const attack = (atk, def, wep) => {
        incoming = atk.power + wep.damage;
        combatantHealth = def.health - incoming;
        return `Defending Goblin has ${combatantHealth} percent of it's health left!`;
    };
    /* attack is a function that takes into account
        the power of the Goblin
         the damage of it's Weapon
          the Defender as a new Object
    Returning the new overall Health of the Defender as a percentage */

    /* Let's do a test */
    let goblin2 = {
        health: 100,
        power: 7,
    };
    console.log("Goblin #1");
    console.log(goblin1);
    console.log("Goblin #2");
    console.log(goblin2);
    console.log(attack(goblin1, goblin2, axe));
    
//

/* Great!
  Now we have goblins engaging in combat with each other.
  What happens next? */
    
  //The Defending Goblin becomes an updated Object with a new health value
  //It retaliates with an attack of it's own (using a new weapon)
  //The new Defender is hurt, thus becoming an updated Object of it's own

  /* 3 Steps again */
    
    /* 1
    The Defending Goblin becomes an updated Object with a new health value */
    const woundedGoblin = (gobbo, pain) => {
        gobbo.health -= pain;
        console.log(`The Gobbo suffered ${pain} points of painful damage`);
        return gobbo; 
    };

    /* The Defending Goblin takes in a certain amount of damage,
        that damage being logged whilst an updated Goblin Object is returned*/

    /* 2
    It retaliates with an attack of it's own (using a new weapon) */
    const newAttack = (atk, def, wep) => {
        incoming = atk.power + wep.damage;
        combatantHealth = def.health - incoming;
        console.log(`Defending Goblin has ${combatantHealth} percent of it's health left!`);
        return woundedGoblin(def, incoming);
    };

    /* This is an updated version of the old attack function.
    It logs the Defenders Health for us now 
    and instead returns the updated Wounded Goblin from our function */

    /***Don't forget the new weapon!! */
    const sword = {
        damage: 16,
        reach: 5,
    };

    /* 3
    The new Defender is hurt, thus becoming an updated Object of it's own */
    function combatRound(gob1, wep1, gob2, wep2) {
        let defender = newAttack(gob1, gob2, wep1);
        let attacker = newAttack(defender, gob1, wep2);
        return `After a single round, the aggresor Goblin has ${attacker.health} points of health left, compared to the defenders ${defender.health} points of health.`;  
    };

    /* So...
    ***/ console.clear(); /***
    Does it Work? Test! */
    console.log(combatRound(goblin1, axe, goblin2, sword));
    console.log("All our Goblins Status:");
    console.log("Goblin #1");
    console.log(goblin1);
    console.log("Goblin #2");
    console.log(goblin2);
    
 //
    /* Okay...
    The Goblins are going through the motions... that's for sure...
    But some more goblins showed up, and there aren't looking for a fight!
    What to do? */

    let goblin3 = {
        health: 100,
        power: 7,
    };

    let goblin4 = {
        health: 100,
        power: 7,
    };

    let goblin5 = {
        health: 100,
        power: 7,
    };

    //Let's try creating an array and filling it with our just fighting Goblins
    let fightingGoblins = [];
    
    function newCombatRound(gob1, wep1, gob2, wep2) {
        let defender = newAttack(gob1, gob2, wep1);
        let attacker = newAttack(defender, gob1, wep2);
        fightingGoblins = [attacker, defender];
        return `After a single round, the aggresor Goblin has ${attacker.health} points of health left, compared to the defenders ${defender.health} points of health.`;  
    };
    
    //Testing
    console.clear();
    console.log(newCombatRound(goblin1, axe, goblin2, sword));
    console.log("Goblin #1");
    console.log(goblin1);
    console.log("Goblin #2");
    console.log(goblin2);
    console.log("Whose fighting?")
    console.log(fightingGoblins);
    //

    //Still fighting...
    console.log(newCombatRound(goblin1, axe, goblin2, sword));
    console.log(fightingGoblins);
    
    /*Not looking good for Goblin # 2
    What happens when he runs out of health? */