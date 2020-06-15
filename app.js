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
        // totalHappScore: Date.now(),
    }
    console.log("there is no pet :(");
    localStorage.setItem("thePet", JSON.stringify(initialPet));
    thePet = initialPet;
}

// //local storage for totalHappScore
// //but this didn't solve the bug I was having
// //wrapping it in a function 
// //and calling it on click events didn't help either
// totalHappScore = localStorage.getItem("totalHappScore");

// if(totalHappScore){
//     console.log("there is a happiness score!");
//     totalHappScore = JSON.parse(totalHappScore);
// }else{
//     let startHappScore = sinceHappy + sinceClean + sinceHealth + sinceHunger
//     console.log("there is no happiness score!");
//     localStorage.setItem("totalHappScore", JSON.stringify(startHappScore));
// }

/************Big Comparison Functionality**************/
const secondsSince = function(currentTime, attribute) {
    return Math.round((currentTime - thePet[attribute])/1000)
}
  let sinceHappy = secondsSince(Date.now(), 'happiness')
  let sinceHunger = secondsSince(Date.now(), 'hunger')
  let sinceHealth = secondsSince(Date.now(), 'health')
  let sinceClean = secondsSince(Date.now(), 'clean')
  totalHappScore = sinceHappy + sinceClean + sinceHealth + sinceHunger

//click events to save or reset the pet
newPet.addEventListener("click", makeNewPet);
savePet.addEventListener("click", saveMyPet);

function makeNewPet () {
    localStorage.removeItem("thePet");
    location.reload();
}

function saveMyPet () {
    //this is going to get the last recorded pet
    //I don't know if this really "saves" the pet
    thePet = localStorage.getItem("thePet");
    location.reload();
}

/************dateObject functions**********/
const now = new Date();
const currentTime = Date.now();

function changeDate(){
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
}

function checkPet () {
    checkHappy(Date.now);
    checkHungry(Date.now);
    checkHealth(Date.now);
    checkClean(Date.now);
    happy.innerText = "Happiness: " + sinceHappy;
    hungry.innerText = "Hunger: " + sinceHunger;
    clean.innerText = "Hygiene: " + sinceClean;
    healthy.innerText = "Health: " + sinceHealth;
}

setInterval(checkPet, 1000);
setInterval(changeDate, 1000);

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
    if(sinceHappy > 60 * 60 * 24){
        happy.style.backgroundColor = "red";
        happy.style.width = "68px";
        message.innerText = "Pet is so glum they are hibernating!";
        petHibernate();
        return;
    }else if(sinceHappy > 60 * 60){
        happy.style.backgroundColor = "orange";
        happy.style.width = "136px";
        message.innerText = "Pet is looking really, really sad!";
        return;
    }else if(sinceHappy > 60 * 60 * 2){
        happy.style.backgroundColor = "yellow";
        happy.style.width = "204px";
        message.innerText = "Pet is unhappy... What will you do?";
        return;
    }else{
    happy.style.backgroundColor = "rgb(58, 161, 58)";
    happy.style.width = "272px";
    ctx.drawImage(petAwake, 50, 90);
    }    
}
 
function checkHungry(){
    if(sinceHunger > 60 * 40){
        hungry.style.backgroundColor = "red";
        hungry.style.width = "68px";
        petHibernate();
        return;
    }else if(sinceHunger > 60 * 30){
        hungry.style.backgroundColor = "orange";
        hungry.style.width = "136px";
        message.innerText = "Pet is looking very famished!";
        return;
    }else if(sinceHunger > 60 * 20){
        console.log("Pet is hungry :(");
        hungry.style.backgroundColor = "yellow";
        hungry.style.width = "204px";
        message.innerText = "Pet's stomach is growling audibly!";
        return;
    }else{
        hungry.style.backgroundColor = "rgb(58, 161, 58)";
        hungry.style.width = "272px";
        ctx.drawImage(petAwake, 50, 90);
    }
}

