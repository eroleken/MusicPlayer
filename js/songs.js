class Song{
    
    constructor(id,sanatci,sarkiAdi,resim,sarkisi,sure,seconds){
        this.id=id;
        this.sanatci=sanatci;
        this.sarkiAdi=sarkiAdi;
        this.resim=resim;
        this.sarkisi=sarkisi;
        this.sure=sure;
        this.seconds=seconds;
        
    }
    sarkiTanitim(){
        return this.sarkiAdi+" - "+this.sanatci;
    }
    resmiGoster(){
        return this.resim;
    }
    set sureEkler(surem){
        this.sure=surem;
    }
    cal(){
        this.audioElement.play();
    }
  
}
let songs=new Map();

songs.set(0,new Song(0,"Nüket","Birinci şarkı","img/1.jpeg","mp3/1.mp3",""));
songs.set(1,new Song(1,"Yalın","Bu da geçer mi Sevgilim","img/2.jpeg","mp3/2.mp3",""));
songs.set(2,new Song(2,"Çift","Üçüncü şarkı","img/3.jpeg","mp3/3.mp3",""));
