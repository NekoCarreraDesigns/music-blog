// declaring the body variable for the document parent node
let body = document.body;
// variables to create page elements
let aEl = document.createElement("a");
let aEl2 = document.createElement("a");
let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let infoEl = document.createElement("div");
let infoEl2 = document.createElement("div");
let infoEl3 = document.createElement("div");
let infoH1El = document.createElement("h1");
let infoH1El2 = document.createElement("h1");
let infoH1El3 = document.createElement("h1");
let imgEl = document.createElement("img");
let imgEl2 = document.createElement("img");
let pEl = document.createElement("p");
let pEl2 = document.createElement("p");
let pElement3 = document.createElement("p");
// text content for the page
h1El.textContent = "You've Never Heard of Them";
h2El.textContent = "Music blog for music snobs";
infoH1El.textContent = "Animal Collective";
pEl.textContent =
  "Animal Collective makes some weird music, that on so many levels twists and turns. they sound like what I'm sure was what Brian Wilson's LSD laden thoughts sounded like, each song has Layers upon layers of textures and interweaving melodies, often they compliment or collide with one another, the vocals sometimes harmonious, sometimes screamed, and reminiscent of the aforementioned Beach Boy. A comparison they don't care for. In the early days of the group's music the songs were psychedelic landscapes, that transported the listener to the place where they had intended, in the early era of finger picked guitars, vocal loops, and ambient textures. After this period they introduced more electronic elements such as keyboards, and samples. this led to the more layered sound of the band. The earlier sounds of Animal Collective were at times a bit noisy, and inaccessible for the casual listener, the later albums were more immediate, the albums Centipede Hz, Painting With, and the most recent release Time Skiffs are still true to the layered textures of the past, the vocals are cleaner, and each song takes a short flight, compared to the longer compositions of the past. Avey Tare, and Panda Bear trade off vocal harmonies with point/and counterpoint delivery, swirling in a loop of exuberant joy on tracks like Golden Gal, FloriDada, Dragon Slayer. I've always felt transported when listening to their music. My first introduction to animal collective was their seventh album Strawberry Jam, it took me a few listens to get past the noise elements to find the layered melodies and surrealist lyrics that were all over the record, then the more psychedelic Merriweather Post Pavilion made me a believer. Deciding to jump into the back catalog was both good and bad. There are some gems for sure, and some weirdness, it's all part of the progression the earlier albums that I really enjoyed were Feels, and Sung Tongs. Sung Tongs was the band hitting it's creative stride, while Feels expanded on what Sung Tongs had set in motion.";

aEl.textContent = "Give them a listen";

infoH1El2.textContent = "The New Pornographers";
pEl2.textContent =
  "Indie pop that has no shortage of melodies, led by A.C. Newman who is the chief songwriter, It is a super group of Canadian indie musicians. Notably Neko Case, Dan Bejar, and keyboardist Kristen Dahle. Alt-country legend Case uses her voice in a more pop style, which is both pleasing, and melodic. Destroyer' Dan Bejar sings a few tracks and writes some songs as well. The band is very tight musically and playful at the same time. Without taking from their influences too much. Having been playing music since 2000 on their first long player Mass Romantic which features one of my favorite songs. Letter From an Occupant, which features lead vocals from Neko Case, is an indie pop classic. The guitars are pure power pop, and the production is very slick, without sounding overproduced. Eight albums in and they area all incredibly consistent, sort of the AC/DC of indie pop. Why mess with a good thing, some folks would say that is bland and uncreative, I say if it works then don't mess with it, bands will often try to experiment with their sound, and it goes horribly wrong, they lose fans, and receive negative criticism that ends up doing more harm than good, then end up going back to what they were doing. Although I did find the addition of synthesizers on Brill Bruisers to be a nice touch.";

infoH1El3.textContent = "Modern Hip-Hop Is Hot Garbage";
pElement3.textContent = "What the hell is this auto tuned mumbling noise!? ";

// adding child elements to the parent node
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(infoH1El);
infoEl.appendChild(imgEl);
infoEl.appendChild(pEl);
infoEl.appendChild(aEl);
body.appendChild(infoEl2);
infoEl2.appendChild(infoH1El2);
infoEl2.appendChild(imgEl2);
infoEl2.appendChild(pEl2);
body.appendChild(infoEl3);
infoEl3.appendChild(infoH1El3);
infoEl3.appendChild(pElement3);
// setting the style for the elements on the page
h1El.setAttribute(
  "style",
  "text-align: center; text-decoration: underline; font-size: 40px; text-decoration-color: rgb(123, 255, 255); font-family: cursive; color: rgb(123, 200, 200)"
);
body.setAttribute("style", "background-color: rgb(150, 140, 200);");
h2El.setAttribute("style", "text-align: center; color: rgb(123, 200, 200);");
pEl.setAttribute("style", "font-size: 24px; font-family: arial;");
infoH1El.setAttribute("style", "color: rgb(191, 223, 23);");
infoH1El2.setAttribute("style", "color: rgb(191, 223, 23);");
infoH1El3.setAttribute("style", "color: rgb(191, 223, 23);");
pEl2.setAttribute("style", "font-size: 24px; font-family: arial;");
pElement3.setAttribute("style", "font-size: 24px; font-family: arial;");
imgEl.setAttribute(
  "src",
  "https://media.pitchfork.com/photos/616f95da483dc8d5efe6a29c/2:1/w_2560%2Cc_limit/AC_Setup2Landscape1V1%2520copy.jpg"
);
imgEl.setAttribute("style", "width: 500px;");
imgEl2.setAttribute(
  "src",
  "https://www.mlive.com/resizer/QHNScbB9pkvTTRt8T9FYQIx2CmQ=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/grpress/entertainment_impact/photo/thenewpornographers-sl062509jpeg-1919c6d7e4068080.jpeg"
);
imgEl2.setAttribute("style", "width: 500px;");
aEl.setAttribute("href", "https://www.spotify.com");
aEl.setAttribute("style", "color: rgb(200, 12, 200); font-size: 24px;");