function checkHealth(){
    if(sinceHealth > 60 * 60){
        healthy.style.backgroundColor = "red";
        healthy.style.width = "68px";
        petHibernate();
        return;
    }else if(sinceHealth > 60 * 60 * 2){
        healthy.style.backgroundColor = "orange";
        healthy.style.width = "136px";
        message.innerText = "Pet is looking very ill!";
        return;
    }else if(sinceHealth > 60 * 60 * 3){
        healthy.style.backgroundColor = "yellow";
        healthy.style.width = "204px";
        message.innerText = "Pet looks a little queasy :(";
        return;
    }else{
        healthy.style.backgroundColor = "rgb(58, 161, 58)";
        healthy.style.width = "272px";
        ctx.drawImage(petAwake, 50, 90);
    }    
}


function checkClean(){
    if(sinceClean > 60 * 60){
        clean.style.backgroundColor = "red";
        clean.style.width = "68px";
        petHibernate();
        return;
    }else if(sinceClean > 60 * 45){
        clean.style.backgroundColor = "orange";
        clean.style.width = "136px";
        message.innerText = "Pet smells BAD!";
        return;
    }else if(sinceClean > 60 * 30){
        clean.style.backgroundColor = "yellow";
        clean.style.width = "204px";
        message.innerText = "Pet is a little smelly 🤢";
        return;
    }else{
        clean.style.backgroundColor = "rgb(58, 161, 58)";
        clean.style.width = "272px";
        ctx.drawImage(petAwake, 50, 90);
    }    
}

/****birdNeeds object holds functions for specific game assets****/
birdNeeds = {
    canFood: ()=>{
        sinceHunger = sinceHunger - 60000;
        message.innerText = "Canned food is delicious AND nutritious!";
    },
    burritoMe: ()=>{
        sinceHunger = sinceHunger - 120000;
        message.innerText = "Pet's favorite food is Burrito!";
    },
    peaNut: ()=>{
        sinceHunger = sinceHunger - 20000;
        message.innerText = "Pet doesn't love Peanuts.";
    },
    tacoMe: ()=>{
        sinceHunger = sinceHunger - 60000;
        message.innerText = "Pet enjoys Tacos.";
    },
    cuteHat: ()=>{
        message.innerText = "Pet feels really cute in this hat!";
        sinceHappy = sinceHappy - 40000;
    },
    topHat: ()=>{
        message.innerText = "Pet feels very handsome in this hat.";
        sinceHappy = sinceHappy - 40000;
    },
    presentMe: ()=>{
        message.innerText = "Pet is tearing off the wrapping paper!";
        sinceHappy = sinceHappy - 50000;
    },
    boBa: ()=>{
        message.innerText = "BOBA!!!";
        sinceHappy = sinceHappy - 120000;
    },
    playGuitar: ()=>{
        message.innerText = "Pet is pecking at the strings!";
        sinceHappy = sinceHappy - 20000;
    },
    crystalMe: ()=>{
        message.innerText = "This Crystal is mysterious and shiny.";
        sinceHappy = sinceHappy - 300000;
    },
    pillMe: ()=>{
        message.innerText = "Great! You gave Pet their vitamins.";
        sinceHealth = sinceHealth - 130000;
    },
    waterMe: ()=>{
        message.innerText = "Pet was thirsty, but feels better now!";
        sinceHealth = sinceHealth - 230000;
    },
    herbMe: ()=>{
        message.innerText = "This herb is very relaxing to Pet.";
        sinceHealth = sinceHealth - 35000;
    },
    stethoScope: ()=>{
        message.innerText = "Pet's vitals look better now!";
        sinceHealth = sinceHealth - 10000;
    },
    soapMe: ()=>{
        message.innerText = "Pet's feathers are soft and shiny after a wash!";
        sinceClean = sinceClean - 250000;
    },
    brushTeeth: ()=>{
        message.innerText = "Nothing like a clean beak!";
        sinceClean = sinceClean - 50000;
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