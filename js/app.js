// Store the min/max hourly customers, and the average cookies per customer, in object properties.

// Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationInfo = document.getElementById('locations');

let theadElem = document.createElement('thead');
locationInfo.appendChild(theadElem);

let tbodyElem = document.createElement('tbody');
locationInfo.appendChild(tbodyElem);


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

// HEADER FUNCTION
function createTable() {

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
  thTotalElem.textContent = 'Total';
  trElem.appendChild(thTotalElem);
}

let Seattle = new Location('Seattle', 6.3, 65, 23);
let Tokyo = new Location('Tokyo', 1.2, 24, 3);
let Dubai = new Location('Dubai', 3.7, 38, 11);
let Paris = new Location('Paris', 2.3, 38, 20);
let Lima = new Location('Lima', 4.6, 16, 2);

createTable();
Seattle.hourlyCookies();
Tokyo.hourlyCookies();
Dubai.hourlyCookies();
Paris.hourlyCookies();
Lima.hourlyCookies();
Seattle.htmlRender();
Tokyo.htmlRender();
Dubai.htmlRender();
Paris.htmlRender();
Lima.htmlRender();
