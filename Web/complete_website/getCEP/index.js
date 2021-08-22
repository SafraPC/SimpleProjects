//declare variables
const searchButton = document.getElementById("searchButton");
const inputCEP = document.getElementById("cepInput");
const form = document.getElementById("cepForm");

//modal variables
const modal = document.getElementById("modal");
const modalMain = document.getElementById("modalMain");
const closeButton = document.getElementById("closeButton");
const modalNiceButton = document.getElementById("modalNiceButton");

//modal config
const openModal = () => {
  modalMain.style.transform = "scaleY(1)";
  modal.style.transform = "scaleY(1)";
};

const closeModal = () => {
  modalMain.style.transform = "scaleY(0)";
  modal.style.transform = "scaleY(0)";
};

closeButton.onclick = () => closeModal();

modalNiceButton.onclick = () => closeModal();

modal.onclick = (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
};

//open modal with cep data inside
const cepView = (data) => {
  //modal vars
  if (data) {
    openModal();
  }
};

//Get values from inputCEP
const getCEP = async () => {
  try {
    const data = await fetch(
      `https://viacep.com.br/ws/${inputCEP.value}/json/`,
      {
        method: "GET",
        mode: "cors",
        cache: "default",
      }
    );
    if (data.status === 200) {
      const respData = await data.json();
      console.log(respData);
      cepView(respData);
      return;
    }
    if (data.status === 400) {
      console.log("CEP Inválido!!");
      return;
    }
    if (data.status === 500) {
      console.log("Servidor em manutenção");
      return;
    }
  } catch (error) {
    console.log("CEP Request Error =>", error);
    return;
  }
};

searchButton.onclick = getCEP;

//cancel form refresh
const handleForm = (event) => {
  event.preventDefault();
};
form.addEventListener("submit", handleForm);

//turn input cep valid.
const maskInput = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};
inputCEP.onchange = (e) => {
  inputCEP.value = maskInput(e.target.value);
};
