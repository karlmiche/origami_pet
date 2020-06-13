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
//     location.reload();
//     console.log("a new pet is born!");
//     let initialPet = {
//         health: Date.now(),
//         hunger: Date.now(),
//         happiness: Date.now(),
//         clean: Date.now(),
//     }
//     thePet = initialPet;
//     var thePet = localStorage.getItem("thePet");
//     location.reload();
// }

/************dateObject functions**********/
//basing conditionals off of the CURRENT TIME
const now = new Date();
console.log(now);
const currentTime = Date.now();

function changeDate(){
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
}

function checkPet () {
    checkHappy(Date.now());
    checkHungry(Date.now());
    checkHealth(Date.now());
    checkClean(Date.now());
}

setInterval(checkPet,
1000);

setInterval(changeDate, 1000);

/************Big Comparison Functionality**************/
//We can do various things and affect different properties 
const secondsSince = function(currentTime, attribute) {
    // Do relevant DOM manipulation
    return Math.round((currentTime - thePet[attribute])/1000)
}
  let sinceHappy = secondsSince(Date.now(), 'happiness')
  let sinceHunger = secondsSince(Date.now(), 'hunger')
  let sinceHealth = secondsSince(Date.now(), 'health')
  let sinceClean = secondsSince(Date.now(), 'clean')
  let totalHappScore = sinceHappy + sinceClean + sinceHealth + sinceHunger
  
//Check the needs - Credit to Sarah King for this specific block of code
//in checkHappy
function checkHappy (){
    //thePet.happiness is that a lengthy number 
      // number of seconds since pet was happy
    //   let sinceHappy = Math.floor((currentTime - thePet.happiness)/1000)
      // The hardest to meet condition needs to go first
      //this is working, it's just been many seconds since 
      //my pet was created
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
  //using this for debugging now
  //want to incorporate 
function checkHungry(){
      // number of seconds or since pet was not hungry
      if(sinceHunger > 60 * 40){
          hungry.style.backgroundColor = "red";
          hungry.style.width = "68px";
          message.innerText = "Pet is so starved they are hibernating!";
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
          message.innerText = "Pet is looking at you intently..."
          ctx.drawImage(petAwake, 50, 90);
      }
}

function checkHealth(){
    // number of seconds since pet was healthy
    if(sinceHealth > 60 * 60){
        healthy.style.backgroundColor = "red";
        healthy.style.width = "68px";
        message.innerText = "Pet is so sick they fell into a deep sleep!";
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
    // number of seconds since pet was clean
    if(sinceClean > 60 * 60){
        clean.style.backgroundColor = "red";
        clean.style.width = "68px";
        message.innerText = "Pet is so filthy they're hibernating!";
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

/**********Click Events for Specific Objects*************/
//feeding event listeners
cannedFood.addEventListener("click", moreFull);
burrito.addEventListener("click", moreFull);
peanuts.addEventListener("click", moreFull);
taco.addEventListener("click", moreFull);

//happiness event listeners
femmeHat.addEventListener("click", moreHappy);
mascHat.addEventListener("click", moreHappy);
present.addEventListener("click", moreHappy);
bubbleTea.addEventListener("click", moreHappy);
guitar.addEventListener("click", moreHappy);
crystal.addEventListener("click", moreHappy);

//health event listeners
pill.addEventListener("click", moreHealth);
stethoscope.addEventListener("click", moreHealth);
herb.addEventListener("click", moreHealth);
water.addEventListener("click", moreHealth);

//cleaning event listeners
soap.addEventListener("click", moreClean);
toothbrush.addEventListener("click", moreClean);

/******Functions to "Buy Time" for specific needs******/
//function to feed the pet
function moreFull(){
    sinceHunger = sinceHunger - 600;
    console.log("Pet looks satiated!");
}

function moreHappy(){
    console.log("Pet enjoys this gift!");
    sinceHappy = sinceHappy - 400;
}

function moreHealth(){
    console.log("Pet looks a little healthier!")
    sinceHealth = sinceHealth - 300;
}

function moreClean(){
    console.log("Pet looks cleaner!")
    sinceClean = sinceClean - 500;
}

/************Hibernation Function***********/
function petHibernate () {
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