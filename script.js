let body = document.body;

let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let infoEl = document.createElement("div");
let pEl = document.createElement("p");

h1El.textContent = "You've Never Heard of Them";
h2El.textContent = "Music blog for the music snobs of Denver";
pEl.textContent =
  "Animal Collective makes some weird music, that on so many levels twists and turn. they sound like what I'm sure was what Brian Wilson's LSD laden mind, thoughts sounded like";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(pEl);

h1El.setAttribute(
  "style",
  "text-align: center; text-decoration: underline; text-decoration-color: blue;"
);
