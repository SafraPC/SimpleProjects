//create a mock data

const mockData = [
    {
      label: "Leandro",
      age: 18,
    },
    {
      label: "Beatriz",
      age: 15,
    },
    {
      label: "Junior",
      age: 17,
    },
    {
      label: "Felipe",
      age: 25,
    },
    {
      label: "Larissa",
      age: 30,
    },
    {
      label: "Thiago",
      age: 33,
    },
    {
      label: "Gabriel",
      age: 12,
    },
    {
      label: "Lucas",
      age: 11,
    },
    {
      label: "Beatriz",
      age: 15,
    },
    {
      label: "Felipe",
      age: 18,
    },
    {
      label: "Larissa",
      age: 18,
    },
  ];
  
const myNames = document.getElementById('names')
const myAges = document.getElementById('ages')

mockData.forEach(item=>{
    //for labels
    const names = document.createElement('p');
    names.innerText = item.label;
    myNames.appendChild(names);
    //for ages
    const ages = document.createElement('p');
    ages.innerText = item.age;
    myAges.appendChild(ages);
})
