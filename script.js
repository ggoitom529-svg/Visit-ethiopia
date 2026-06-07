function travelTip(){

alert("Travel Tip: Try local Ethiopian food like Injera!");
alert("Travel Tip: Don't forget to cary water during traveling")
alert("Travel Tip: Try ethiopian cultural coffee")

}

function toggleDarkMode(){
document.body.classList.toggle("dark");

}

function showDestination(){

let places = ["Addis Ababa","Lalibela","Simien Mountains", "Aksum","Gondar","Sof omar cave"];

let random = Math.floor(Math.random()*places.length);

document.getElementById("result").innerText = places[random];

}

function searchPlace(){

let input = document.getElementById("searchBar").value.toLowerCase();

let cards = document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let title = cards[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

}

if(title.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

