const path = "https://app.hubspot.com/contacts/0123456/deal/654321";
if (path.includes("hubspot")) {
  const data = path.split("/");
  const contactIndex = data.findIndex(
    (item) => item === "contacts" || item === "contact"
  );
  const result = data[contactIndex + 1];
  console.log(result);
}
