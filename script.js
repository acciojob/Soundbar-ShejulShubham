//your JS code here. If required.
const container = document.getElementById("buttons");
const folder = "./sound";
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const stop = "stop";
const fragment = document.createDocumentFragment();

sounds.forEach((sound)=>{
	let button = document.createElement("button");
	button.className = "btn";
	button.src = `${folder}${sound}.mp3`;
	button.textContent = sound;
	fragment.appendChild(button);
})

let button = document.createElement("button");
button.className = "stop";
button.src = `${folder}${stop}.mp3`;
button.textContent = stop;
fragment.appendChild(button);


container.appendChild(fragment);