
// count the number of button of drum
var numberOfDrumButton = document.querySelectorAll('.drum').length;

// for loop through the drum buttons to indentify which buttons get clicked
for ( var i = 0; i < numberOfDrumButton; i++) {

  document.querySelectorAll('.drum')[i].addEventListener('click', function () {

    // getting the innerHTML of the buttons
    var buttonInnerHTML = this.innerHTML;

    //calling the functions to ake sound with the key;
    makeSound(buttonInnerHTML);

    buttonAnimations(buttonInnerHTML);


  });

}

//adding keyboard keypress events to the document ot make sound
document.addEventListener('keypress', function(event) {
   //passing the keyboard event to the makesound functions 
   makeSound(event.key);
   buttonAnimations(event.key);
});

//functions for playing sounds
function makeSound(sound) {
  switch (sound) {
    case "w":
      //we are using construction functions for plyaing the audio file
      var tom1 = new Audio("/sounds/tom-1.mp3");
        tom1.play();
      break;
    case "a":
      //we are using construction functions for plyaing the audio file
      var tom2 = new Audio("/sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
      //we are using construction functions for plyaing the audio file
      var tom3 = new Audio("/sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
      //we are using construction functions for plyaing the audio file
      var tom4 = new Audio("/sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
      //we are using construction functions for plyaing the audio file
      var snare = new Audio("/sounds/snare.mp3");
        snare.play();
    break;
    case "k":
      //we are using construction functions for plyaing the audio file
      var crash = new Audio("/sounds/crash.mp3");
      crash.play();
    break;
    case "l":
      //we are using construction functions for plyaing the audio file
      var kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
    break;
  
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimations(key){
  var activeKey = document.querySelector('.' + key);

  activeKey.classList.add('pressed');

  setTimeout(() => {
    activeKey.classList.toggle('pressed');
  }, "100");

 
}