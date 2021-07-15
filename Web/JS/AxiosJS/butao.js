const butao = document.getElementById("butao");
const failOver = new FailOver("https://httpbin.org/get", "get");
butao.addEventListener("click", failOver.makeRequest);
