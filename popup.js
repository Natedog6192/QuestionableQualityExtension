	const studies = [ {name: "d5", link: "https://lichess.org/study/tJq9ZAYX", chessable: ["https://www.chessable.com/course/39554/", "https://www.chessable.com/course/31529/"]},
				  {name: "e5", link: "https://lichess.org/study/VpWDItJO", chessable: ["https://www.chessable.com/course/18646/", "https://www.chessable.com/course/92500/"], },
				  {name: "e4", link: "https://lichess.org/study/lQO4LLPh", chessable: ["https://www.chessable.com/course/38349/", "https://www.chessable.com/course/51855/"]},
				  {name: "Caro", link: "https://lichess.org/study/w3WnOCtF", chessable: 'null'},
				  {name: "NSCC", link: "https://lichess.org/study/t5JRl4Ha", chessable: 'null'}
]


function attachLinkToId(id, link) {
	document.getElementById(id).addEventListener("click", function() { window.open(link); })
}


document.addEventListener("DOMContentLoaded", function() {

	for (let i = 0; i < studies.length; i++) {
		let study = studies[i];
		if (study.chessable != 'null'){
			document.getElementById("main").innerHTML += "<div class=\"sub-container\" id=\"" + study.name +"sub\"> </div>"
		}
		else {
			document.getElementById("main").innerHTML += ("<button type=\"button\" id=\"" + study.name + "\">" + study.name + "</button>");
		}
	}

	for (let i = 0; i < studies.length; i++) {
		let study = studies[i];
		if (study.chessable != 'null') {
			document.getElementById(study.name+'sub').innerHTML += "<button type=\"button\" class=\"dom\" id=\"" + study.name + "\">" + study.name + "</button><button type=\"button\" class=\"sub\" id=\"" + study.name + "course"+ "\">" + study.name + " course </button>"
		}
	}

	attachLinkToId("Chess com", "https://chess.com/play/online");
	attachLinkToId("Chessable", "https://chessable.com");
	attachLinkToId("Analysis", "https://lichess.org/analysis");

	for (let i = 0; i < studies.length; i++) {
		let study = studies[i];
		attachLinkToId(study.name, study.link);
		if (study.chessable != 'null') 
			document.getElementById(study.name + 'course').addEventListener("click", function() {
				for (let j = 0; j < study.chessable.length; j++) {
					window.open(study.chessable[j])
				}
			})	

	}

	document.getElementById("All?").addEventListener("click", function() {

		for (let i = 0; i < studies.length; i++) {
			let study = studies[i];
			window.open(study.link);
		}
	})
});