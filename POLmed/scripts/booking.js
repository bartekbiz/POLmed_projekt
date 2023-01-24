const params = new URLSearchParams(new URL(window.location.href).search);
fetch("./data/staff.json")
    .then((res) => res.json())
    .then((data) => {
        let spece = [];

        for(var i in data.lekarze) {
            spece = spece.concat(data.lekarze[i]);
        }
        
        let spec = spece.concat(data.polozne, data.pielegniarze)[params.get("id")];

        //document.getElementById("img").src = spec.img;
        document.getElementById("name").innerText = spec.name;
        document.getElementById("spec").innerText = spec.spec;
        document.getElementById("desc").innerText = spec.desc;
});

var minValueToAdd = getTodayRemainingMs();
var maxValueToAdd = 4 * 24 * 60 * 60 * 1000;

const randomDates = [];
for (let i = 0; i < 6; i++) {
    randomDates.push(
    getRandomDate(getRandomInt(minValueToAdd, maxValueToAdd))
    );
}
randomDates.sort();

for (let i = 0; i < 6; i++) {
    document.getElementById(`date${i}`).innerText = randomDates[i];
}

// pass date and purpose
document.onclick = function(e) {
    if(e.target.classList.contains("confirm-booking")) {
        let purposeElement = document.getElementById("cel");
        let purposeElementText = purposeElement.options[purposeElement.selectedIndex].text;

        let dateElement = document.getElementById("data");
        let dateElementText = dateElement.options[dateElement.selectedIndex].text;

        let defaultSelectText = "Kliknij, aby wybrać";
        if (purposeElementText != defaultSelectText && dateElementText != defaultSelectText) {
            window.open("summary.html?cel=" + purposeElementText + "&data=" + dateElementText, "_self");
        }
    }
}

// random date function
function getRandomDate(msToAdd) {
    var randomDate = new Date(new Date().getTime() + msToAdd);
    var yyyy = randomDate.getFullYear();
    var mm = String(randomDate.getMonth() + 1).padStart(2, "0");

    // making sure that weekend date is not returned
    var weekDay = randomDate.getDay();
    if (weekDay == 6) {
    var dd = String(randomDate.getDate() + 2).padStart(2, "0");
    } else if (weekDay == 0) {
    var dd = String(randomDate.getDate() + getRandomInt(2, 6)).padStart(
        2,
        "0"
    );
    } else {
    var dd = String(randomDate.getDate()).padStart(2, "0");
    }

    // making sure that returned hours are between 10:00 and 18:00
    var hh = randomDate.getHours();
    if (hh < 10 || hh > 18) {
    hh = 10 + getRandomInt(0, 8);
    }

    // selecting minutes
    if (msToAdd % 2 == 0) {
    var min = "00";
    } else {
    var min = "30";
    }

    randomDate = yyyy + "." + mm + "." + dd + " - " + hh + ":" + min;
    return randomDate;
}

function getTodayRemainingMs() {
    var today = new Date();
    var tommorrow = new Date();
    tommorrow.setDate(tommorrow.getDate() + 1);
    tommorrow.setHours(0, 0, 0, 0);

    return tommorrow - today;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}