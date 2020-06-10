//intialize some variables 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const beer = document.getElementById("beer");
const pet = document.getElementById("pet-awake");
const burrito = document.getElementById("burrito");
const pill = document.getElementById("pill");

//canvas details
canvas.width = 400;
canvas.height = 400;


//Billy the Pet
window.onload = function() {
    ctx.drawImage(pet, 50, 90);
  };

ctx.font = "14px monospace";
ctx.fillText("Pet is watching you intently...", 50, 50)

//********Local Storage Information**************/

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

/*****Initalize Counters for needs**************/
let happiness = 100;
let health = 100;
let hunger = 100;
let clean = 100;

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