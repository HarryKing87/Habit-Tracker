let buttonWC = document.querySelector('.buttonWC');
let buttonEx = document.querySelector('.buttonEx');
let buttonShower = document.querySelector('.buttonShower');
let buttonPrint = document.querySelector('.buttonPrint');
let button1LWater = document.querySelector('.button1LWater');
let resultsTab = document.querySelector('.results');
let currentDate = document.querySelector('.date');

// Display date WC
buttonWC.addEventListener('click', function() {
          let d = new Date();
          var WClist = document.createElement('li');
          WClist.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getFullYear() + " " + "Used the toilet";
          WClist.style.backgroundColor = "lightBlue";
          localStorage.setItem('habitWC', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " Used the toilet");
          document.body.appendChild(WClist);
});

// Display (X) date
buttonEx.addEventListener('click', function() {
          let d = new Date();
          var Exlist = document.createElement('li');
          Exlist.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " " + "Gone to (X)";
          Exlist.style.backgroundColor = "red";
          Exlist.style.color = "white";
          localStorage.setItem('habitX', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " Gone to (X)");
          document.body.appendChild(Exlist);
});

// Shower button
buttonShower.addEventListener('click', function() {
          let d = new Date();
          var Showerlist = document.createElement('li');
          Showerlist.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " " + "Took a shower";
          Showerlist.style.backgroundColor = "yellow";
          Showerlist.style.color = "black";
          localStorage.setItem('habitShower', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " Took a shower");
          document.body.appendChild(Showerlist);
});

// 1L Water button
button1LWater.addEventListener('click', function() {
          let d = new Date();
          var Water1Llist = document.createElement('li');
          Water1Llist.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " " + "Drank 1L of water";
          Water1Llist.style.backgroundColor = "blue";
          Water1Llist.style.color = "white";
          localStorage.setItem('habitWater', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + " " + d.getFullYear() + " Drank 1L of water");
          document.body.appendChild(Water1Llist);
});

// Fetch items from localStorage
function allStorage() {

          var values = [],
              keys = Object.keys(localStorage),
              i = keys.length;
      
          while ( i-- ) {
              values.push( localStorage.getItem(keys[i]) );
          }
          
                    for (var x = 0; x < values.length; x++)
                    {
                              var results = document.createElement('li');
                              results.innerHTML = values[x];
                              document.body.appendChild(results);
                    }
                    
          
      }
      resultsTab.innerHTML = allStorage();


// Print Page
function printPage() {
window.print();
};


// Save and Get values
function clearStorage() {
          let modal = confirm("Are you sure you want to delete the storage?");
          if (modal == true)
          {
                    localStorage.clear();
          }
          else {

          }
};