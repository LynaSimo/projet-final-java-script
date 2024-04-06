var monbuttonform=document.getElementById("1");
var mondiv=document.getElementById("div");
monbuttonform.addEventListener("click",function(){
    

    formulaire=document.createElement("form");
    formulaire.innerHTML='<h2>Mon formulaire</h2><br><label>Nom:</label><input type="text"><br><br><label>Prénom:</label><input type="text"><br><br><label>Age:</label><input type="text"><br><br><label>Message:</label><input type="text"><br><br><input type="submit" value="envoyer">'

    
    var closeButton = document.createElement("button");

    closeButton.textContent = "X";
    closeButton.style.marginLeft = "1400px"; 
    closeButton.style.marginTop = "90px";
    closeButton.addEventListener("click", function() {
        mondiv.innerHTML = ""; 
    });

    formulaire.style.marginLeft="50px";
    

    mondiv.innerHTML="";
    mondiv.appendChild(closeButton);
mondiv.appendChild(formulaire);

});



var monbuttonvideo=document.getElementById("2");
var mondiv=document.getElementById("div");
monbuttonvideo.addEventListener("click",function(){
var vid=document.createElement("iframe");
vid.src="vid.mp4";
mondiv.innerHTML="";
vid.style.width="600px";
vid.style.height="300px";
vid.style.marginLeft="400px";
vid.style.marginTop="160px";
mondiv.appendChild(vid);
});



var monbuttonimage=document.getElementById("3");
var mondiv=document.getElementById("div2");
monbuttonimage.addEventListener("click",function(){
var img=document.createElement("img");
img.src="img.jpg";
mondiv.innerHTML="";
mondiv.appendChild(img);
});


