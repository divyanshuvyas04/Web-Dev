//vars initialised
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


//text content
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy","Father Christmas"];

let y = "the soup kitchen, Disneyland, the White House";
let insertY = y.split(",");

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


//event listener
randomize.addEventListener('click', result);

function result() {
  let itemX = randomValueFromArray(insertX);
  let itemY = randomValueFromArray(insertY);
  let itemZ = randomValueFromArray(insertZ);
  
  let newStory = storyText;
  
  newStory = newStory.replaceAll(":insertx:",itemX);
  newStory = newStory.replaceAll(":inserty:",itemY);
  newStory = newStory.replaceAll(":insertz:",itemZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', customName.value);
  }

  if(document.getElementById("uk").checked) {
    const weight = String(Math.round(300/14)) + "stones";
    const temperature =  String(Math.round((94-32)*5/9)) + "celsius";
    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}