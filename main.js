const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = [
    'Willy the Goblin',
    'the soup kitchen',
    'spontaneously combusted'
];
const insertY = [
    'Big Daddy',
    'Disneyland',
    'melted into a puddle on the sidewalk'
];
const insertZ = [
    'Father Christmas',
    'the White House',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {
    console.log("start");
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    const xRegex = /:insertx:/ig;
    const yRegex = /:inserty:/ig;
    const zRegex = /:insertz:/ig;
    const replaceValue = newStory.replace(xRegex, xItem).replace(yRegex, yItem).replace(zRegex, zItem);
    newStory = replaceValue;

    if(customName.value !== '') {
        const name = customName.value;

        const regexName = /Bob/ig;
        const replaceValueName = newStory.replace(regexName, name)
        newStory = replaceValueName;

    }

    if(document.getElementById("uk").checked) {
        const weight = Math.floor(Math.round(300)* 0.071429) + ` stone`;
        const temperature =  Math.floor((Math.round(94) - 32) * 5 / 9) + ` centigrade`;

        const regexWeight = /300(\s|\S)pounds/ig;
        const regexTemperature = /94(\s|\S)fahrenheit/ig;
        const replaceValueCheckedUK = newStory.replace(regexWeight, weight).replace(regexTemperature, temperature);
        newStory = replaceValueCheckedUK;
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
