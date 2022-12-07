// Store the min/max hourly customers, and the average cookies per customer, in object properties.

// Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const state = {
  locationArray: [],
};

let locationInfo = document.getElementById('locations');

let theadElem = document.createElement('thead');
locationInfo.appendChild(theadElem);

let tbodyElem = document.createElement('tbody');
locationInfo.appendChild(tbodyElem);

let tfootElem = document.createElement('tfoot');
locationInfo.appendChild(tfootElem);

function Location(name, cookiesPerCust, maxHourCust, minHourCust) {
  this.name = name;
  this.cookiesPerCust = cookiesPerCust;
  this.maxHourCust = maxHourCust;
  this.minHourCust = minHourCust;
  this.cookiePerHour = [];
  this.total = 0;
}
Location.prototype.randCustPerHour = function () {
  return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
};

Location.prototype.hourlyCookies = function () {
  let cookieCount = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let aveCookie = Math.floor(this.cookiesPerCust * this.randCustPerHour());
    cookieCount += aveCookie;
    this.cookiePerHour.push(aveCookie);
  }
  this.total = cookieCount;
};

Location.prototype.htmlRender = function () {


  let trElem = document.createElement('tr');
  tbodyElem.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = this.name;
  thElem.scope = 'row';
  trElem.appendChild(thElem);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiePerHour[i]}`;
    thElem.after(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = `${this.total}`;
  trElem.appendChild(tdElem);

};
// PER HOUR CALCULATOR
// function calcPerHourTotal() {
//   let counter = 0;
//   for (let i = 0; i < hoursOfOperation.length; i++) {
//     if (counter !== 0) {
//       perHourTotalArray[i] = counter;
//       counter = 0;
//     }
//     for (let j = 0; j < state.locationArray.length; j++) {
//       counter += state.locationArray[j]['cookiePerHour'][i];
//     }
//   }
// }

// HEADER FUNCTION
function createHeadTable() {

  let trElem = document.createElement('tr');
  theadElem.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.scope = 'col';
  trElem.appendChild(thElem);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let thElem = document.createElement('th');
    thElem.scope = 'col';
    thElem.textContent = `${hoursOfOperation[i]}`;
    trElem.appendChild(thElem);
  }

  let thTotalElem = document.createElement('th');
  thTotalElem.scope = 'col';
  thTotalElem.textContent = 'DAY Total';
  trElem.appendChild(thTotalElem);
}

// FOOTER FUNCTION
function createFootTable() {

  let trElem = document.createElement('tr');
  tfootElem.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'HR Total';
  trElem.appendChild(thElem);

  let largeTotal = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let hourlyTotals = 0;
    for (let j = 0; j < state.locationArray.length; j++){
      hourlyTotals += state.locationArray[j].cookiePerHour[i];
      console.log(largeTotal);
    }
    largeTotal += hourlyTotals;
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hourlyTotals}`;
    thElem.after(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = `${largeTotal}`;
  trElem.appendChild(tdElem);
}

let Seattle = new Location('Seattle', 6.3, 65, 23);
let Tokyo = new Location('Tokyo', 1.2, 24, 3);
let Dubai = new Location('Dubai', 3.7, 38, 11);
let Paris = new Location('Paris', 2.3, 38, 20);
let Lima = new Location('Lima', 4.6, 16, 2);

function renderAll() {
  for (let i = 0; i < state.locationArray.length; i++) {
    state.locationArray[i].hourlyCookies();
    state.locationArray[i].htmlRender();
  }
}

state.locationArray.push(Seattle, Tokyo, Dubai, Paris, Lima);

renderAll();
// calcPerHourTotal();
createHeadTable();
createFootTable();
console.log(state.locationArray[0]);
console.log(state.locationArray[0]['cookiePerHour'][0]);
console.log(state.locationArray.length);
