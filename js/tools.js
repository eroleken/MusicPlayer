class TOOL{
    constructor(songs){
        this.songs=songs;
        this.id=0;
        this.caliyorMu=false;
        this.currentZaman=0;
        this.mute=false;
        this.volume_bar_value;
    }
    
    resimGoster(){
        sarkiResim.setAttribute("src",tool.songs.get(tool.id).resim);
        sarkiTanitim.innerHTML=tool.songs.get(tool.id).sarkiTanitim();
    }

    formatTime(seconds){
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
            .filter(a => a)
            .join(':')
    }

    listele(){
        this.songs.forEach(
                    x =>{
                    const audioElement=new Audio(x.sarkisi);
                    audioElement.onloadedmetadata = function() {
                    x.seconds=audioElement.duration.toFixed(0);
                    x.sure=tool.formatTime(audioElement.duration.toFixed(0));

                    let sarki=
                        `<li class="list-group-item d-flex justify-content-between" onclick="tool.sarkiGetir(this)">
                        <span>${x.sarkiTanitim()}</span><span class="sure" id=${x.id}>${x.sure}</span></li>`
                    document.getElementById("sarkilar").insertAdjacentHTML("beforeend",sarki);
    }}
    ) }
      
    sarkiGetir(eleman){

        let k=document.querySelector("#sarkilar .ative");
        if (k!=null){
            k.classList.remove("ative");}
    
        eleman.classList.add("ative");
        this.id=Number(eleman.querySelector(".sure").id);
        this.play(audio);   
        this.resimGoster();
    }
         
    play(audio){
        this.caliyorMu=!this.caliyorMu;
        if(this.caliyorMu==true){
            audio.currentTime=this.currentZaman;
            audio.play();
            document.getElementById("played").classList.add("fa-circle-pause");
            document.getElementById("played").classList.remove("fa-circle-play");

        }
        else{
            audio.pause();
            this.currentZaman=audio.currentTime;
            if(progress_bar.getAttribute("value")==NaN){
                progress_bar.setAttribute("value",audio.currentTime);   
            }
            document.getElementById("played").classList.remove("fa-circle-pause");
            document.getElementById("played").classList.add("fa-circle-play");
        }       
    }
    
    plus(){
        this.id=(this.id<this.songs.size-1) ? (this.id+1) : 0;
        this.musicLoad();

    }
    currentSifirla(){
        audio.currentTime=0;
    }
    
    ngtf(){
        this.id=(this.id>0)?(this.id-1):(this.songs.size-1);
        this.musicLoad();
    }

    volume(){
        this.mute=!this.mute;

        if(this.mute==true){
            document.getElementById("volume-icon").classList="fa-solid fa-volume-off text-primary my-auto ms-1"
            audio.volume=0;
            volume_bar.value=0;
        }
        else{
            document.getElementById("volume-icon").classList="fa-solid fa-volume-high text-primary my-auto ms-1"
            volume_bar.value=this.volume_bar_value;
            audio.volume=Number(volume_bar.value/100);  
            
        }
    }
    musicLoad(){
        audio.src=songs.get(this.id).sarkisi;
        audio.addEventListener("loadeddata",()=> {
            son.innerHTML=tool.formatTime(audio.duration.toFixed(0));
        })
    }
}