//This file is only for validations and other, is only for mock the data and put one in view.
//get mock data from html
const allNames = [...document.getElementById("names").children];
const allAges = [...document.getElementById("ages").children];

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
allNames.forEach((item, index) => {
  myData.push({ label: item.innerText, 
    age: allAges[index].innerText });
});

//Remove first index of array
myData.shift();

//Data getted with successfull!
//filter example ..  people +18 ages
let more18 = [];
let less18 = [];
myData.forEach((item) => {
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
const sectionSameName = document.getElementById("sameName");
const sectionSameAge = document.getElementById("sameAge");
const duplicatedNames = myData.filter((item,index) => myData.some((value,valueIndex) => 
value.label === item.label && index !== valueIndex));
 willPopulateHTML(duplicatedNames, sectionSameName, sectionSameAge);

//equal age
let equalAge = [];
const sectionEqualName = document.getElementById("equalName");
const sectionEqualAge = document.getElementById("equalAge");
const equalAges = myData.filter((item,index) => myData.some((value,valueIndex) => 
value.age === item.age && index !== valueIndex));
 willPopulateHTML(equalAges, sectionEqualName, sectionEqualAge);
