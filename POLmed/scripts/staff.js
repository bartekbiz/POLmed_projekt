fetch("../data/staff.json")
  .then((res) => res.json())
  .then((data) => {
    // do stuff with the data
    console.log(data);
  });

const lekarzeContainer = document.querySelector("#twszyscy");

if(window.location.hash == "#lekarze" || window.location.hash == "#pielegniarze" || window.location.hash == "#polozne") {
    bootstrap.Tab.getOrCreateInstance(document.querySelector(window.location.hash)).show();
}
document.onclick = function(e) {
    if(e.target.classList.contains("bookme")) {
        window.open("booking.html?lekarz=" + e.target.parentNode.children[1].innerText + "&spec=" + e.target.parentNode.children[2].innerText, "_self");
    }
}