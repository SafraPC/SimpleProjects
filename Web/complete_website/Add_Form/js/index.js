const inputName = document.getElementById("inputName");
const inputPeso = document.getElementById("inputPeso");
const inputAltura = document.getElementById("inputAltura");
const inputGordura = document.getElementById("inputGordura");
const buttonSubmit = document.getElementById("buttonSubmit");
const table = document.getElementById("table");
const pacientes = [
	{
		nome: "Jonas",
		peso: 70,
		altura: 185,
		gordura: 30,
		imc: 30,
	},
	{
		nome: "Jonas",
		peso: 70,
		altura: 185,
		gordura: 30,
		imc: 30,
	},
];

const handleSubmit = (e) => {
	e.preventDefault();
	pacientes.forEach((item) => {
		const tr = document.createElement("tr");
		const name = document.createElement("td");
		name.innerText = item.nome;
		tr.appendChild(name);
		const peso = document.createElement("td");
		peso.innerText = item.peso;
		tr.appendChild(peso);
		const altura = document.createElement("td");
		altura.innerText = item.altura;
		tr.appendChild(altura);
		const gordura = document.createElement("td");
		gordura.innerText = item.gordura;
		tr.appendChild(gordura);
		const imc = document.createElement("td");
		imc.innerText = item.imc;
		tr.appendChild(imc);
		table.appendChild(tr);
	});
};
buttonSubmit.onclick = handleSubmit;
