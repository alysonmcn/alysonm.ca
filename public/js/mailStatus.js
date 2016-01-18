$(document).ready(function() { 
	            
	var contactForm = $('#contact-form');
		
	contactForm.submit(function(e) {
		e.preventDefault();
		
		$.ajax({
			url: '//formspree.io/alysonmcn@gmail.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
	   		error: function() {
	   			$('.sent').addClass('hidden');
	   			$('.error').removeClass('mailHidden');
	   			clearError();
	   			},
	   		success: function() {
	   			$('.sent').removeClass('mailHidden');
	   			$('.sent').removeClass('hidden');
	   			$('.error').addClass('mailHidden');
	   			clearSent();
	   			}
			});
		});
		
		
}); 

function clearError(){
	setTimeout(function() {
		$('.error').addClass('mailHidden');
	}, 2000);
	setTimeout(function() {
		$('.sent').removeClass('hidden');
	}, 3000);
}

function clearSent(){
	setTimeout(function() {
		$('.sent').addClass('mailHidden');
		$('.json').resetForm();
	}, 2000);
}
