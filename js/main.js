let video = document.getElementById('video');
let btn = document.getElementById('play-pause');

function togglePlayPause() {
    if(video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.addEventListener('click',() => togglePlayPause());