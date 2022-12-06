// Store the min/max hourly customers, and the average cookies per customer, in object properties.

// Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationInfo = document.getElementById('locations');

function Location(name, cookiesPerCust, maxHourCust, minHourCust, total) {
  this.name = name;
  this.cookiesPerCust = cookiesPerCust;
  this.maxHourCust = maxHourCust;
  this.minHourCust = minHourCust;
  this.totalCookies = 0;
  this.cookiePerHour = [];
  this.total = total;
}
Location.prototype.randCustPerHour = function () {
  return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
};

Location.prototype.hourlyCookies = function () {
  let cookieCount = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let aveCookie = Math.floor(this.cookiesPerCust * this.randCustPerHour());
    this.cookiePerHour.push(aveCookie);
    cookieCount += aveCookie;
  }
  this.total = cookieCount;
};

Location.prototype.htmlRender = function () {

  let articleElem = document.createElement('article');
  locationInfo.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  locationInfo.appendChild(h2Elem);

  let ulElem = document.createElement('ul');

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiePerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  locationInfo.appendChild(ulElem);

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.total}`;
  ulElem.appendChild(liElem);
};

let Seattle = new Location('Seattle', 6.3, 65, 23);
let Tokyo = new Location('Tokyo', 1.2, 24, 3);
let Dubai = new Location('Dubai', 3.7, 38, 11);
let Paris = new Location('Paris', 2.3, 38, 20);
let Lima = new Location('Lima', 4.6, 16, 2);

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
