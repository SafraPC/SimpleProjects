//Generage random emails
// console.log(Math.random().toString(36).substr(2, 15));
function emailGenerator() {
  let text = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text + "@gmail.com";
}

console.log(emailGenerator());
