/* Created by Zhang Bokun
 * June/19/2015
 */

// Gear ctr function
function gearBarCtr() 
{
	var currentPosition = $(window).scrollTop();
	var thisEle = null;
	
	var divName = '#gearSlide'
	
	$(divName + ' .gearTry').each(
	function(index, element) 
	{
		var sectionStart = $(element).offset().top;
		var sectionEnd = sectionStart + $(element).height();
		
		if(currentPosition >= sectionStart  && currentPosition < sectionEnd)
		{
			thisEle = element;
			return;
		}
	});
	
	if($(thisEle).hasClass("showGUD") || $(thisEle).hasClass("showGU"))
		{$("#gearBarUp").removeClass("hide");}
	else
		{$("#gearBarUp").addClass("hide");}	
	
	if($(thisEle).hasClass("showGUD") || $(thisEle).hasClass("showGD"))
		{$("#gearBarDown").removeClass("hide");}
	else
		{$("#gearBarDown").addClass("hide");}		
};

function gearSlideUp()
{
	var currentPosition = $(document).scrollTop();
	var thisDiv = null;
	
	$('.gearTry').each(
	function(index, element) 
	{
		var sectionStart = $(element).offset().top;
		var sectionEnd = sectionStart + $(element).height();
		var sectionAve = (sectionStart + sectionEnd)/2;
		
		if(currentPosition >= sectionStart  && currentPosition < sectionEnd)
		{
			if(currentPosition >= sectionAve)
			{
				thisDiv = $(element);
				return;
			}
			else
			{
				thisDiv = $(element).prev();
				return;
			}
		}
	});	
	
	$("html, body").animate( { scrollTop: thisDiv.offset().top + 2 }, "slow");		
}

function gearSlideDown()
{
	var currentPosition = $(document).scrollTop();
	var thisDiv = null;
	
	$('.gearTry').each(
	function(index, element) 
	{
		var sectionStart = $(element).offset().top;
		var sectionEnd = sectionStart + $(element).height();
		
		if(currentPosition >= sectionStart  && currentPosition < sectionEnd)
		{
			thisDiv = $(element).next();
			return;
		}
	});	
	
	$("html, body").animate( { scrollTop: thisDiv.offset().top + 2 }, "slow");
	// Always +2px after transition to ensure quality	
}