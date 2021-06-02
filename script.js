let buttonWC = document.querySelector(".buttonWC");
let buttonEx = document.querySelector(".buttonEx");
let buttonShower = document.querySelector(".buttonShower");
let buttonPrint = document.querySelector(".buttonPrint");
let button1LWater = document.querySelector(".button1LWater");
let buttonLenses = document.querySelector(".buttonLenses");
let buttonHaircut = document.querySelector(".buttonHaircut");
let buttonFeet = document.querySelector(".buttonFeet");
let buttonShaved = document.querySelector(".buttonShaved");
let buttonHealthyFood = document.querySelector(".buttonHealthyFood");
let buttonExercise = document.querySelector(".buttonExercise");
let buttonPosture = document.querySelector(".buttonPosture");
let buttonAlcohol = document.querySelector(".buttonAlcohol");
let modalNav = document.querySelector(".print");
let resultsTab = document.querySelector(".results");
let currentDate = document.querySelector(".date");

// HEALTH SECTION

// Display date WC
buttonWC.addEventListener("click", function () {
  setTimeout(displayWC, 1000);
});
function displayWC() {
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
  document.getElementById("health-tracking").appendChild(WClist);
}

// Loader for WC
let anchor = document.getElementById("page-loader");
function loader() {
  setTimeout(function () {
    anchor.style.display = "block";
  }, 0);
  setTimeout(function () {
    anchor.style.display = "none";
  }, 1000);
}

// Display (X) date
buttonEx.addEventListener("click", function () {
  setTimeout(displayEx, 1000);
});
function displayEx() {
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
  document.getElementById("health-tracking").appendChild(Exlist);
}

// Shower button
buttonShower.addEventListener("click", function () {
  setTimeout(displayShower, 1000);
});
function displayShower() {
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
  document.getElementById("health-tracking").appendChild(Showerlist);
}

// 1L Water button
button1LWater.addEventListener("click", function () {
  setTimeout(display1LWater, 1000);
});
function display1LWater() {
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
  document.getElementById("health-tracking").appendChild(Water1Llist);
}

// BEAUTY SECTION

// Contact Lenses button
buttonLenses.addEventListener("click", function () {
  setTimeout(displayLenses, 1000);
});
function displayLenses() {
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
  document.getElementById("beauty-tracking").appendChild(Lenseslist);
}

// Haircut button
buttonHaircut.addEventListener("click", function () {
  setTimeout(displayHaircut, 1000);
});
function displayHaircut() {
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
  document.getElementById("beauty-tracking").appendChild(Haircutlist);
}

// Feet button
buttonFeet.addEventListener("click", function () {
  setTimeout(displayFeet, 1000);
});
function displayFeet() {
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
  document.getElementById("beauty-tracking").appendChild(FeetList);
}

// Shaved button
buttonShaved.addEventListener("click", function () {
  setTimeout(displayShaved, 1000);
});
function displayShaved() {
  let d = new Date();
  var ShavedList = document.createElement("div");
  ShavedList.innerHTML =
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
    " Shaved";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitShaved",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Shaved"
  );
  document.getElementById("beauty-tracking").appendChild(ShavedList);
}

// SPORT SECTION

// Healthy Food button
buttonHealthyFood.addEventListener("click", function () {
  setTimeout(displayHealthyFood, 1000);
});
function displayHealthyFood() {
  let d = new Date();
  var HealthyList = document.createElement("div");
  HealthyList.innerHTML =
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
    " Ate a healthy meal";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitHealthyFood",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Ate a healthy meal"
  );
  document.getElementById("sport-tracking").appendChild(HealthyList);
}

// Exercise button
buttonExercise.addEventListener("click", function () {
  setTimeout(displayExercise, 1000);
});
function displayExercise() {
  let d = new Date();
  var ExerciseList = document.createElement("div");
  ExerciseList.innerHTML =
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
    " Exercised";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitExercise",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Exercised"
  );
  document.getElementById("sport-tracking").appendChild(ExerciseList);
}

// Posture button
buttonPosture.addEventListener("click", function () {
  setTimeout(displayPosture, 1000);
});
function displayPosture() {
  let d = new Date();
  var PostureList = document.createElement("div");
  PostureList.innerHTML =
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
    " Maintained Posture";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitPosture",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Maintained Posture"
  );
  document.getElementById("sport-tracking").appendChild(PostureList);
}

// Alcohol button
buttonAlcohol.addEventListener("click", function () {
  setTimeout(displayAlcohol, 1000);
});
function displayAlcohol() {
  let d = new Date();
  var AlcoholList = document.createElement("div");
  AlcoholList.innerHTML =
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
    " Avoided Alcohol";
  //FeetList.style.backgroundColor = "#FC5900";
  //FeetList.style.color = "white";
  localStorage.setItem(
    "habitAlcohol",
    d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      " Avoided Alcohol"
  );
  document.getElementById("sport-tracking").appendChild(AlcoholList);
}

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
    results.style.fontSize = "16px";
    document.getElementById("results-tracked").appendChild(results);
  }
}
resultsTab.innerHTML = allStorage();

// Print Page
function printPage() {
  window.print();
}

// Save and Get values
function clearStorage() {
  let modal = confirm("Are you sure you'd like to delete your saved habits?");
  if (modal == true) {
    localStorage.clear();
    location.reload();
  } else {
  }
}
