$(document).ready(function () {
		let errorMessage;
		$('form').show();
		$("label[for='username']").show();
		$("input[name='username']").show();
		$("input[name='username']").on(
	"input", function (event) {
			if ($(this).val().length > 25){
					if (!errorMessage){
							errorMessage = $('<div> Name cannot exceed 25 characters. </div>');
							errorMessage.css("color", "#A50044").insertAfter($(this));
					}
					errorMessage.show();
					$(this).val('');
					setTimeout(() => {errorMessage.hide();}, 2000);
			}else{
					if (errorMessage){
							errorMessage.hide();
					}
			}
	}	
		)
		$("label[name='telephone']").show();
}
		);