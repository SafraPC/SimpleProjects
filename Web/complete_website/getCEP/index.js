//declare variables
const searchButton = document.getElementById("searchButton");
const inputCEP = document.getElementById("cepInput");
const form = document.getElementById("cepForm");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
//modal variables
const modal = document.getElementById("modal");
const modalMain = document.getElementById("modalMain");
//Inside modal variables

const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

const closeButton = document.getElementById("closeButton");
const modalNiceButton = document.getElementById("modalNiceButton");
//finish modal variables

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
    document.getElementById("modalTitle").innerText = "Data from: " + data.cep;
    document.getElementById("cepBairro").innerText = "Bairro :" + data.bairro;
    document.getElementById("cepCep").innerText = "CEP: " + data.cep;
    document.getElementById("cepComplemento").innerText =
      "Complemento: " + data.complemento;
    document.getElementById("cepDdd").innerText = "DDD: " + data.ddd;
    document.getElementById("cepGia").innerText = "GIA: " + data.gia;
    document.getElementById("cepIbge").innerText = "IBGE: " + data.ibge;
    document.getElementById("cepLocalidade").innerText =
      "Localidade: " + data.localidade;
    document.getElementById("cepLogradouro").innerText =
      "Logradouro: " + data.logradouro;
    document.getElementById("cepSiafi").innerText = "Siafi: " + data.siafi;
    document.getElementById("cepUf").innerText = "UF: " + data.uf;
    openModal();
  }
};

const createError = (message) => {
  error.innerText = message;
  error.style.display = "block";
};

//Get values from inputCEP
const getCEP = async () => {
  try {
    const rgx = /^[0-9]{5}-[0-9]{3}$/;
    if (rgx.test(inputCEP.value) && loading.style.display === "none") {
      loading.style.display = "block";
      const data = await fetch(
        `https://viacep.com.br/ws/${inputCEP.value}/json/`,
        {
          method: "GET",
          mode: "cors",
          cache: "default",
        }
      );
      loading.style.display = "none";
      if (data.status === 200) {
        const respData = await data.json();
        if (!respData.erro) {
          error.style.display = "none";
          cepView(respData);
        } else {
          createError("CEP not found!");
        }
        return;
      }
      if (data.status === 400) {
        createError("Invalid CEP!!");
        return;
      }
      if (data.status === 500) {
        createError("Server connect fail!");
        return;
      }
    } else {
      createError("Type a right CEP!");
    }
  } catch (error) {
    loading.style.display = "none";
    createError("Request error!");
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
