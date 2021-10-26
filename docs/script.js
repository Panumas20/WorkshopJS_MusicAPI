const music_Container = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const preBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_Container = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['LALISA', 'SOLO'];
let index = 0;

function loadSongs(songs) {
	title.innerText = `เพลง ${songs}.mp3`;
	cover.src = `cover/${songs}.jpg`;
	audio.src = `music/${songs}.mp3`;
}

loadSongs(songs[index]);

playBtn.addEventListener('click', () => {
	const isPlay = music_Container.classList.contains('play');
	if (isPlay) {
		pauseSong();
	} else {
		playSong();
	}
});
nextBtn.addEventListener('click', () => {
	index++;
	if (index > songs.length - 1) {
		index = 0;
	}
	loadSongs(songs[index]);
	playSong();
});

preBtn.addEventListener('click', () => {
	index--;
	if (index < 0) {
		index = songs.length - 1;
	}
	loadSongs(songs[index]);
	playSong();
});
function playSong() {
	music_Container.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	audio.play();
}
function pauseSong() {
	music_Container.classList.remove('play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	audio.pause();
}
