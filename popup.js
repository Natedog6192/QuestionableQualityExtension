const studies = [ {name: "d5", link: "https://lichess.org/study/tJq9ZAYX"},
				  {name: "e5", link: "https://lichess.org/study/VpWDItJO"},
				  {name: "e4", link: "https://lichess.org/study/lQO4LLPh"},
				  {name: "Caro", link: "https://lichess.org/study/w3WnOCtF"}
]


document.addEventListener("DOMContentLoaded", function() {

	for (let i = 0; i < studies.length; i++) {
		let study = studies[i];
		document.getElementById("main").innerHTML += ("<button type=\"button\" id=\"" + study.name + "\">" + study.name + "</button>");
	}

	document.getElementById("main").innerHTML += "<div id=\"combined\"></div>";

	var combined_str = "";

	for (let i = 0; i < studies.length - 1; i++) {
		let study = studies[i];
		combined_str += "<button1 type=\"button\" id = \"_" + study.name + "\">"
	}

	let study = studies[studies.length - 1];
	combined_str += "<button2 type=\"button\" id=\"_" + study.name + "\">All</button2>"

	for (let i = 0; i < studies.length - 1; i++) {
		combined_str += "</button1>"
	}

	document.getElementById("combined").innerHTML += combined_str;

	var analysis = document.getElementById("Analysis");
	analysis.addEventListener("click", function() {
		window.open("https://lichess.org/analysis", "_blank");
	});

	for (let i = 0; i < studies.length; i++) {
		let study = studies[i];
		var elem = document.getElementById(study.name);
		elem.addEventListener("click", function() {
			window.open(study.link, "_blank");
		});
		var _elem = document.getElementById("_" + study.name);
		_elem.addEventListener("click", function() {
			window.open(study.link, "_blank");
		});
	}
});