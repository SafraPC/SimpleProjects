localStorage.clear();
//clickabe elements
const sobreMim = document.getElementById("sobreMim");
const locaisTrabalhados = document.getElementById("locaisTrabalhados");
const linguagensProgramacao = document.getElementById("linguagensProgramacao");

//screen content that will be change
const title = document.getElementById("title");
const sobreMimContent = document.getElementById("sobreMimContent");
const locaisTrabalhadosContent = document.getElementById(
	"locaisTrabalhadosContent"
);
const linguagensProgramacaoContent = document.getElementById(
	"linguagensProgramacaoContent"
);

//Methods to change screen elements
const inactiveAll = () => {
	sobreMimContent.style.transform = "scaleY(0)";
	linguagensProgramacaoContent.style.transform = "scaleY(0)";
	locaisTrabalhadosContent.style.transform = "scaleY(0)";
};

const fadeIn = () => {
	title.style.transform = "scaleY(1)";
};

const fadeOut = () => {
	title.style.transform = "scaleY(0)";
};

const fadeStructure = ({ event, screen }) => {
	if (localStorage.getItem("lastClicked_screen") === screen) {
		return;
	}
	localStorage.setItem("lastClicked_screen", screen);
	fadeOut();
	inactiveAll();
	setTimeout(() => {
		event();
		fadeIn();
	}, [500]);
};

const setSobreMimScreen = () => {
	fadeStructure({
		event: () => {
			title.innerText = "Um pouco sobre mim...";
			sobreMimContent.style.transform = "scaleY(1)";
		},
		screen: "sobre",
	});
};

const setLocaisScreen = () => {
	fadeStructure({
		event: () => {
			title.innerText = "Locais que trabalhei!";
			locaisTrabalhadosContent.style.transform = "scaleY(1)";
		},
		screen: "locais",
	});
};

const setLinguagensProgramacaoScreen = () => {
	fadeStructure({
		event: () => {
			title.innerText = "Linguagens de Programação!";
			linguagensProgramacaoContent.style.transform = "scaleY(1)";
		},
		screen: "linguagens",
	});
};

//attribuing elements on header items click
sobreMim.onclick = setSobreMimScreen;
locaisTrabalhados.onclick = setLocaisScreen;
linguagensProgramacao.onclick = setLinguagensProgramacaoScreen;

//If nobody click
setTimeout(() => {
	if (!localStorage.getItem("lastClicked_screen")) {
		setSobreMimScreen();
	}
}, 3000);
