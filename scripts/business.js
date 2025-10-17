$(document).ready(function () {
		let errorMessage;
		$("label[for='username']").show().css("display", "inline-block");
		$("input[name='username']").show();
		$("input[name='username']").on(
	"input", function (event) {
			if ($(this).val().trim().length > 25){
					if (!errorMessage){
							errorMessage = $('<div> Name cannot exceed 25 characters. </div>');
							errorMessage.css("color", "#A50044").insertAfter($(this));
					}
					errorMessage.show();
					$(this).css("border-bottom", "3px solid #A50044");
					setTimeout(() => {errorMessage.hide(); $(this).css('border-bottom', "1px solid rgba(0, 64, 156, 0.5)");}, 2000);
			}else{
					if (errorMessage){
							errorMessage.hide();
							$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)");
					}
			}
	}	
		);
		
		$("input[name='username']").on(
		"keydown", function (event) {
				if (event.key === 'Enter' && $(this).val().trim().length < 25 && $(this).val().trim().length > 0){
											$("label[for='telephone']").removeClass('hidden').css('display', 'inline-block');
						$("input[name='telephone']").removeClass('hidden').css('display', 'inline-block');
				}
		} 
		);
		
		$("input[name='telephone']").on(
		"input", function (event) {
				let pattern = /^[\d\s#+*-]{10,20}$/;
				let input = $(this).val().trim();
				console.log(pattern.test(input));
				if (!pattern.test(input)){
						if (!errorMessage){
								console.log("err");
								errorMessage = $("<div>Your phone number should contain atleast 10-20 numbers and any of these: ()-+#* or space </div>");
								errorMessage.css("color", "#A50044").insertAfter($(this));
						}
						errorMessage.show();
						$(this).css('border-bottom', "3px solid #A50044");
						setTimeout(() => {errorMessage.hide(); $(this).css('border-bottom', '1px solid rgba(0, 64, 156, 0.5)');}, 2000);
				}else{
						if(errorMessage){
								errorMessage.hide();
								$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)");
						}
				}
		}
		);
		
}
		);