//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//2. RAW TEXT STRINGS
var storyText ='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

var insertX = ['Willy the Goblin','Big Daddy','Father Christmas']

var insertY = ['the soup kitchen','Disneyland','the White House']

var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
 
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':inserty:',yItem);
        newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name)

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * .07142857) + 'stone';
<<<<<<< HEAD
    var temperature =  Math.round(94 - 32) * .71429 + 'Centigrade';
=======
    var temperature =  Math.round(94 - 32) / 1.8 + 'Centigrade';
>>>>>>> 9fb265873c037adf44573907043ccbf24d9f46ae
    newStory=newStory.replace('94 fahrenheit',temperature)
    newStory=newStory.replace('300 pounds', weight)

  }

  story.textContent = newStory; {
  story.style.visibility = 'visible';
  }

