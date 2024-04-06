var lampeoff=true;
function Lampe(){
    var bouttonr = document.getElementById('b');
    var lampe = document.getElementById('img');
    if(lampeoff){
        lampe.src="mch3oula.png";
        bouttonr.style.backgroundImage="url(tfi.png)";
    }
    else
    {
        lampe.src="mtfya.png";  
        bouttonr.style.backgroundImage="url(ch3l.png)";
    }
    lampeoff=!lampeoff;//pour changer la valeur de true vers false
    
    var s=document.getElementById("a"); //pour le son
    s.play();
}

