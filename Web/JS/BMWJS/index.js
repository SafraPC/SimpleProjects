//Getting Body Element
var body = document.querySelector("body");

//Creating Elements
const createInnerHeight = document.createElement("h1");
const createInnerWidth = document.createElement("h1");
const createPageXOffSet = document.createElement("h1");
const createPageYOffSet = document.createElement("h1");
const createScreenX = document.createElement("h1");
const createScreenY = document.createElement("h1");
const createLocation = document.createElement("h1");
const createDocument = document.createElement("h1");
const createHistory = document.createElement("h1");
const createAllHistorys = document.createElement("h1");
const createScreen = document.createElement("h1");
const createScreenHeight = document.createElement("h1");
const createScreenWidth = document.createElement("h1");

//Scaling elements
body.style.overflow = "scroll";
body.style.width = "5000px";
body.style.height = "5000px";

//Puting Elements in Screen
body.appendChild(createInnerHeight);
body.appendChild(createInnerWidth);
body.appendChild(createPageXOffSet);
body.appendChild(createPageYOffSet);
body.appendChild(createScreenX);
body.appendChild(createScreenY);
body.appendChild(createLocation);
body.appendChild(createDocument);
body.appendChild(createHistory);
body.appendChild(createAllHistorys);
body.appendChild(createScreen);
body.appendChild(createScreenWidth);
body.appendChild(createScreenHeight);

function putInTime() {
  createInnerHeight.innerText = window.innerHeight;
  createInnerWidth.innerText = window.innerWidth;
  createPageXOffSet.innerText = window.pageXOffset;
  createPageYOffSet.innerText = window.pageYOffset;
  createScreenX.innerText = window.myScreenX;
  createScreenY.innerText = window.myScreenY;
  createLocation.innerText = window.location;
  createDocument.innerText = window.document;
  createHistory.innerText = window.history;
  createAllHistorys.innerText = window.history.length;
  createScreen.innerText = window.screen;
  createScreenWidth.innerText = window.screen.width;
  createScreenHeight.innerText = window.screen.height;
}
//In 200ms refresh data in screen
setInterval(() => {
  putInTime();
  console.log("reloaded");
}, 200);
