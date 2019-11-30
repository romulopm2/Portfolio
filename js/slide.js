var slidesPos =[1,1,1];
slideOn=0;
function inicializar(){
  var caminho;
  for(var i=0;i<3;i++){
    caminho = "img/slide/slid"+i+"1.jpg";
    alert(document.getElementById("slid"+i+"").style.backgroundImage);
  }
}
a();
function a() {
b = setInterval(function(){

  for(var i=0;i<3;i++){
    if(slidesPos[i]==3){
      slidesPos[i]=1;
    }else{
      slidesPos[i]++;
    }
  }
    currentSlide(0,slidesPos[0]);    
  
},4000);
}

function currentSlide(elemento,picture) {
opacity=1;
  phase=0;
  slidesPos[elemento-1]=picture;
  var interval;
  var caminho = "img/slide/slid"+elemento+""+picture+".jpg";
  clearInterval(interval);

  interval=setInterval(function(){
      if(phase==0){
        opacity-=0.1;

        for(var i=1;i<=3;i++){

          document.getElementById("slid"+i).style.opacity=opacity;    

        }
        
        if(opacity<=0.1){

          phase=1;
          for(var i=0;i<3;i++){
          caminho = "img/slide/slid"+(i+1)+""+slidesPos[i]+".jpg";

          document.getElementById("slid"+(i+1)).style.backgroundImage = "url('"+caminho+"')";     
          
        }
          //alert(document.getElementById("slid"+elemento).style.backgroundImage);
        }
      }else{
        opacity+=0.1;
        for(var i=1;i<=3;i++){
          document.getElementById("slid"+i).style.opacity=opacity;    
        }  
        if(opacity>=0.9){
          
          clearInterval(interval);
        }
      }
      },25);
  
  clearInterval(b);
  a();
  
   
}
function currentSlide2(elemento,picture) {
    var caminho = "img/slide/slid"+elemento+""+picture+".jpg";
    
    
    document.getElementById("slid"+elemento).style.backgroundImage = "url('"+caminho+"')"; 
   
}

function tt() {
  opacity=1;
  phase=0;
  var caminho = "img/slide/slid"+elemento+""+picture+".jpg";
  interval=setInterval(function(){
      if(phase==0){
        opacity-=0.1;
        document.getElementById("slid"+elemento).style.opacity=opacity;    
        if(opacity==1){
          phase=1;
          document.getElementById("slid"+elemento).style.backgroundImage = "url('"+caminho+"')"; 
        }
      }else{
        opacity+=0.1;
        document.getElementById("slid"+elemento).style.opacity=opacity;    
        if(opacity==1){
          clearInterval(interval);
        }
      }
      },1000);
}