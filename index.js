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
const NUM_FREELANCERS = 20;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const freelancers = Array.from({length: NUM_FREELANCERS }, genFreelanceObject)
const APP = document.getElementById("app");
const averageRate = getAverageRate();

function genFreelanceObject() {
    const freeObj = {
        name: getRandomItem(NAMES),
        occupation: getRandomItem(OCCUPATIONS),
        rate: Math.floor(
        Math.random() *
        (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min
    }
    return freeObj;
}




function getAverageRate() {
    const total = freelancers.reduce(
        (sum, freelancer) => sum + freelancer.rate, 0
    );
    return total / freelancers.length;

}


const showFreelancer = (obj) => `
<tr>
  <td>${obj.name}</td>
  <td>${obj.occupation}</td>
  <td>$${obj.rate}</td>
</tr>
`;



function FreelancerRows() {
    return freelancers.map(showFreelancer).join("");
}


function showFreeRateAvg() {
  return `
    <h2>
      The average rate is $${averageRate.toFixed(2)}
    </h2>
  `;
}

function render() {
  APP.querySelector("#FreelancerRows").innerHTML =
    FreelancerRows();

    APP.querySelector("#AverageRate").innerHTML = 
    showFreeRateAvg();
}
render();



