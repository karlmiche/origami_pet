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
        //I don't understand this part
        health: Date.now(),
        hunger: Date.now(),
        happiness: Date.now(),
        clean: Date.now(),
        //if the time is after 11pm your time, initial pet:awake = false 
    }

    console.log("there is no pet :(");
    localStorage.setItem("thePet", JSON.stringify(initialPet));
    thePet = initialPet;
}

// newPet.addEventListener("click", makeNewPet());
// savePet.addEventListener("click", saveMyPet());

/************dateObject functions**********/
//basing conditionals off of the CURRENT TIME
const now = new Date();
console.log(now);
const currentTime = Date.now();

function upDate () {
    const now = new Date();
    document.getElementById("time2").innerHTML = now;
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
}


    //does this update when someone is on?
    //currrently will only decrement when you're on the page
    //how do we check the last time a pet was at 
setInterval(upDate,
1000);

/*************checkNeeds conditionals****/
//1 hr is 3600 seconds
//40 min is 2400 seconds
//30 min is 1800 seconds
//20 min is 1200

/********Timestamp Stuff*******/

//Check the needs
function checkHappy (currentTime){
   
    //thePet.happiness is that a lengthy number 
    //measured in milliseconds
    //is the pet currently happy?
    //how do you use the info you have to figure out if 
    //happy or not?
    //this will update the local storage every second
    //may need access to this in a different function
   if(thePet.happiness > currentTime - 600000){
        let lastHappy = (new Date().getTime())
        localStorage.setItem("happyKey", lastHappy)
    }else{  
        lastHappy = parseInt(localStorage.getItem("happyKey"));
    }
    
    //if the time elapsed from the last time thePet was happy
    //has been more than 1200 seconds
    //lastHappy is a timestamp
    //when lastHappy stops updating, we still need to have access
    //to the values of lastHappy in localStorage
    if(lastHappy < currentTime - 1200000){
        //needs to be measured in time
        console.log("🩰");
        happy.style.backgroundColor = "yellow";
        message.innerText = "Pet is unhappy... What will you do?";
            //display new status bar width and color
        
    }else if(lastHappy < currentTime - 1800000){
        //needs to be measured in time
        happy.style.backgroundColor = "orange";
        message.innerText = "Pet is looking really, really sad!";
        //display new status bar width
    
    }else if(lastHappy < currentTime - 2400000){
        happy.style.backgroundColor = "orange";
        message.innerText = "Pet is so glum they are hibernating!";
        petHibernate();
        //display shortest status bar width and red color       
    }    
}

function checkHungry (){}

function checkHealth () {}

function checkClean (){}

/************Hibernation Function***********/
function petHibernate () {
    if(thePet.happiness == 10 && thePet.health == 10 && thePet.hunger == 10 && thePet.clean === 10){
        message.innerText = "You did not care for the pet. He is hibernating!";
        ctx.drawImage(petAsleep, 50, 90);
    }
}

/**************JavaScript Animations***************/


// /**********Click Events for Specific Objects*************/
// //these events will increment the values 
// //the value must not exceed 100
// //the value cannot be less than 0
// function moreHappy () {
//     //click event on present, guitar, mascHat, femmeHat, crystal
//     //increment happiness by +5
// }

// function moreFull () {
//     //click event on bubbleTea, peanuts, cannedFood, taco,
//     //burrito
//     //increment hunger by +5
// }

// function moreClean () {
//     //click event on toothbrush, soap
//     //increment clean by +5
// }

// function moreHealth () {
//     //click event on stethoscope, herb, water, pill
//     //increment health by +5

/****************Archive Box*****************/
/*********** Decrementing intervals for needs*******/
// functions that determine happiness level based on time difference
// function lessHappy () {
//     //if it is a 10 minute time
//     //this part fuckiN works
//     let m = now.getMinutes();
//     if(m == 0 || m == 10 || m == 20 || m == 30 || m == 40 || m == 50){
//         //decrement happiness by 10
//         console.log("olives")
//         if(thePet.happiness > 10){
//             thePet.happiness = thePet.happiness - 10;
//             console.log("🩰", thePet.happiness);
//             happy.innerText = thePet.happiness;
//             message.innerText = "Pet is unhappy... What will you do?";
//         }
//     }
// }

// function lessFull () {
//     let m = now.getMinutes();
//     if(m === 5 || m === 15 || m === 25 || m === 35 || m === 45 || m === 55){
//             //decrement hunger by 15 IF there is hunger to decrement
//         if(85 > thePet.hunger > 10){
//             thePet.hunger = thePet.hunger - 15;
//             console.log("💛",thePet.hunger);
//             hungry.innerText = thePet.hunger;
//             message.innerText = "Pet looks very hungry!";
//         }
//     }
// }

// function lessClean () {
//     //if it is past a 30 min time
//     let m = now.getMinutes();
//     if(m === 0 || m === 30){
//         if(70 > thePet.clean > 10){
//             thePet.clean = thePet.clean - 30;
//             console.log("☣️", thePet.clean);
//             clean.innerText = thePet.clean;
//             message.innerText = "Pet is starting to smell bad..."
//         }       
//     }
// }

// function lessHealth () {
//     let m = now.getMinutes();
//     if(m === 0 || m === 20 || m === 40){
//         if(80 > thePet.health > 20){
//         thePet.health - 20;
//         console.log(thePet.health);
//         healthy.innerText = thePet.health;
//         message.innerText = "Pet looks unwell!";
//         }
//     }
// }


/********Some Old DateObject things************/
//check to see, if the pet is in local storage, use the saved local storage values
//if this exists, get the information
// if(JSON.stringify(localStorage.getItem(thePet))){
//     thePet = JSON.parse(localStorage.getItem('thePet'))
//     //for debugging 
//     console.log("😱", JSON.parse(localStorage.getItem('thePet')));
//     setInterval(lessHappy, 20000);
//     setInterval(lessFull, 60000);
//     setInterval(lessClean, 60000);
//     setInterval(lessHealth, 60000);
// }else{
//     localStorage.setItem(thePet, JSON.parse("thePet"))
//  } 
//