var monbuttonCV=document.getElementById("4");
var mondiv=document.getElementById("div");
monbuttonCV.addEventListener("click",function(){

    mondiv.innerHTML="";
    titre=document.createElement("h1");
    titre.innerHTML="CV";
    titre.style.color="red";
    titre.style.marginLeft="70px";
    mondiv.appendChild(titre);

    nom=document.createElement("h3");
    nom.innerHTML="Boulakhrif Mohammed";
    nom.style.color="green";
    nom.style.marginLeft="100px";
    mondiv.appendChild(nom);

    num=document.createElement("p");
    num.innerHTML="Tel : (514) 557-8799";
    num.style.marginLeft="150px";
    mondiv.appendChild(num);

    courriel=document.createElement("p");
    courriel.innerHTML="Courriel :boulakhrifmohamed89@gmail.com";
    courriel.style.marginLeft="150px";
    mondiv.appendChild(courriel);

    var exp = document.createElement("h2");
    exp.textContent = "Expérience professionnelles";
    exp.style.color="green";
    exp.style.marginLeft="100px";
    mondiv.appendChild(exp);

    var p = document.createElement("p");
    p.textContent = " - Gérant d'un super marché - Fés,Maroc (septembre 2021- juin 2023)";
    p.style.color="orange";
    p.style.fontWeight="bold";
    p.style.marginLeft="150px";
    mondiv.appendChild(p);

    var e=document.createElement("p");
    e.textContent="- Recrutement,formation et supervision du personnel."
    e.style.marginLeft="200px";
    mondiv.appendChild(e);
    
    var a=document.createElement("p");
    a.textContent="- Élaboration des plannings de travail et gestion des horaires."
    a.style.marginLeft="200px";
    mondiv.appendChild(a);

    var f=document.createElement("p");
    f.textContent="- Création d'une atmosphère accueillante et conviviale dans le magasin."
    f.style.marginLeft="200px";
    mondiv.appendChild(f);

    var t=document.createElement("p");
    t.textContent="- Assurer le respect des règles de sécurité alimentaire et de la réglementation en vigueur."
    t.style.marginLeft="200px";
    mondiv.appendChild(t);

    var t=document.createElement("p");
    t.textContent="- Assurer le respect des règles de sécurité alimentaire et de la réglementation en vigueur."
    t.style.marginLeft="200px";
    mondiv.appendChild(t);

    var s=document.createElement("p");
    s.textContent="- Veille à ce que le magasin soit propre, bien rangé et en conformité avec les normes de sécurité."
    s.style.marginLeft="200px";
    mondiv.appendChild(s);

    var q=document.createElement("p");
    q.textContent="- Supervision des caisses et gestion des problèmes liés aux transactions."
    q.style.marginLeft="200px";
    mondiv.appendChild(q);
    

    var s=document.createElement("p");
    s.textContent="- entrepôt KD-SERVICES-Montréal,Canada(novembre à aujoud'hui)"
    s.style.color="orange"
    s.style.fontWeight="bold";
    s.style.marginLeft="150px";
    mondiv.appendChild(s);


    var x=document.createElement("p");
    x.textContent=" - poste: préposé, triage (novembre-janvier)"
    x.style.color="teal";
    x.style.fontWeight="900";
    x.style.marginLeft="200px";
    mondiv.appendChild(x);

    var m=document.createElement("p");
    m.textContent="- trier des boites par leurs codes"
    m.style.marginLeft="230px";
    mondiv.appendChild(m);

    var n=document.createElement("p");
    n.textContent="- vérifier les emplacements des boites"
    n.style.marginLeft="230px";
    mondiv.appendChild(n);


    var ne=document.createElement("p");
    ne.textContent="- poste: Manutentionnaire, production(février à aujoud'hui)";
    ne.style.color="teal";
    ne.style.fontWeight="900";
    ne.style.marginLeft="200px";
    mondiv.appendChild(ne);

    var nea=document.createElement("p");
    nea.textContent="- préparation des commandes";
    nea.style.marginLeft="230px";
    mondiv.appendChild(nea);

    var nsa=document.createElement("p");
    nsa.textContent="- vérification des commandes";
    nsa.style.marginLeft="230px";
    mondiv.appendChild(nsa);


    var k=document.createElement("h2");
    k.textContent="Éducation & Diplômes";
    k.style.color="green";
    k.style.marginLeft="100px";
    mondiv.appendChild(k);


    var l=document.createElement("p");
    l.textContent="Baccalauréat sciences physiques, 2021, Maroc";
    l.style.marginLeft="150px";
    mondiv.appendChild(l);

    var v=document.createElement("p");
    v.textContent="DEC en informatique, spécialisé en programmation web et mobile, Institut Teccart (2023- en cours)";
    v.style.marginLeft="150px";
    mondiv.appendChild(v);

    var g=document.createElement("h2");
    g.textContent="Intérêts et Loisirs";
    g.style.color="green";
    g.style.marginLeft="100px";
    mondiv.appendChild(g);

    var koe=document.createElement("p");
    koe.textContent="jouer au soccer";
    koe.style.marginLeft="150px";
    mondiv.appendChild(koe);

    var koea=document.createElement("p");
    koea.textContent="faire de la pêche";
    koea.style.marginLeft="150px";
    mondiv.appendChild(koea);


    var koeat=document.createElement("p");
    koeat.textContent="natation";
    koeat.style.marginLeft="150px";
    mondiv.appendChild(koeat);



    var gw=document.createElement("h2");
    gw.textContent="langues";
    gw.style.color="green";
    gw.style.marginLeft="100px";
    mondiv.appendChild(gw);

    var koeq=document.createElement("p");
    koeq.textContent="Francais";
    koeq.style.marginLeft="150px";
    mondiv.appendChild(koeq);

    var koeav=document.createElement("p");
    koeav.textContent="arabe";
    koeav.style.marginLeft="150px";
    mondiv.appendChild(koeav);


    var koef=document.createElement("p");
    koef.textContent="anglais";
    koef.style.marginLeft="150px";
    mondiv.appendChild(koef);

});

