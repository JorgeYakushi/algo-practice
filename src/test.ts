import fetch from "node-fetch";

async function login(email: any, password: any) {
  return await fetch(
    "https://hackcheck.woventeams.com/api/v4/breachedaccount/safe@example.com"
  )
    .then((data) => data)
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(error));
}
const test = login("a", "a");
