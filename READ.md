# Origami Pet

## Game Idea
A soothing game with a companion animal with shifting needs, much like the Sims or Tamagotchi. Your origami pet has needs that must be met in real time, and you need to interact with your environment to meet these needs. You need to help your pet thrive by clicking and dragging different environment objects. 

Stretch: If your pet's needs drop below a critical level, the pet will hibernate and you will have to increase all levels of need to a certain level to get the pet back to a waking state.

## Tech Stack
* HTML5
* HTML5 Canvas
* CSS3
* JavaScript

## Wireframes
![](https://i.imgur.com/fnIe2cO.png)
![](https://i.imgur.com/OA7TQJb.jpg)


## MVP Goals
* Needs decrement in real time according to the Date object and if needs reach a certain "level" the pet will "hibernate"
* Needs increment based on specific user action when a user clicks an object
* Users can click elements to meet the pet's needs
    * There are 5-10 elements a user can interact with
    * This might include giving a pet different types of food
    * Or a fun accessory
* "Needs" are a points based system that is routinely checked in a function over time
* LOCAL STORAGE

## Stretch Goals
* Homemaking game assets including game art that is behind the pet on the canvas 
    * The pet is the only image on the canvas
    * Animating the pet so it looks like it is "alive", i.e. a breathing or rocking animation
* Having the environment change color based on the time of day
    * IE dark blue for late PM times and early AM times, gradient colors in between
* Having the pet "fall asleep" or "wake up" using conditional logic for the real time of day
    * Have an animation to convey "waking" or "sleeping"
* Having many options to manipulate the user's environment - for example, different kinds of food or activities that affect "happiness"
* Having different types of user action besides from "draggability"
* Having 10-15 different types of objects a user can manipulate in the environment, like foods, toys, and clothes
* Adding animations or sounds depending on "needs met" value levels
    * Like an animation for the pet being "cleaned" or "fed"
* Using import/export for modularizing functions in JavaScript
* A user can name the pet at the beginning of the game
* REALLY STRETCH GOAL: A user enters positive affirmations for the pet's "happiness" level and the pet can return these user-inputs
* REALLY STRETCH GOAL: anyone in any time zone can play the pet game and it should reflect their "day" or "night"

## Road Blocks
1. We covered "draggability" in one lesson and I am not super familiar with it yet! It would be a learning process.
2. We also briefly covered the Date object, which is what a lot of my game logic would rely on. I would have to quickly learn more about the Date object to see if this type of conditional logic is possible in the way I would like to use it.
3. I don't know YET how to add animations and sounds in JavaScript. 