let body = document.body;

let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let infoEl = document.createElement("div");
let infoH1El = document.createElement("h1");
let pEl = document.createElement("p");

h1El.textContent = "You've Never Heard of Them";
h2El.textContent = "Music blog for music snobs";
infoH1El.textContent = "Animal Collective";
pEl.textContent =
  "Animal Collective makes some weird music, that on so many levels twists and turn. they sound like what I'm sure was what Brian Wilson's LSD laden thoughts sounded like, each song has Layers upon layers of textures and interweaving melodies, often they compliment or collide with one another, the vocals sometimes harmonious, sometimes screamed, and reminiscent of the aforementioned Beach Boy. A comparison they don't care for. In the early days of the groups music the songs were psychedelic landscapes, that transported the listener to the place where they had intended, the era of finger picked guitars, vocal loops, and ambient textures. After this period they introduced more electronic elements such as keyboards, and samples. this led to the more layered sound of the band.";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(infoH1El);
infoEl.appendChild(pEl);

h1El.setAttribute(
  "style",
  "text-align: center; text-decoration: underline; font-size: 40px; text-decoration-color: rgb(123, 255, 255); font-family: cursive; color: rgb(123, 200, 200)"
);
body.setAttribute("style", "background-color: rgb(150, 140, 200);");
h2El.setAttribute("style", "text-align: center; color: rgb(123, 200, 200);");
pEl.setAttribute("style", "font-size: 24px;");
