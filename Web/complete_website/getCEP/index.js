//declare variables
const searchButton = document.getElementById("searchButton");
const inputCEP = document.getElementById("cepInput");
const form = document.getElementById("cepForm");
//cancel form refresh
const handleForm = (event) => {
  event.preventDefault();
};
form.addEventListener("submit", handleForm);

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
