$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
  


function zgor() {
      $("#block").slideToggle(300);
    }
function zhirni() {
	 $("#block").css("font-weight", "bold");
}	
function col() {
	 $("#block").css("background-color", 'rgb(' + (Math.round(Math.random(255, 0) * 255)).toString(10) + ',' + (Math.round(Math.random(255, 0) * 255)).toString(10) + ',' +(Math.round(Math.random(255, 0) * 255)).toString(10) + ')');
}
function styleTable() {
    var elems = $('table tr');
    elems.each(function(index) {
        $(this).css({ backgroundColor: index % 2 === 0 ? 'deepskyblue' : 'yellow' });
        if (index === elems.length - 1) {
            $(this).css({ color: 'white' });
        }
    });
}

function imgproz() {
	if ($("img").css("opacity") > 0.3) 
	{
		$("img").fadeTo("slow",0.3)
	}
else
{
	$("img").fadeTo("slow",1)
}
}