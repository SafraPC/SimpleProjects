//modal vars
const modal = document.getElementById("modal");
const modalMain = document.getElementById("modalMain");
const closeButton = document.getElementById("closeButton");
const modalButton = document.getElementById("modalButton");
const modalNiceButton = document.getElementById("modalNiceButton");

const openModal = () => {
  modalMain.style.transform = "scaleY(1)";
  modal.style.transform = "scaleY(1)";
};

const closeModal = () => {
  modalMain.style.transform = "scaleY(0)";
  modal.style.transform = "scaleY(0)";
};
modalButton.onclick = () => openModal();

closeButton.onclick = () => closeModal();

modalNiceButton.onclick = () => closeModal();

modal.onclick = (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
};
