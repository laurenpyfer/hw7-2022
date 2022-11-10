window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
}); 

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("The new speed is " + video.playbackRate);
}); 

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("The new speed is " + video.playbackRate);
}); 

document.querySelector("#skip").addEventListener("click", function() {
	console.log("First location is " + video.currentTime);
	video.currentTime += 10;
	console.log("The new location is " + video.currentTime)

	if(video.currentTime>=video.duration){
		video.currentTime=0;
		console.log("Going to the beginning of the video");
		console.log("The new location is " + video.currentTime);
	}
}); 
document.querySelector('#mute').addEventListener("click", function() {
	console.log("Mute video")
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute"
	}
	else {
		video.muted = true;
			document.querySelector("#mute").innerHTML="Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Slider in use");
	volume = this.value/100
	video.volume = volume
	document.querySelector("#volume").innerHTML=volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.body.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	document.body.classList.remove("oldSchool")

});

