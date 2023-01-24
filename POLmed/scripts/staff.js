fetch("./data/staff.json").then((res) => res.json()).then((data) => {
	if(window.location.hash == "#lekarze" || window.location.hash == "#pielegniarki" || window.location.hash == "#polozne") {
		bootstrap.Tab.getOrCreateInstance(document.querySelector(window.location.hash)).show();
	}
	
	const trwszyscy = document.querySelector("#trwszyscy");
	const trlekarze = document.querySelector("#trlekarze");
	const trpielegniarki = document.querySelector("#trpielegniarki");
	const trpolozne = document.querySelector("#trpolozne");

	//I know, I know, not proud of this code but time constraints

	let nlekarzy = 0;
	let npoloznych = 0;

	trlekarze.innerHTML = "";
	trpolozne.innerHTML = "";
	trpielegniarki.innerHTML = "";

	for(var i in data.lekarze) {
		let lekarze = "";
		lekarze += "<h3>" + i + "</h3>";

		for(var j in data.lekarze[i]) {
			lekarze += '<div class="col-md-6 p-3"> \
				<div class="card"> \
					<div class="card-body"> \
						<img class="w-100" src="' + data.lekarze[i][j].img + '" alt=""/> \
						<h5 class="card-title pt-2">' + data.lekarze[i][j].name + '</h5> \
						<h6 class="card-subtitle mb-2 text-muted">' + data.lekarze[i][j].spec + '</h6> \
						<p class="card-text">' + data.lekarze[i][j].desc + '</p> \
						<a href="booking.html?id=' + nlekarzy + '" class="btn btn-primary w-100">Zarezerwuj wizytę</a> \
					</div> \
				</div> \
			</div>';
			nlekarzy++;
		}
		trlekarze.innerHTML += lekarze;
	}

	for(var i in data.polozne) {
		trpolozne.innerHTML += '<div class="col-md-6 p-3"> \
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

	for(var i in data.pielegniarki) {
		trpielegniarki.innerHTML += '<div class="col-md-6 p-3"> \
			<div class="card"> \
				<div class="card-body"> \
					<img class="w-100" src="' + data.pielegniarki[i].img + '" alt=""/> \
					<h5 class="card-title pt-2">' + data.pielegniarki[i].name + '</h5> \
					<h6 class="card-subtitle mb-2 text-muted">' + data.pielegniarki[i].spec + '</h6> \
					<p class="card-text">' + data.pielegniarki[i].desc + '</p> \
					<a href="booking.html?id=' + parseInt(parseInt(nlekarzy)+parseInt(npoloznych)+parseInt(i)) + '" class="btn btn-primary w-100">Zarezerwuj wizytę</a> \
				</div> \
			</div> \
		</div>';
	}

	trwszyscy.innerHTML = trlekarze.innerHTML;
	trwszyscy.innerHTML += "<h3>Położne</h3>" + trpolozne.innerHTML;
	trwszyscy.innerHTML += "<h3>Pielęgniarki</h3>" + trpielegniarze.innerHTML;
});