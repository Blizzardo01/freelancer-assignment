/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 10;
const fre
const APP = document.getElementById("app");

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function genFreelanceObject() {
    const freeObj = {
        name: getRandomItem(NAMES),
        occupation: getRandomItem(OCCUPATIONS),
        price_range: getRandomItem(PRICE_RANGE)
    }
    NUM_FREELANCERS.push(freeObj);
    console.log(NUM_FREELANCERS);
    return freeObj;
}




function getAverageRate() {

}


const showFreelancer = (obj) => {
    return `
<tr>
<td>${obj.name}</td
<td>${obj.occupation}</td>
<td>${obj.price_range}</td>
</tr>
`}



function FreelancerRows() {
    for (let i = 0; i < NUM_FREELANCERS.length(); i++) {
        let newTable = "";
    }
}


function showFreeRateAvg() {

}

function render() {
    APP.querySelector("#FreelancerRows").replaceWith(...NUM_FREELANCERS);
}
render();



