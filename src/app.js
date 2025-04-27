import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ['my', 'your'];
let adj = ['great', 'big', 'small'];
let noun = ['tree', 'ocean'];
let domain = ['.com', '.net', '.org', '.us'];

let domainList = document.querySelector("#domainList");

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        let li = document.createElement("li"); // <-- just create it here normally (not for)
        li.textContent = pronoun[i] + adj[j] + noun[k] + domain[l];
        domainList.appendChild(li);

      }
    }
  }
}