let currentAudio=null;
function playSound(soundId){
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime=0;
    }
    const audio=document.getElementById(soundId)
    if(audio){
        audio.play();
        currentAudio=audio
    }
}


