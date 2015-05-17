// Automata 0.1 Axiom
// mod 1




$(document).ready(function() {
	// get input
	var raw;
	$("button").click(function() {
		raw = $("textarea").val();
		console.log(raw);
		firstLevel(raw);
	})
	$("textarea").keypress(function(e) {
		if (e.which == 13) {
			raw = $("textarea").val();
			console.log(raw);
			event.preventDefault();
			firstLevel(raw);
		}
	})
	// check first keyword
	function firstLevel(value) {
		if (value.indexOf("open") >= 0) {
			openMod(value);
	    } 
	}
})


// features: usual, where, what, cite, template, calendar, git?, drive?