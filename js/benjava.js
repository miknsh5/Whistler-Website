$( document ).ready(function() {
 
  $("calculate").click(function( ) {
 
    alert("Thanks for visiting!");
 
  });
 
});

$(function() {
	$( "#accordion" ).accordion();
});

$(document).ready(function() {

    $("#calculate").click(function() {

   
       $("#result").html("total value is::" + parseInt($("#input").val()) * 30);
       

    });
});