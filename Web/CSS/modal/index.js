//modal vars
let modal = document.getElementById("modal");
let modalMain = document.getElementById("modalMain");
let closeButton = document.getElementById("closeButton");
let modalButton = document.getElementById("modalButton");

modalButton.onclick = function () {
  modalMain.style.transform = "scale(1)";
  modal.style.transform = "scale(1)";
};

closeButton.onclick = function () {
  modalMain.style.transform = "scale(0)";
  modal.style.transform = "scale(0)";
};

modal.onclick = function (e) {
  if (e.target.id === "modal") {
    modalMain.style.transform = "scale(0)";
    modal.style.transform = "scale(0)";
  }
};
