let body = document.body;

let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let infoEl = document.createElement("div");
let infoEl2 = document.createElement("div");
let infoH1El = document.createElement("h1");
let infoH1El2 = document.createElement("h1");
let pEl = document.createElement("p");
let pEl2 = document.createElement("p");

h1El.textContent = "You've Never Heard of Them";
h2El.textContent = "Music blog for music snobs";
infoH1El.textContent = "Animal Collective";
pEl.textContent =
  "Animal Collective makes some weird music, that on so many levels twists and turns. they sound like what I'm sure was what Brian Wilson's LSD laden thoughts sounded like, each song has Layers upon layers of textures and interweaving melodies, often they compliment or collide with one another, the vocals sometimes harmonious, sometimes screamed, and reminiscent of the aforementioned Beach Boy. A comparison they don't care for. In the early days of the group's music the songs were psychedelic landscapes, that transported the listener to the place where they had intended, in the early era of finger picked guitars, vocal loops, and ambient textures. After this period they introduced more electronic elements such as keyboards, and samples. this led to the more layered sound of the band. The earlier sounds of Animal Collective were at times a bit noisy, and inaccessible for the casual listener, the later albums were more immediate, the albums Centipede Hz, Painting With, and the most recent release Time Skiffs are still true to the layered textures of the past, the vocals are cleaner, and each song takes a short flight, compared to the longer compositions of the past. Avey Tare, and Panda Bear trade off vocal harmonies with point/and counterpoint delivery, swirling in a loop of exuberant joy on tracks like Golden Gal, FloriDada, Dragon Slayer. I've always felt transported when listening to their music. My first introduction to animal collective was their seventh album Strawberry Jam, it took me a few listens to get past the noise elements to find the layered melodies and surrealist lyrics that were all over the record, then the more psychedelic Merriweather Post Pavilion made me a believer. Deciding to jump into the back catalog was both good and bad. There are some gems for sure, and some weirdness, it's all part of the progression the earlier albums that I really enjoyed were Feels, and Sung Tongs. Sung Tongs was the band hitting it's creative stride, while Feels expanded on what Sung Tongs had set in motion.";

infoH1El2.textContent = "The New Pornographers";
pEl2.textContent = "Indie pop that has no shortage of melodies";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(infoH1El);
infoEl.appendChild(pEl);
body.appendChild(infoEl2);
infoEl2.appendChild(infoH1El2);
infoEl2.appendChild(pEl2);

h1El.setAttribute(
  "style",
  "text-align: center; text-decoration: underline; font-size: 40px; text-decoration-color: rgb(123, 255, 255); font-family: cursive; color: rgb(123, 200, 200)"
);
body.setAttribute("style", "background-color: rgb(150, 140, 200);");
h2El.setAttribute("style", "text-align: center; color: rgb(123, 200, 200);");
pEl.setAttribute("style", "font-size: 24px;");
infoH1El.setAttribute("style", "color: rgb(123, 223, 23);");
infoH1El2.setAttribute("style", "color: rgb(123, 223, 23);");
pEl2.setAttribute("style", "font-size: 24px;");
