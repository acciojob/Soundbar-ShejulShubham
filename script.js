//your JS code here. If required.
const container = document.getElementById("buttons");
const folder = "./sound";
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const stop = "stop";
const fragment = document.createDocumentFragment();

sounds.forEach((sound)=>{
	const audio = document.createElement("audio");
	audio.id = sound;
	audio.src = `${folder}${sound}.mp3`;
	audio.preload = "auto";

	document.body.appendChild(audio);
	
	let button = document.createElement("button");
	button.className = "btn";
	button.textContent = sound;

	button.addEventListener("click", ()=>{
		stopSound();
		const e = document.getElementById(sound);
		e.currentTime = 0;
		const p = e.play();
	})	
	
	fragment.appendChild(button);
})

let button = document.createElement("button");
button.className = "stop";
button.textContent = stop;
button.addEventListener("click", stopSound());
fragment.appendChild(button);


container.appendChild(fragment);

function stopSound(){
	sounds.forEach((sound)=>{
		const e = document.getElementById(sound);
		if(!e) return;
		e.pause();
		e.currentTime = 0;
	})
}



