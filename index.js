// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(arr, person) {
  return arr.filter((elem) => elem.toLowerCase() === person.toLowerCase());
}

function fuzzyMatch(arr, person) {
  return arr.filter(
    (elem) => elem[0].toLowerCase() === person[0].toLowerCase()
  );
}

function matchName(arr, person) {
  return arr.filter((elem) => elem.name === person);
}
