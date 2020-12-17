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

$(document).ready(function() { 
	            // bind 'myForm' and provide a simple callback function 
	
	$('.json').ajaxForm({
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