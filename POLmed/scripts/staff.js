fetch("./data/staff.json")
	.then((res) => res.json())
	.then((data) => {
		const trwszyscy = document.querySelector("#trwszyscy");
		const trlekarze = document.querySelector("#trlekarze");
		const trpielegniarze = document.querySelector("#trpielegniarze");
		const trpolozne = document.querySelector("#trpolozne");

		trwszyscy.innerHTML = "";
		trlekarze.innerHTML = "";
		trpolozne.innerHTML = "";
		trpielegniarze.innerHTML = "";

		//I know, I know, not proud of this code but time constraints

		let nlekarzy = 0;
		let npoloznych = 0;

		for(var i in data.lekarze) {
			trlekarze.innerHTML += '<div class="col-md-4 p-3"> \
				<div class="card"> \
					<div class="card-body"> \
						<img class="w-100" src="' + data.lekarze[i].img + '" alt=""/> \
						<h5 class="card-title pt-2">' + data.lekarze[i].name + '</h5> \
						<h6 class="card-subtitle mb-2 text-muted">' + data.lekarze[i].spec + '</h6> \
						<p class="card-text">' + data.lekarze[i].desc + '</p> \
						<a href="booking.html?id=' + i + '" class="btn btn-primary w-100">Zarezerwuj wizytę</a> \
					</div> \
				</div> \
			</div>';
			nlekarzy++;
		}

		for(var i in data.polozne) {
			trpolozne.innerHTML += '<div class="col-md-4 p-3"> \
				<div class="card"> \
					<div class="card-body"> \
						<img class="w-100" src="' + data.polozne[i].img + '" alt=""/> \
						<h5 class="card-title pt-2">' + data.polozne[i].name + '</h5> \
						<h6 class="card-subtitle mb-2 text-muted">' + data.polozne[i].spec + '</h6> \
						<p class="card-text">' + data.polozne[i].desc + '</p> \
						<a href="booking.html?id=' + parseInt(parseInt(nlekarzy)+parseInt(i)) + '" class="btn btn-primary w-100">Zarezerwuj wizytę</a> \
					</div> \
				</div> \
			</div>';
			npoloznych++;
		}

		for(var i in data.pielegniarze) {
			trpielegniarze.innerHTML += '<div class="col-md-4 p-3"> \
				<div class="card"> \
					<div class="card-body"> \
						<img class="w-100" src="' + data.pielegniarze[i].img + '" alt=""/> \
						<h5 class="card-title pt-2">' + data.pielegniarze[i].name + '</h5> \
						<h6 class="card-subtitle mb-2 text-muted">' + data.pielegniarze[i].spec + '</h6> \
						<p class="card-text">' + data.pielegniarze[i].desc + '</p> \
						<a href="booking.html?id=' + parseInt(parseInt(nlekarzy)+parseInt(npoloznych)+parseInt(i)) + '" class="btn btn-primary w-100">Zarezerwuj wizytę</a> \
					</div> \
				</div> \
			</div>';
		}

		trwszyscy.innerHTML += trlekarze.innerHTML;
		trwszyscy.innerHTML += trpolozne.innerHTML;
		trwszyscy.innerHTML += trpielegniarze.innerHTML;
	});

const lekarzeContainer = document.querySelector("#twszyscy");

if(window.location.hash == "#lekarze" || window.location.hash == "#pielegniarze" || window.location.hash == "#polozne") {
		bootstrap.Tab.getOrCreateInstance(document.querySelector(window.location.hash)).show();
}