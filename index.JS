import axios from "axios"

let Etudiant = {
 prenom:"cheikh",
 nom: 'BARRO',
 age:'24',
 Adrrsse:'Ziguinchor',
 getfullName : () => '${prenom} ${nom}'
};
console.log("Etudiant", Etudiant.getfullName());

const Etude = (e) => {
 return e + e;
};

const monTableau = [123,53,37,3];
console.log(monTableau.map(Etude));
console.log(monTableau.includes("Nouha"));

let prof = {
 nom: "BARRO",
 prenom:"cheikh Nouha",
 nouha:"nouha",
 email:"nouhafallbarro@gmail.com",
 cours:"chimie",
};
const database = {}
database.cours = [];
database.profs =[];
database.etudiants = [];

/* Extraire les donnes dans le tableau*/
const cours = database.cours = [];
const profs = database.profs = [];
const etudiants = database.etudiants = [];

cours.push({
 title:"maths",
 description:"ce cours est une introducttion du cours de mathematique",
 profs:"",
 inscrits:[]
});
 profs.push({
nom:"BARRO",
prenom:"Cheikh Nouha",
email:"nouhafallbarro@gmail.com",
cours:"math"
});
etudiants.push([
  
 {
   "name": "Molecule Man",
   "age": 29,
   "secretIdentity": "Dan Jukes",
   "powers": ["Radiation resistance",
    "Turning tiny",
     "Radiation blast"
   ]
 },
 {
   "name": "Madame Uppercut",
   "age": 39,
   "secretIdentity": "Jane Wilson",
   "powers": [
   "Million tonne punch",
   "Damage resistance",
   "Superhuman reflexes"
   ]
 }
]);
let nou = {
 "name": "Madame Uppercut",
 "age": 39,
 "secretIdentity": "Jane Wilson",
};
let myData = '[1,2]'; 
const parsed = JSON.parse(myData);
console.log(myData);

const myObj = 
{ name: "John",
 age: 31, 
 city: "New York" 
};
const myJSON = JSON.stringify(myObj);
console.log(myObj);

profs.push(nou);
console.log("profs",profs);
console.log("cours",cours);
console.log("etudiants",etudiants);




