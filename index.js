console.log("WELCOME TO SPOTIFY")

// variables Intialize
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myProgressBar');
myprogressbar.value = 0;
let gif = document.getElementById('gif');
let previous = document.getElementById('previousPlay');
let next = document.getElementById('nextPlay');
let songname = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: 'Mortals',
        filePath: 'songs/1.mp3',
        coverPath: "covers/1.jpg"
    },
    {
        songName: 'Cielo',
        filePath: 'songs/2.mp3',
        coverPath: "covers/2.jpg"
    },
    {
        songName: 'Invincible',
        filePath: 'songs/3.mp3',
        coverPath: "covers/3.jpg"
    },
    {
        songName: 'My Heart',
        filePath: 'songs/4.mp3',
        coverPath: "covers/4.jpg"
    },
    {
        songName: 'Heroes Tonight',
        filePath: 'songs/5.mp3',
        coverPath: "covers/5.jpg"
    },
    {
        songName: 'Heroes Tonight',
        filePath: 'songs/6.mp3',
        coverPath: "covers/6.jpg"
    },
    {
        songName: 'Invincible',
        filePath: 'songs/7.mp3',
        coverPath: "covers/7.jpg"
    },
    {
        songName: 'Mortals',
        filePath: 'songs/8.mp3',
        coverPath: "covers/8.jpg"
    },
    {
        songName: 'Sakhiyaan',
        filePath: 'songs/9.mp3',
        coverPath: "covers/9.jpg"
    },
    {
        songName: 'Aja Mahi',
        filePath: 'songs/10.mp3',
        coverPath: "covers/10.jpg"
    }
];
songname.forEach((element, i) => {
    element.getElementsByTagName('img')[0].setAttribute('src', songs[i].coverPath);
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        audioElement.pause();
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
})
function makeallPlay() {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById('songInfo').innerText=songs[songIndex].songName; 
    })
})
next.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.getElementById('songInfo').innerText=songs[songIndex].songName;
})
previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.getElementById('songInfo').innerText=songs[songIndex].songName;
})