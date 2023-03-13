let p0 = 1000;
let increasePercentage = 0.02;
let additionalInhabitants = 50;
let targetPopulation = 1200;
let years = 0;

while (p0 < targetPopulation) {
  p0 = p0 + p0 * increasePercentage + additionalInhabitants;
  years++;
}

console.log(years);
