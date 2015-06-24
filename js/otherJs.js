// JavaScript Document
gearBarCtr();

$(document).scroll(
function()
{
	gearBarCtr();
});

$(document).ready(
function() 
{
	$('#gearBarUp').click(
	function()
	{
		gearSlideUp()	
	});
	
	$('#gearBarDown').click(
	function()
	{
		gearSlideDown();
	}); 
});