//intialize some variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const beer = document.getElementById("beer");
const petAwake = document.getElementById("pet-awake");
const petAsleep = document.getElementById("pet-asleep");
const burrito = document.getElementById("burrito");
const pill = document.getElementById("pill");
const crystal = document.getElementById("crystal"); 
const bubbleTea = document.getElementById("bubbleTea"); 
const mascHat = document.getElementById("masc-hat");
const femmeHat = document.getElementById("femme-hat");
const water = document.getElementById("water");
const peanuts = document.getElementById("peanuts");
const cannedFood = document.getElementById("cannedFood");
const taco = document.getElementById("taco");
const present = document.getElementById("present");
const stethoscope = document.getElementById("stethoscope");
const herb = document.getElementById("herb");
const soap = document.getElementById("soap");
const toothbrush = document.getElementById("toothbrush");
const guitar = document.getElementById("guitar");
const happy = document.getElementById("happy");
const hungry = document.getElementById("hungry");
const healthy = document.getElementById("healthy");
const clean = document.getElementById("clean");
const message = document.getElementById("message");
const savePet = document.getElementById("savepet");
const newPet = document.getElementById("newpet");
const secondsSince = function(currentTime, attribute) {
    return Math.round((currentTime - thePet[attribute])/1000)
}

//canvas details
canvas.width = 400;
canvas.height = 400;


//the Pet awakens
window.onload = function() {
    ctx.drawImage(petAwake, 50, 90);
  };

//********Local Storage Information**************
let thePet = localStorage.getItem("thePet");
if(thePet){
    console.log("there is a pet :-)")
    thePet = JSON.parse(thePet);
    //we will want to change local pet to the parsed version of pet
}else{
    let initialPet = {
        health: Date.now(), 
        hunger: Date.now(),
        happiness: Date.now(),
        clean: Date.now(),
    }
    thePet = initialPet;
    initialPet.sinceHappiness = secondsSince(Date.now(), 'happiness')
    initialPet.sinceHunger = secondsSince(Date.now(), 'hunger'),
    initialPet.sinceHealth = secondsSince(Date.now(), 'health'),
    initialPet.sinceClean = secondsSince(Date.now(), 'clean'),
    initialPet.totalHappScore = thePet.sinceHappiness + thePet.sinceClean + thePet.sinceHealth + thePet.sinceHunger
    thePet = initialPet;
    console.log("there is no pet :(");
    localStorage.setItem("thePet", JSON.stringify(initialPet));  
}

/************Big Comparison Functionality**************/
//click events to save or reset the pet
newPet.addEventListener("click", makeNewPet);
savePet.addEventListener("click", saveMyPet);

function makeNewPet () {
    localStorage.removeItem("thePet");
    location.reload();
}

function saveMyPet () {
    thePet = localStorage.getItem("thePet");
    location.reload();
}



/************dateObject functions**********/
//updates check functions on second interval
const now = new Date();
const currentTime = Date.now();

function tickClock(){
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
    //update Pet values
    thePet.sinceHappiness = secondsSince(Date.now(), 'happiness')
    thePet.sinceHunger = secondsSince(Date.now(), 'hunger'),
    thePet.sinceHealth = secondsSince(Date.now(), 'health'),
    thePet.sinceClean = secondsSince(Date.now(), 'clean'),
    thePet.totalHappScore = thePet.sinceHappiness + thePet.sinceClean + thePet.sinceHealth + thePet.sinceHunger
    localStorage.setItem("thePet", JSON.stringify(thePet));
}

function checkPet () {
    checkHappy(Date.now);
    checkHungry(Date.now);
    checkHealth(Date.now);
    checkClean(Date.now);
}

setInterval(checkPet, 1000);
setInterval(tickClock, 1000);

 /***Change background color and pet image at night***/
 let h = now.getHours();
 if (h > 21 || h < 6){
    document.body.className = "night-time";
    ctx.drawImage(petAsleep, 50, 90);
    message.style.color = "white";
    message.innerText = "The pet is sleeping, you should be too!"
    document.getElementById("time2").style.color = "white";
}
else if(h < 21 || h > 6){
    document.body.className = "day-time";
    ctx.drawImage(petAwake, 50, 90);
    message.style.color = "indigo";
}

