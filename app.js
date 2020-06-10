//intialize some variables 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const beer = document.getElementById("beer");
const petAwake = document.getElementById("pet-awake");
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

/*****Initalize thePet**************/
let thePet = {
    health: 100,
    hunger: 100,
    happiness: 100,
    clean: 100,
    awake: true
}

console.log(thePet);

//canvas details
canvas.width = 400;
canvas.height = 400;


//the Pet awakens
window.onload = function() {
    ctx.drawImage(petAwake, 50, 90);
  };

ctx.font = "14px monospace";

//********Local Storage Information**************/
localStorage.setItem("thePet", "health");
localStorage.setItem("thePet", "hunger");
localStorage.setItem("thePet", "happiness");
localStorage.setItem("thePet", "clean");
// var getMyPet = localStorage.getItem("key");

/************dateObject functions**********/
//this will update the time on the page and internally
//so we can base conditional logic off of what time it IS
  const now = new Date();
  console.log(now);
  function upDate () {
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
  }
  
  setInterval(upDate,
  1000);
  //set m to now.getMinutes()
  let m = now.getMinutes();
  //this is working
  console.log(m);

  setInterval(lessHappy, 60000);
  setInterval(lessFull, 60000);
  setInterval(lessClean, 60000);
  setInterval(lessHealth, 60000);

/*********** Decrementing intervals for needs*******/
//THIS WILL NOT WORK WITHOUT LOCAL STORAGE

function lessHappy () {
    //if it is a 10 minute time
    let m = now.getMinutes();
    if(m === 00 || m === 10 || m === 20 || m === 30 || m === 40 || m === 50){
        //decrement happiness by 10
        //iterators are weird like this
        //need to name what happens
        if(thePet.happiness > 0){
            thePet.happiness = thePet.happiness - 10;
            console.log("🩰", thePet.happiness);
        }
    }
}

function lessFull () {
    //if it is a 15 minute time
    let m = now.getMinutes();
    if(m === 5 || m === 15 || m === 25 || m === 35 || m === 45 || m === 55){
            //decrement hunger by 15
        thePet.hunger - 15;
        console.log(thePet.hunger)
    }
}

function lessClean () {
    //if it is past a certain time
    let m = now.getMinutes();
    if(m === 00 || m === 30){
        thePet.clean - 30;
        console.log(thePet.clean);
    }
}

function lessHealth () {
    let m = now.getMinutes();
    if(m === 00 || m === 20 || m === 40){
        thePet.health - 20;
        console.log(thePet.health);
    }
    //every 20 min decrement health by 20
}

/**********Click Events for Specific Objects*************/
function moreHappy () {
    //click event on present, guitar, mascHat, femmeHat, crystal
    //increment happiness by +5
}

function moreFull () {
    //click event on bubbleTea, peanuts, cannedFood, taco,
    //burrito
    //increment hunger by 5
}

function moreClean () {
    //click event on toothbrush, soap
    //increment clean by 5
}

function moreHealth () {
    //click event on stethoscope, herb, water, pill
    //increment health by 5
}

/************Hibernation Function***********/

/**************JavaScript Animations***************/

/****************Archive Box*****************/