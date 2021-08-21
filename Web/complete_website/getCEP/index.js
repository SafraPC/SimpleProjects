let searchButton = document.getElementById("searchButton");
let inputCEP = document.getElementById("cepInput");
let form = document.getElementById("cepForm");
//cancel form refresh
const handleForm = (event) => {
  event.preventDefault();
};
form.addEventListener("submit", handleForm);

//Get values from inputCEP

const getCEP = () => {};

searchButton.onclick = getCEP();
