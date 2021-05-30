let buttonWC = document.querySelector(".buttonWC");
let buttonEx = document.querySelector(".buttonEx");
let buttonShower = document.querySelector(".buttonShower");
let buttonPrint = document.querySelector(".buttonPrint");
let button1LWater = document.querySelector(".button1LWater");
let buttonLenses = document.querySelector(".buttonLenses");
let buttonHaircut = document.querySelector(".buttonHaircut");
let buttonFeet = document.querySelector(".buttonFeet");
let modalNav = document.querySelector(".print");
let resultsTab = document.querySelector(".results");
let currentDate = document.querySelector(".date");

// Display date WC
buttonWC.addEventListener("click", function () {
  let d = new Date();
  var WClist = document.createElement("div");
  WClist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    "Used the toilet";
  //WClist.style.backgroundColor = "#8EE4AF";
  localStorage.setItem(
    "habitWC",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " " +
      "Used the toilet"
  );
  document.getElementById('health-tracking').appendChild(WClist);
});

// Display (X) date
buttonEx.addEventListener("click", function () {
  let d = new Date();
  var Exlist = document.createElement("div");
  Exlist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Gone to (X)";
  //Exlist.style.backgroundColor = "#97CAEF";
  //Exlist.style.color = "white";
  localStorage.setItem(
    "habitX",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Gone to (X)"
  );
  document.getElementById('health-tracking').appendChild(Exlist);
});

// Shower button
buttonShower.addEventListener("click", function () {
  let d = new Date();
  var Showerlist = document.createElement("div");
  Showerlist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Took a shower";
  //Showerlist.style.backgroundColor = "#CAFAFE";
  //Showerlist.style.color = "black";
  localStorage.setItem(
    "habitShower",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Took a shower"
  );
  document.getElementById('health-tracking').appendChild(Showerlist);
});

// 1L Water button
button1LWater.addEventListener("click", function () {
  let d = new Date();
  var Water1Llist = document.createElement("div");
  Water1Llist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Drank 1L of water";
  //Water1Llist.style.backgroundColor = "#55BCC9";
  //Water1Llist.style.color = "white";
  localStorage.setItem(
    "habitWater",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Drank 1L of water"
  );
  document.getElementById('health-tracking').appendChild(Water1Llist);
});

// Contact Lenses button
buttonLenses.addEventListener("click", function () {
  let d = new Date();
  var Lenseslist = document.createElement("div");
  Lenseslist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Bought Lenses";
  //Lenseslist.style.backgroundColor = "#3FEEE6";
  //Lenseslist.style.color = "white";
  localStorage.setItem(
    "habitLenses",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Bought Lenses"
  );
  document.getElementById('beauty-tracking').appendChild(Lenseslist);
});

// Haircut button
buttonHaircut.addEventListener("click", function () {
  let d = new Date();
  var Haircutlist = document.createElement("div");
  Haircutlist.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Did my haircut";
  //Haircutlist.style.backgroundColor = "#FC4445";
  //Haircutlist.style.color = "white";
  localStorage.setItem(
    "habitHaircut",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Did my haircut"
  );
  document.getElementById('beauty-tracking').appendChild(Haircutlist);
});

// Feet button
buttonFeet.addEventListener("click", function () {
  let d = new Date();
  var FeetList = document.createElement("div");
  FeetList.innerHTML =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    " --> " +
    " Cleaned Feet";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitFeet",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Cleaned Feet"
  );
  document.getElementById('beauty-tracking').appendChild(FeetList);
});

// Fetch items from localStorage
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  for (var x = 0; x < values.length; x++) {
    var results = document.createElement("div");
    results.innerHTML = values[x];
    results.style.backgroundColor = "#8EE4AF";
    results.style.padding = "10px";
    results.style.fontSize = '16px';
    document.getElementById('results-tracked').appendChild(results);
  }
}
resultsTab.innerHTML = allStorage();

// Print Page
function printPage() {
  window.print();
}

// Save and Get values
function clearStorage() {
  let modal = confirm("Are you sure you want to delete your saved habits?");
  if (modal == true) {
    localStorage.clear();
  } else {
  }
}
