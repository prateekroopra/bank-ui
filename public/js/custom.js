

jQuery(document).ready(function(){
    jQuery("#search").click(function(){
		 jQuery(this).toggleClass('addforsearch');
         jQuery("#searchtoares").slideToggle('slow');
    });
	
	setTimeout(function() {
            $(".bannertxt1").addClass('startanimate1');			
    },1000);
	setTimeout(function() {
            $(".bannertxt2").addClass('startanimate2');			
    },2000);
	setTimeout(function() {
            $(".bannertxt3").addClass('startanimate3');			
    },3000);
});