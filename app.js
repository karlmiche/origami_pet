//intialize some variables 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const beer = document.getElementById("beer");
const pet = document.getElementById("pet-awake");
const burrito = document.getElementById("burrito");
const pill = document.getElementById("pill");

//canvas details
canvas.width = 700;
canvas.height = 400;


//Billy the Pet
window.onload = function() {
    ctx.drawImage(pet, 450, 150);
  };

//********Local Storage Information**************/

/************dateObject functions**********/
Date.now()

/*****Initalize Counters for needs**************/
let happiness = 50;
let health = 50;
let hunger = 50;
let clean = 50;

/*********** Decrementing intervals for needs*******/
function lessHappy () {}

function lessFull () {}

function lessClean () {}

function lessHealth () {}

/**********Click Events for Specific Objects*************/
function moreHappy () {}

function moreFull () {}

function moreClean () {}

function moreHealth () {}
/**************Game Logic for Specific Objects************/