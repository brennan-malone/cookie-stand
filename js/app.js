// Store the min/max hourly customers, and the average cookies per customer, in object properties.

// Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

const hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Location(name, cookiesPerCust, maxHourCust, minHourCust, total) {
  this.name = name;
  this.cookiesPerCust = cookiesPerCust;
  this.maxHourCust = maxHourCust;
  this.minHourCust = minHourCust;
  function randCustPerHour() {
    return Math.floor(Math.random() * (maxHourCust - minHourCust) + minHourCust);
  }
  this.totalCookies = 0;
  this.cookiePerHour = [];
  this.total = total;
  function hourlyCookies() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let aveCookie = Math.floor(this.cookiesPerCust * this.randCustPerHour());
      this.cookiePerHour.push(aveCookie)
      this.total += aveCookie;
    }
  };
}
let Paris = new Location('Paris', 2.3, 38, 20);

console.log(Paris);
