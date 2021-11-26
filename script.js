function slide(){
    $('#textDiv').slideToggle();
 }
 function bold(){
    $('#textDiv').css({ fontWeight: $('#textDiv').css('font-weight') === '700' ? 'normal' : 'bold' })
 }
 
 function iamblue(){
    $('#textDiv').css({ backgroundColor: $('#textDiv').css('background-color') === 'rgb(0, 191, 255)' ? 'white' : 'yellow' })
 }
 function grown(){
     $("#block").animate({
         width: $("#block").width()*1.5,
         height:  $("#block").height()*1.5
     });
 }
 
 function run() {
    $("#block2").animate({ marginLeft: "+=30px",});
     $("#block2").animate({marginTop: "+=30px" });
 }
 
 function styleTable() {
    var elems = $('table tr');
    elems.each(function(index) {
        $(this).css({ backgroundColor: index % 2 === 0 ? 'orange' : 'red' });
        if (index === elems.length - 1) {
            $(this).css({ color: 'white' });
        }
    });
 }
 
 function auto(){
    var words = ["Bread", "Bagz Bunny", "Boy", "Bad", "Bog", "Cirys", "Command", "Calculator", "Clear", "Coach", "Mother", "Milk", "Mokko", "Muscle", "Mayor", "Jacker", "Jury", "Judge", "Joint", "Jelly", ];
     $("#autocomplete").autocomplete({
         source: words
     });
 
     $.ui.autocomplete.filter = function (array, term) {
         var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
         return $.grep(array, function (value) {
                 return matcher.test(value.label || value.value || value);
         });
     };
 }
 function opacity(){
    $('#imgblock').animate({ opacity: $('#imgblock').css('opacity') - 0.1 }, 0)
    if ($("#imgblock").css("opacity") == 0){
         $("#imgblock").css("opacity", "1");
     }
 }
 
 function mouseopacity(){
     var size = $("#imgblock").css("opacity");
     $("#imgblock").hover(function(){
         console.log(23123);
         $("#imgblock").animate({
             opacity:0.1
         }, 200, function(){});
     }, function(){
         $(this).fadeTo(50, size);
     });
 }