
$(document).ready(function () {
	$('.rating_urcosme_box div').hide();
	$('.stepTwo').hide();
	$('.review_input_stepTwo').hide();
	
	$('.rating_urcosme_box a').each (function () {
		$(this).on('mouseover', function () {
			$('.rating_urcosme_box div').hide();
			$($(this).attr('href')).show();
		});
		
		$(this).on('click', function () {
			$(this).parent().next().show('.stepTwo');

		});
	});

	
	$('.review_input_link.show').each (function () {
		$(this).next().hide();
		
		$(this).on('click', function () {
			$(this).parent().children().next().next().css("height","auto");
			$(this).hide();
			$(this).next().show();
			
			return false;


		});	
		
	});
	
	$('.review_input_link.hide').each (function () {
		
		$(this).on('click', function () {
			$('.review_effect').css("height","60");
			$(this).prev().show();
			$(this).hide();
			
			return false;

		});	
		
	});
	
	

	
	
	$('.review_optional_input a').each (function () {
		$('.product_overview_detail_content').hide();
		
		
		$(this).on('click', function () {
			$('.product_overview_detail div').hide();
			$($(this).attr('href')).show();
		});
		
	
	});
	
	$('.submitBtn_magenta.next').each (function () {
		$(this).on('click', function () {
			$(this).parent().parent().parent().next().show('.review_input_stepTwo');
			$(this).parent().hide();
			return false;
			
		});
				
		
	});
	
		

	

});








