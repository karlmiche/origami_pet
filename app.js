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
    // checkHappy(Date.now());
    // checkHungry(Date.now());
    // checkHealth(Date.now());
    // checkClean(Date.now());
}

setInterval(upDate,
1000);

//Check the needs
function checkHappy (currentTime){
    //thePet.happiness is that a lengthy number 
      // number of seconds since pet was happy
      let lastHappy = Math.round((currentTime - thePet.happiness)/1000)
      console.log('Seconds since happy', lastHappy);
      // I reduced the time down to seconds for testing. 
      // When you want to increase this to minutes or hours
      // For Example, Hibernating is trigger at 24h mark
      // if(lastHappy > (60 * 60 * 2)) {...}
      // 60 (seconds) * 60 (minutes) * 24 (hours)
      // The hardest to meet condition needs to go first
      if(lastHappy > 24){
          happy.style.backgroundColor = "red";
          happy.style.width = "68px";
          message.innerText = "Pet is so glum they are hibernating!";
          petHibernate();
      }else if(lastHappy > 18){
          happy.style.backgroundColor = "orange";
          happy.style.width = "136px";
          message.innerText = "Pet is looking really, really sad!";
          //display new status bar width
      }else if(lastHappy > 12){
          console.log("🩰");
          happy.style.backgroundColor = "yellow";
          happy.style.width = "204px";
          message.innerText = "Pet is unhappy... What will you do?";
      }    
  }
//   function checkHungry(currentTime){
//       // number of seconds or since pet was not hungry
//       let lastHungry = Math.round((currentTime - thePet.hunger)/1000)
//       console.log(lastHungry);
//       if(lastHungry > 20){
//           hungry.style.backgroundColor = "red";
//           hungry.style.width = "68px";
//           message.innerText = "Pet is so starved they are hibernating!";
//           petHibernate();
//       }else if(lastHungry > 15){
//           hungry.style.backgroundColor = "orange";
//           hungry.style.width = "136px";
//           message.innerText = "Pet is looking very famished!";
//           //display new status bar width
//       }else if(lastHungry > 10){
//           console.log("Pet is hungry :(");
//           hungry.style.backgroundColor = "yellow";
//           hungry.style.width = "204px";
//           message.innerText = "Pet's stomach is growling audibly!";
//       }    
//   }

//   function checkHealth(currentTime){
//     // number of seconds since pet was healthy
//     let lastHealthy = Math.round((currentTime - thePet.health)/1000)
//     console.log('Seconds since healthy', lastHealthy);
//     if(lastHealthy > 23){
//         healthy.style.backgroundColor = "red";
//         healthy.style.width = "68px";
//         message.innerText = "Pet is sick and fell into a deep sleep!";
//         petHibernate();
//     }else if(lastHealthy > 17){
//         healthy.style.backgroundColor = "orange";
//         healthy.style.width = "136px";
//         message.innerText = "Pet is looking very ill!";
//         //display new status bar width
//     }else if(lastHealthy > 11){
//         console.log("🌊");
//         healthy.style.backgroundColor = "yellow";
//         healthy.style.width = "204px";
//         message.innerText = "Pet looks a little queasy :(";
//     }    
// }


// function checkClean(currentTime){
//     // number of seconds since pet was clean
//     let lastClean = Math.round((currentTime - thePet.clean)/1000)
//     console.log('Seconds since clean', lastClean);
//     if(lastClean > 25){
//         clean.style.backgroundColor = "red";
//         clean.style.width = "68px";
//         message.innerText = "Pet is so filthy they're hibernating!";
//         petHibernate();
//     }else if(lastClean > 20){
//         clean.style.backgroundColor = "orange";
//         clean.style.width = "136px";
//         message.innerText = "Pet smells BAD!";
//         //display new status bar width
//     }else if(lastClean > 5){
//         console.log("🐞");
//         clean.style.backgroundColor = "yellow";
//         clean.style.width = "204px";
//         message.innerText = "Pet is a little smelly 🤢";
//     }    
// }

/************Hibernation Function***********/
function petHibernate () {
    if(thePet.happiness == 10 && thePet.health == 10 && thePet.hunger == 10 && thePet.clean === 10){
        message.innerText = "You did not care for the pet. He is hibernating!";
        ctx.drawImage(petAsleep, 50, 90);
    }
}

/**************JavaScript Animations***************/


// /**********Click Events for Specific Objects*************/


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