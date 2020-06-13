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

//click events to save or reset the pet
//this also helps for debugging purposes
newPet.addEventListener("click", makeNewPet);
savePet.addEventListener("click", saveMyPet);

function makeNewPet () {
    localStorage.removeItem("thePet");
    location.reload();
}

function saveMyPet () {
    var thePet = localStorage.getItem("thePet");
    location.reload();
}

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
    happy.innerText = "Happiness: " + sinceHappy;
    hungry.innerText = "Hunger: " + sinceHunger;
    clean.innerText = "Hygiene: " + sinceClean;
    healthy.innerText = "Health: " + sinceHealth;
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
    // number of seconds since pet was healthy
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
    // number of seconds since pet was clean
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

/**********Click Events for Specific Objects*************/
//make an array of the things and and their functionality
//like the win condition for loop in tic tac toe
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);
bitchBird(peanuts, peaNut);


/******Functions to "Buy Time" for specific needs******/
//functions to feed the pet
function canFood(){
    sinceHunger = sinceHunger - 60000;
    message.innerText = "Canned food is delicious AND nutritious!";
}

function burritoMe(){
    sinceHunger = sinceHunger - 120000;
    message.innerText = "Pet's favorite food is Burrito!";
}

//for peanuts and debugging
function peaNut(){
    sinceHunger = sinceHunger - 20000;
    console.log("oh no");
    message.innerText = "Pet doesn't love Peanuts.";
}


function tacoMe(){
    sinceHunger = sinceHunger - 60000;
    message.innerText = "Pet enjoys Tacos.";
}

//functions bearing on happiness

function cuteHat(){
    message.innerText = "Pet feels really cute in this hat!";
    sinceHappy = sinceHappy - 40000;
}

function topHat(){
    message.innerText = "Pet feels very handsome in this hat.";
    sinceHappy = sinceHappy - 40000;
}

function presentMe(){
    message.innerText = "Pet is tearing off the wrapping paper!";
    sinceHappy = sinceHappy - 50000;
}

function boBa(){
    message.innerText = "BOBA!!!";
    sinceHappy = sinceHappy - 120000;
}

function playGuitar(){
    message.innerText = "Pet is pecking at the strings!";
    sinceHappy = sinceHappy - 20000;
}

function crystalMe(){
    message.innerText = "This Crystal is mysterious and shiny.";
    sinceHappy = sinceHappy - 300000;
}

//functions bearing on health

function pillMe(){
    message.innerText = "Great! You gave Pet their vitamins.";
    sinceHealth = sinceHealth - 130000;
}

function waterMe(){
    message.innerText = "Pet was thirsty, but feels better now!";
    sinceHealth = sinceHealth - 230000;
}

function herbMe(){
    message.innerText = "This herb is very relaxing to Pet.";
    sinceHealth = sinceHealth - 35000;
}

function stethoScope(){
    message.innerText = "Pet's vitals look better now!";
    sinceHealth = sinceHealth - 10000;
}


//functions bearing on hygiene 

function soapMe(){
    message.innerText = "Pet's feathers are soft and shiny after a wash!";
    sinceClean = sinceClean - 250000;
}

function brushTeeth(){
    message.innerText = "Nothing like a clean beak!";
    sinceClean = sinceClean - 50000;
}


/*******Draggability???******/

//for peanuts and debugging purposes

function bitchBird (item, needFunction){
    item.onmousedown = function(event) {
        let shiftX = event.clientX - item.getBoundingClientRect().left;
        let shiftY = event.clientY - item.getBoundingClientRect().top;

        item.style.position = "absolute";
        item.style.zIndex = 3000;
        document.body.append(item);
        
        moveAt(event.pageX, event.pageY);
        
        function moveAt(pageX, pageY){
            item.style.left = pageX - shiftX + "px";
            item.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        item.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            item.onmouseup = needFunction();
            console.log("😪")
        }
    }

    item.ondragstart = function() {
        return false;
    }
}

bitchBird(peanuts, peaNut);
/************Hibernation Function***********/
function petHibernate () {
        ctx.drawImage(petAsleep, 50, 90);
        message.innerText = "The pet is hibernating for some reason!";
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

    //feeding event listeners
// cannedFood.addEventListener("click", canFood);
// burrito.addEventListener("click", burritoMe);
// taco.addEventListener("click", tacoMe);

// //happiness event listeners
// femmeHat.addEventListener("click", cuteHat);
// mascHat.addEventListener("click", topHat);
// present.addEventListener("click", presentMe);
// bubbleTea.addEventListener("click", boBa);
// guitar.addEventListener("click", playGuitar);
// crystal.addEventListener("click", crystalMe);

// //health event listeners
// pill.addEventListener("click", pillMe);
// stethoscope.addEventListener("click", stethoScope);
// herb.addEventListener("click", herbMe);
// water.addEventListener("click", waterMe);

// //cleaning event listeners
// soap.addEventListener("click", soapMe);
// toothbrush.addEventListener("click", brushTeeth);