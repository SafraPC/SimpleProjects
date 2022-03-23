const inputName = document.getElementById("inputName");
const inputPeso = document.getElementById("inputPeso");
const inputAltura = document.getElementById("inputAltura");
const inputGordura = document.getElementById("inputGordura");
const buttonSubmit = document.getElementById("buttonSubmit");
const table = document.getElementById("table");

const handleSubmit = (e) => {
	e.preventDefault();

	const tr = document.createElement("tr");
	const name = document.createElement("td");
	name.innerText = inputName.value;
	tr.appendChild(name);
	const peso = document.createElement("td");
	peso.innerText = inputPeso.value;
	tr.appendChild(peso);
	const altura = document.createElement("td");
	altura.innerText = inputAltura.value;
	tr.appendChild(altura);
	const gordura = document.createElement("td");
	gordura.innerText = inputGordura.value;
	tr.appendChild(gordura);
	/**
	 * : Peso ÷ (altura x altura)
	 */
	const imc = document.createElement("td");
	const imcResult = inputPeso.value / (inputAltura.value * inputAltura.value);
	imc.innerText = imcResult.toFixed(2);
	tr.appendChild(imc);
	table.appendChild(tr);
};
buttonSubmit.onclick = handleSubmit;
