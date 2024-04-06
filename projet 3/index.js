var nbdeviner=Math.floor(Math.random()*100)+1;
var nbessaie=0;

function check(){
    devine=parseInt(document.getElementById("devine").value);

    if(isNaN(devine) || devine<1||devine>100){
        document.getElementById("msg").innerHTML = "Veuillez saisir un nombre entre 1 et 100.";
        return; 
    }

    nbessaie++;


    if(devine<nbdeviner)
    {
        document.getElementById("msg").innerHTML="Petit!!!";
    }else if(devine>nbdeviner)
    {
        document.getElementById("msg").innerHTML="Grand!!!";
    }
    else{
        document.getElementById("msg").innerHTML="Bravo ! vous avez deviné le nombre :" +nbdeviner+ " en " +nbessaie +" essaie";
        nbdeviner=Math.floor(Math.random()*100)+1;
        nbessaie=0;
    }
    document.getElementById("devine").value = "";
}