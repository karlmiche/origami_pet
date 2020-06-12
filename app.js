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

ctx.font = "14px monospace";

//********Local Storage Information**************

var thePet = localStorage.getItem("thePet");

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

    console.log("there is no pet :(");
    localStorage.setItem("thePet", JSON.stringify(initialPet));
    thePet = initialPet;
}

// newPet.addEventListener("click", makeNewPet());
// // savePet.addEventListener("click", saveMyPet());

// function makeNewPet (event) {
//     localStorage.removeItem("thePet");
//     console.log("a new pet is born!");
//     let initialPet = {
//         health: Date.now(),
//         hunger: Date.now(),
//         happiness: Date.now(),
//         clean: Date.now(),
//     }
//     thePet = initialPet;
//     var thePet = localStorage.getItem("thePet");
// }

/************dateObject functions**********/
//basing conditionals off of the CURRENT TIME
const now = new Date();
console.log(now);
const currentTime = Date.now();

function upDate () {
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
    checkHappy(Date.now());
    checkHungry(Date.now());
    checkHealth(Date.now());
    checkClean(Date.now());
}

setInterval(upDate,
1000);

/************Big Comparison Functionality**************/
const secondsSince = function(currentTime, attribute) {
    // Do relevant DOM manipulation
    return Math.round((currentTime - thePet[attribute])/1000)
  }
  let sinceHappy = secondsSince(Date.now(), 'happiness')
  let sinceHunger = secondsSince(Date.now(), 'hunger')
  let sinceHealth = secondsSince(Date.now(), 'health')
  let sinceClean = secondsSince(Date.now(), 'clean')
  let totalHappScore = sinceHappy + sinceClean + sinceHealth + sinceHunger
  if (totalHappScore > (60 * 60 * 24)) {
    message.innerText = "You have not taken good care of Pet. They are hibernating!";
    petHibernate();
  }

//Check the needs - Credit to Sarah King for this specific block of code
//in checkHappy
function checkHappy (currentTime){
    //thePet.happiness is that a lengthy number 
      // number of seconds since pet was happy
      let lastHappy = Math.floor((currentTime - thePet.happiness)/1000)
      // The hardest to meet condition needs to go first
      //this is working, it's just been many seconds since 
      //my pet was created
      if(lastHappy > 60 * 60 * 24){
          happy.style.backgroundColor = "red";
          happy.style.width = "68px";
          message.innerText = "Pet is so glum they are hibernating!";
          petHibernate();
      }else if(lastHappy > 60 * 60 * 3){
          happy.style.backgroundColor = "orange";
          happy.style.width = "136px";
          message.innerText = "Pet is looking really, really sad!";
          //display new status bar width
      }else if(lastHappy > 60 * 60 * 1){
          happy.style.backgroundColor = "yellow";
          happy.style.width = "204px";
          message.innerText = "Pet is unhappy... What will you do?";
      }    
  }

  function checkHungry(currentTime){
      // number of seconds or since pet was not hungry
      let lastHungry = Math.round((currentTime - thePet.hunger)/1000)
      if(lastHungry > 60 * 40){
          hungry.style.backgroundColor = "red";
          hungry.style.width = "68px";
          message.innerText = "Pet is so starved they are hibernating!";
          petHibernate();
      }else if(lastHungry > 60 * 30){
          hungry.style.backgroundColor = "orange";
          hungry.style.width = "136px";
          message.innerText = "Pet is looking very famished!";
          //display new status bar width
      }else if(lastHungry > 60 * 20){
          console.log("Pet is hungry :(");
          hungry.style.backgroundColor = "yellow";
          hungry.style.width = "204px";
          message.innerText = "Pet's stomach is growling audibly!";
      }    
  }

  function checkHealth(currentTime){
    // number of seconds since pet was healthy
    let lastHealthy = Math.round((currentTime - thePet.health)/1000)
    if(lastHealthy > 60 * 60){
        healthy.style.backgroundColor = "red";
        healthy.style.width = "68px";
        message.innerText = "Pet is so sick they fell into a deep sleep!";
        petHibernate();
    }else if(lastHealthy > 60 * 60 * 2){
        healthy.style.backgroundColor = "orange";
        healthy.style.width = "136px";
        message.innerText = "Pet is looking very ill!";
        //display new status bar width
    }else if(lastHealthy > 60 * 60 * 3){
        healthy.style.backgroundColor = "yellow";
        healthy.style.width = "204px";
        message.innerText = "Pet looks a little queasy :(";
    }    
}


function checkClean(currentTime){
    // number of seconds since pet was clean
    let lastClean = Math.round((currentTime - thePet.clean)/1000)
    if(lastClean > 60 * 60){
        clean.style.backgroundColor = "red";
        clean.style.width = "68px";
        message.innerText = "Pet is so filthy they're hibernating!";
        petHibernate();
    }else if(lastClean > 60 * 45){
        clean.style.backgroundColor = "orange";
        clean.style.width = "136px";
        message.innerText = "Pet smells BAD!";
        //display new status bar width
    }else if(lastClean > 60 * 30){
        clean.style.backgroundColor = "yellow";
        clean.style.width = "204px";
        message.innerText = "Pet is a little smelly 🤢";
    }    
}

/**********Click Events for Specific Objects*************/
cannedFood.addEventListener("click", moreFull());
burrito.addEventListener("click", moreFull());
peanuts.addEventListener("click", moreFull());
taco.addEventListener("click", moreFull());

/******Functions to "Buy Time" for specific needs******/
function moreFull(event){
    sinceHunger + 600000;
    console.log("you fed the Pet!");
}
/************Hibernation Function***********/
function petHibernate () {
        message.innerText = "You did not care for the pet. He is hibernating!";
        ctx.drawImage(petAsleep, 50, 90);   
}

/**************JavaScript Animations***************/

/****************Archive Box*****************/
//Some various notes

    // checkHappy();
    //call checkHappy fka lessHappy
    //call with the current date as a parameter
    //can pass in the Date.now
    //check current time based on thePet.happiness 
    //then come the conditionals
    //try console.log "the pet is unhappy"
    //if it's been more than an hour, display the pet as sleeping
    //chonky conditionals using Date.now for number comparisons
    //scale is more than 60 minutes
    //does this update when someone is on?
    //currrently will only decrement when you're on the page
    //how do we check the last time a pet was at 