/**These functions check the pet's needs and update status bars**/
function checkHappy (){
    if(thePet.sinceHappiness > 60 * 60 * 1.5){
        happy.style.backgroundColor = "red";
        happy.style.width = "68px";
        happy.innerText = "Happiness: Depressed";
        message.innerText = "Pet is so glum they are hibernating!";
        petHibernate();
        return;
    }else if(thePet.sinceHappiness > 60 * 60){
        happy.style.backgroundColor = "orange";
        happy.style.width = "136px";
        happy.innerText = "Happiness: Sad";
        message.innerText = "Pet is looking really, really sad!";
        return;
    }else if(thePet.sinceHappiness > 60 * 40){
        happy.style.backgroundColor = "yellow";
        happy.style.width = "204px";
        happy.innerText = "Happiness: Fine";
        message.innerText = "Pet is unhappy... What will you do?";
        return;
    }else{
        happy.style.backgroundColor = "rgb(58, 161, 58)";
        happy.style.width = "272px";
        happy.innerText = "Happiness: Very Happy";
        ctx.drawImage(petAwake, 50, 90);
    }    
}

/******WIDTH DECREMENT CHALLENGE
//204px of "playable space" - thinking of a percentage tick so it's like
//68+ seconds - how many seconds 
//if the time is less than one hour, and greater than 24 hours, 
//decrement or have the width be = whatever 
//decrement width in pixels with the seconds
OOP types in JavaScript


*****/
function checkHungry(){
    if(thePet.sinceHunger > 60 * 30){
        hungry.style.backgroundColor = "red";
        hungry.style.width = "68px";
        hungry.innerText = "Hunger: Starved";
        petHibernate();
        return;
    }else if(thePet.sinceHunger > 60 * 20){
        hungry.style.backgroundColor = "orange";
        hungry.style.width = "136px";
        hungry.innerText = "Hunger: Starving";
        message.innerText = "Pet is looking very famished!";
        return;
    }else if(thePet.sinceHunger > 60 * 10){
        console.log("Pet is hungry :(");
        hungry.style.backgroundColor = "yellow";
        hungry.style.width = "204px";
        hungry.innerText = "Hunger: Hungry";
        message.innerText = "Pet's stomach is growling audibly!";
        return;
    }else{
        hungry.style.backgroundColor = "rgb(58, 161, 58)";
        hungry.style.width = "272px";
        hungry.innerText = "Hunger: Full";
        ctx.drawImage(petAwake, 50, 90);
    }
}

//amount decrement per second depends on width of the bar
function checkHealth(){
    if(thePet.sinceHealth > 60 * 60){
        healthy.style.backgroundColor = "red";
        healthy.style.width = "68px";
        healthy.innerText = "Health: Ill";
        petHibernate();
        return;
    }else if(thePet.sinceHealth > 60 * 60 * 2){
        healthy.style.backgroundColor = "orange";
        healthy.style.width = "136px";
        healthy.innerText = "Health: Very Sick";
        message.innerText = "Pet is looking very ill!";
        return;
    }else if(thePet.sinceHealth > 60 * 60 * 3){
        healthy.style.backgroundColor = "yellow";
        healthy.style.width = "204px";
        healthy.innerText = "Health: Queasy";
        message.innerText = "Pet looks a little queasy :(";
        return;
    }else{
        healthy.style.backgroundColor = "rgb(58, 161, 58)";
        healthy.style.width = "272px";
        healthy.innerText = "Health: Excellent"
        ctx.drawImage(petAwake, 50, 90);
    }    
}


