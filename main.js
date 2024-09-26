// let currentAudio=null;
// function playSound(soundId){
//     if(currentAudio){
//         currentAudio.pause();
        
//     }
//     const audio=document.getElementById(soundId)
//     if(audio){
//         audio.play();
//         currentAudio=audio
//     }
// }

const buttons=document.querySelectorAll('.sound')
let currentAudio=null
buttons.forEach(button=> {
    button.addEventListener('click',()=>{
        const  soundButton=button.getAttribute("sound");
        const audios=document.querySelector(`audio[id=${soundButton}]`);
        if (currentAudio){
            currentAudio.pause()
        }
        audios.play();
        currentAudio=audios;

    })
    
})

