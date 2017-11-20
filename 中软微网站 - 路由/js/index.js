$('#navBtn').click(function(){
	
	toggNav();
	
});
function toggNav(){
	if ($('#main').hasClass('navon')){
		$('#main').remove('navon');
		$('#nav').css('visibility','hidden');
	} else {
		$('#main').addClass('navon');
		$('#nav').css('visibility','visible');
	}
}