function checkClean(){
    if(thePet.sinceClean > 60 * 60){
        clean.style.backgroundColor = "red";
        clean.style.width = "68px";
        clean.innerText = "Hygiene: Poor";
        petHibernate();
        return;
    }else if(thePet.sinceClean > 60 * 45){
        clean.style.backgroundColor = "orange";
        clean.style.width = "136px";
        clean.innerText = "Hygiene: Smelly";
        message.innerText = "Pet smells BAD!";
        return;
    }else if(thePet.sinceClean > 60 * 30){
        clean.style.backgroundColor = "yellow";
        clean.style.width = "204px";
        clean.innerText = "Hygiene: Crusty";
        message.innerText = "Pet is a little smelly 🤢";
        return;
    }else{
        clean.style.backgroundColor = "rgb(58, 161, 58)";
        clean.style.width = "272px";
        clean.innerText = "Hygiene: Clean";
        ctx.drawImage(petAwake, 50, 90);
    }    
}

/****birdNeeds object holds functions for specific game assets****/
//change everything so it's +=
birdNeeds = {
    canFood: ()=>{
        thePet.hunger += 200000;
        message.innerText = "Canned food is delicious AND nutritious!";
    },
    burritoMe: ()=>{
        thePet.hunger += 600000;
        message.innerText = "Pet's favorite food is Burrito!";
    },
    peaNut: ()=>{
        thePet.hunger += 500000;
        message.innerText = "Pet doesn't love Peanuts.";
    },
    tacoMe: ()=>{
        thePet.hunger += 60000;
        message.innerText = "Pet enjoys Tacos.";
    },
    cuteHat: ()=>{
        message.innerText = "Pet feels really cute in this hat!";
        thePet.happiness += 40000;
    },
    topHat: ()=>{
        message.innerText = "Pet feels very handsome in this hat.";
        thePet.happiness += 40000;
    },
    presentMe: ()=>{
        message.innerText = "Pet is tearing off the wrapping paper!";
        thePet.happiness += 50000;
    },
    boBa: ()=>{
        message.innerText = "BOBA!!!";
        thePet.happiness += 120000;
    },
    playGuitar: ()=>{
        message.innerText = "Pet is pecking at the strings!";
        thePet.happiness += 20000;
    },
    crystalMe: ()=>{
        message.innerText = "This Crystal is mysterious and shiny.";
        thePet.happiness += 300000;
    },
    pillMe: ()=>{
        message.innerText = "Great! You gave Pet their vitamins.";
        thePet.health += 130000;
    },
    waterMe: ()=>{
        message.innerText = "Pet was thirsty, but feels better now!";
        thePet.health += 230000;
    },
    herbMe: ()=>{
        message.innerText = "This herb is very relaxing to Pet.";
        thePet.health += 35000;
    },
    stethoScope: ()=>{
        message.innerText = "Pet's vitals look better now!";
        thePet.health += 10000;
    },
    soapMe: ()=>{
        message.innerText = "Pet's feathers are soft and shiny after a wash!";
        thePet.clean += 250000;
    },
    brushTeeth: ()=>{
        message.innerText = "Nothing like a clean beak!";
        thePet.clean += 50000;
    }
}   

//feeding event listeners
cannedFood.addEventListener("click", birdNeeds.canFood);
burrito.addEventListener("click", birdNeeds.burritoMe);
taco.addEventListener("click", birdNeeds.tacoMe);
peanuts.addEventListener("click", birdNeeds.peaNut);
//happiness event listeners
femmeHat.addEventListener("click", birdNeeds.cuteHat);
mascHat.addEventListener("click", birdNeeds.topHat);
present.addEventListener("click", birdNeeds.presentMe);
bubbleTea.addEventListener("click", birdNeeds.boBa);
guitar.addEventListener("click", birdNeeds.playGuitar);
crystal.addEventListener("click", birdNeeds.crystalMe);
//health event listeners
pill.addEventListener("click", birdNeeds.pillMe);
stethoscope.addEventListener("click", birdNeeds.stethoScope);
herb.addEventListener("click", birdNeeds.herbMe);
water.addEventListener("click", birdNeeds.waterMe);
//cleaning event listeners
soap.addEventListener("click", birdNeeds.soapMe);
toothbrush.addEventListener("click", birdNeeds.brushTeeth);

/************Hibernation Function***********/
function petHibernate () {
    ctx.drawImage(petAsleep, 50, 90);
    message.innerText = "The pet is hibernating for some reason!";
}