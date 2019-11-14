//Code taken and altered from here
//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

// a key map of allowed keys
var allowedKeys = {
  67: 'c',
  83: 's',
  52: '4',
  48: '0',
  49: '1',
  50: '2'
};

// The best module's ID
var easterEgg = ['c', 's', '4', '0', '1', '2'];

// a variable to remember the 'position' the user has reached so far.
var easterEggPosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = easterEgg[easterEggPosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    easterEggPosition++;

    // if the last key is reached, activate cheats
    if (easterEggPosition == easterEgg.length) {
      makeToast();
      easterEggPosition = 0;
    }
  } else {
    easterEggPosition = 0;
  }
});

function makeToast() {
  document.body.style.background = "no-repeat bottom right";
  document.body.style.backgroundImage = "url('images/toasty.png')";
  document.body.style.backgroundSize = "500px 500px";
  document.body.style.backgroundAttachment = "fixed";


  var audio = new Audio('audio/toasty.mp3');
  audio.play();
}