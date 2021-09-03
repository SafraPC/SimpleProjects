const inputRandomNumber = document.getElementById("inputRandomNumber");
const spanRandomNumberResult = document.getElementById(
  "spanRandomNumberResult"
);
const buttonRandomNumber = document.getElementById("buttonRandomNumber");

buttonRandomNumber.onclick = () => {
  const value = inputRandomNumber.value;
  spanRandomNumberResult.innerText = Math.floor(
    Math.random() * (Number(value) - 0) + 0
  );
};
