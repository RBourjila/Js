console.log(document.getElementById("my-id"));

console.log(document.getElementsByClassName("my-class"));

console.log(document.getElementsByTagName("ul")); 

//Permet d'afficher un seul élément de la collection my-class
console.log(document.getElementsByClassName("my-class")[1]);

//Exercice 2

let google = document.getElementById("google-id");
console.log(google.id);

console.log(google.className);

google.textContent="Mon lien vers Google";
console.log(google.textContent);

let classes = document.getElementsByClassName("my-class");
classes[0].textContent = "Première div";
classes[1].textContent = "Deuxième div";
classes[2].textContent = "Troisième div";

//document.querySelector(".google-class").remove()

//Exercice 3 

let p = document.createElement("p");

p.id="newParagraphe";
p.textContent = "Mon paragraphe créé en JS :)";

let myId = document.getElementById("my-id");
p.classList.add("color-red","text-uppercase");
myId.appendChild(p);

console.log(p);

console.log(p.classList);

classes[0].classList.add("text-uppercase");
classes[1].classList.add("bg-green");
classes[2].classList.add("border");

console.log(classes);

// Exercice Evenements / Ecouteur d'evenement, event

// Manière de faire montré par David
let prenom = "Ridwane"
let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent ="Bienvenue " + 
prenom;
h1.addEventListener("click",()=>{
    if(h1.style.color == "gold"){
        h1.style.color ="black";
    } else if (h1.style.color =="black"){
        h1.style.color="red";
    } else {
        h1.style.color="gold";
    }
});

