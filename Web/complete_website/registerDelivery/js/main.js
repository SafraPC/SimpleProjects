const userName = document.getElementById("userName");
const phoneNumber = document.getElementById("phoneNumber");
const cep = document.getElementById("cep");
const street = document.getElementById("street");
const address = document.getElementById("address");
const handleSubmit = document.getElementById("handleSubmit");
const burguer = document.getElementById("burguer");
const salad = document.getElementById("salad");
const all = document.getElementById("all");
const total = document.getElementById("total");
const handleConfirm = document.getElementById("handleConfirm");

//Areas
const registerUser = document.getElementById("registerUser");
const deliveryArea = document.getElementById("deliveryArea");
const verifyButton = document.getElementById("verifyButton");
handleSubmit.onclick = (event) => {
	event.preventDefault();
	if (!userName.value) {
		alert("Insira seu nome!");
		return;
	}
	if (!phoneNumber.value) {
		alert("Insira seu número de telefone!");
		return;
	}
	if (!cep.value) {
		alert("Insira seu CEP!");
		return;
	}
	if (!street.value) {
		alert("Insira um CEP Válido!!");
		return;
	}
	registerUser.style.transform = "scaleY(0)";
	setTimeout(() => {
		registerUser.style.display = "none";
		deliveryArea.style.transform = "scale(1)";
	}, 500);
};

cep.addEventListener("change", (element) => {
	const { value } = element.target;
	(async () => {
		try {
			const response = await fetch(`https://viacep.com.br/ws/${value}/json/`, {
				method: "GET",
				mode: "cors",
				cache: "default",
			});
			if (response.status === 200) {
				const respData = await response.json();

				if (!respData.erro) {
					street.value = respData.logradouro;
					address.value = respData.bairro;
				} else {
					alert("CEP não encontrado!");
				}
				return;
			}
			if (response.status === 400) {
				alert("CEP Inválido");
				return;
			}
			if (response.status === 500) {
				alert("Falha na conexão com o Server!");
				return;
			} else {
				alert("Escreva um CEP Correto!");
			}
		} catch (error) {
			alert("A VPN do IFSP não permite :)");
		}
	})();
});

const calcular = () => {
	const burguerValue = burguer.value * 10;
	const saladValue = salad.value * 14;
	const allValue = all.value * 20;

	const totalValue = burguerValue + saladValue + allValue;
	total.innerText = totalValue ? totalValue + "R$" : "0R$";
};

verifyButton.onclick = calcular;

handleConfirm.onclick = (e) => {
	e.preventDefault();
	alert("Indo para sua casa!");
};
