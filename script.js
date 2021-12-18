"use strict";

const videos = [
    {
        "name": "The Nights",
        "url": "https://www.youtube.com/embed/UtF6Jej8yb4",
        "srcId": "UtF6Jej8yb4"
    },
    {
        "name": "Wake me Up",
        "url": "https://www.youtube.com/embed/IcrbM1l_BoI",
        "srcId": "IcrbM1l_BoI"
    },
    {
        "name": "Waiting For Love",
        "url": "https://www.youtube.com/embed/cHHLHGNpCSA",
        "srcId": "cHHLHGNpCSA"
    },
    {
        "name": "Without You",
        "url": "https://www.youtube.com/embed/WRz2MxhAdJo",
        "srcId": "WRz2MxhAdJo"
    },
    {
        "name": "Hey Brother",
        "url": "https://www.youtube.com/embed/6Cp6mKbRTQY",
        "srcId": "6Cp6mKbRTQY"
    },
    {
        "name": "Levels",
        "url": "https://www.youtube.com/embed/_ovdm2yX4MA",
        "srcId": "_ovdm2yX4MA"
    }
]

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const songName = document.getElementById('song-name');
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        videoId: 'UtF6Jej8yb4'
    });
    songName.innerHTML = videos[0].name;
}

var icurrent = 0;
var inext = 1;
var iprev = videos.length - 1;
var listLenght = videos.length;

function setVideo(iv){
    songName.innerHTML = videos[iv].name;
    console.log(videos[iv].srcId);
    player.loadVideoById(videos[iv].srcId);
}

document.getElementById('next').addEventListener('click', ()=>{
    icurrent = inext;
    setVideo(icurrent);
    inext++;
    inext > listLenght - 1 ? inext = 0 : inext;
    iprev++;  
    iprev > listLenght - 1 ? iprev = 0 : iprev;
});

document.getElementById('prev').addEventListener('click', ()=>{
    icurrent = iprev;
    setVideo(icurrent);
    iprev--;
    iprev < 0 ? iprev = listLenght - 1 : iprev;
    inext--;
    inext < 0 ? inext = listLenght - 1 : inext; 
});
// --> End Video Player


