//This file is only for validations and other, is only for mock the data and put one in view.
//get mock data from html
const allNames = document.getElementById("names");
const allAges = document.getElementById("ages");

//will populate html
function willPopulateHTML(mymap, name, age) {
  mymap.forEach((item) => {
    const names = document.createElement("p");
    names.innerText = item.label;
    name.appendChild(names);
    //for ages
    const ages = document.createElement("p");
    ages.innerText = item.age;
    age.appendChild(ages);
  });
}

let myData = [];
//populate array with data
for (let i = 0; i < allNames.childElementCount; i++) {
  myData.push({
    label: allNames.children[i].innerText,
    age: allAges.children[i].innerText,
  });
}
//Remove first index of array
myData.shift();
//Data getted with successfull!
//filter example ..  people +18 ages
let more18 = [];
let less18 = [];
myData.filter((item) => {
  if (item.age >= 18) {
    more18.push(item);
  } else {
    less18.push(item);
  }
});

const sectionNameMore18 = document.getElementById("nameMore18");
const sectionAgeMore18 = document.getElementById("ageMore18");
willPopulateHTML(more18, sectionNameMore18, sectionAgeMore18);
const sectionNameLess18 = document.getElementById("nameLess18");
const sectionAgeLess18 = document.getElementById("ageLess18");
willPopulateHTML(less18, sectionNameLess18, sectionAgeLess18);


//same name
let sameName = [];
// const sectionNameMore18 = document.getElementById("nameMore18");
// const sectionAgeMore18 = document.getElementById("ageMore18");
// willPopulateHTML(more18, sectionNameMore18, sectionAgeMore18);


//equal age
let equalAge = [];

// const sectionNameMore18 = document.getElementById("nameMore18");
// const sectionAgeMore18 = document.getElementById("ageMore18");
// willPopulateHTML(more18, sectionNameMore18, sectionAgeMore18);