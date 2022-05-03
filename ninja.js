class Ninja {
    constructor(name,health,speed,strength) {
        this.name = name;
        this.health = 50;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`I go by ${this.name}`);
        return this;
    }

    showStats() {
        console.log(` Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`Drinking sake increases your health ${this.name} !.`);
        this.health += 10;
        console.log(`Your health is now ${this.health}`);
        this.showStats();
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");


//sensei class

class Sensei extends Ninja{
    constructor(name,health=200,speed=10,strength=10){
        super(name,health,speed,strength);
        this.health=200;
        this.wisdom=10;
        this.speed=10;
        this.strength=10;
    }

    speakWisdom(){
        this.drinkSake();
        this.wisdom += 10;
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        console.log(`your wisdom is now at ${this.wisdom}`);
        return this;
    }
}

const superSensei= new Sensei('Master Splinter');
console.log(superSensei);

superSensei.speakWisdom();
superSensei.speakWisdom();
superSensei.speakWisdom();



