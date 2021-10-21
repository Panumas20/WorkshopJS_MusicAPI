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
let index = 1;

function loadSongs(songs) {
	title.innerText = `เพลง ${songs}.mp3`;
	cover.src = `cover/${songs}.jpg`;
	audio.src = `music/${songs}.mp4`;
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
