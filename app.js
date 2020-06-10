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
var getMyPet = localStorage.getItem("key");

/************dateObject functions**********/
//this will update the time on the page and internally
//so we can base conditional logic off of what time it IS

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function gettingMinutes() {
    var d = new Date();
    var t = document.getElementById("time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    t.innerHTML = h + ":" + m + ":" + s;

    setTimeout(gettingMinutes, 1000);
  }

  gettingMinutes();
  console.log(gettingMinutes);


/*********** Decrementing intervals for needs*******/
function lessHappy () {
    //if it is a 10 minute time
    //decrement happiness by 10
}

function lessFull () {
    //if it is a 15 minute time
    //decrement hunger by 15
}

function lessClean () {
    //if it is past a certain time
    //decrement clean by 5
}

function lessHealth () {
    //every 30 min decrement health by 20
}

/**********Click Events for Specific Objects*************/
function moreHappy () {}

function moreFull () {}

function moreClean () {}

function moreHealth () {}
/**************Game Logic for Specific Objects************/