const tool=new TOOL(songs);

const progress_bar=document.querySelector(".progress-bar");
const volume_bar=document.getElementById("volume-bar");
const bas=document.getElementById("bas");
const son=document.getElementById("son");
let sarkiResim=document.getElementById("sarkiResim");
let sarkiTanitim=document.getElementById("sarkiTanitim");
let audio=document.getElementById("kilam");



// let id=Number((Math.random()*2).toFixed(0));""" "
window.addEventListener("load",() =>{
    tool.listele();
    tool.musicLoad();
} )

audio.addEventListener("timeupdate",()=> {
    let yeniSure=(audio.currentTime*100/audio.duration);
    progress_bar.setAttribute("value",yeniSure.toString());
})

const ui=new Ui();

audio.addEventListener('ended',() =>{
    console.log("bitti");
    fwrd();
})

tool.resimGoster();
tool.currentSifirla();
audio.play();


function fwrd(){
    tool.plus();
    tool.resimGoster();
    tool.currentSifirla();
    tool.caliyorMu=true;
    tool.play(audio);
    progress_bar.setAttribute("value","0");
    // document.getElementById("progress-bar").setAttribute("value","0");
    // document.getElementById("progress-bar").value="0";
}

function back(){
    tool.ngtf();
    tool.resimGoster();
    tool.caliyorMu=true;
    tool.play(audio);
    // document.getElementById("progress-bar").setAttribute("value","0");
    // document.getElementById("progress-bar").value="0";
}

progress_bar.addEventListener("input",()=> {   
    audio.currentTime=Number(progress_bar.value*audio.duration/100);   
})

audio.addEventListener("loadedmetadata", () =>{
    progress_bar.max=Math.floor(audio.duration);
    son.innerHTML=tool.formatTime(Math.floor(audio.duration));
})

audio.addEventListener("timeupdate",()=> { 
    // document.getElementById("progress-bar").addEventListener("timeupdate",()=> {   
        progress_bar.value=Math.floor(audio.currentTime);
        bas.innerHTML=tool.formatTime(Math.floor(audio.currentTime));

    // if(audio.currentTime==0||audio.duration==0){
    //         progress_bar.value=0;   
    //         progress_bar.setAttribute("value","0");   
    //     }
    //     else{
    //         // let gecis=(audio.currentTime*100/audio.duration);
    //         // progress_bar.setAttribute("value",gecis);
    //         progress_bar.value=Math.floor(audio.currentTime);
    //     }
    })
volume_bar.addEventListener("input",()=> {   
        console.log(volume_bar.value);    
        audio.volume=Number(volume_bar.value/100);  
        tool.volume_bar_value=volume_bar.value;
        
        audio.volume == 0 ? document.getElementById("volume-icon").classList="fa-solid fa-volume-off text-primary my-auto mx-2" : document.getElementById("volume-icon").classList="fa-solid fa-volume-high text-primary my-auto mx-1";
    })

