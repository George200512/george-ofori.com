$(document).ready(function () {
		let errorMessage, infoLabel;
		$("label[for='username']").show().css("display", "inline-block");
		$("input[name='username']").show().focus();
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
							$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)").filter(":hover").css("border-bottom", "0.2rem solid #006400");
					}
			}
	}	
		);
		
		$("input[name='username']").on(
		"keydown", function (event) {
				if (event.key === 'Enter' && $(this).val().trim().length < 25 && $(this).val().trim().length > 0){
											$("label[for='telephone']").removeClass('hidden').css('display', 'inline-block');
						$("input[name='telephone']").removeClass('hidden').css('display', 'inline-block');
						$("input[name='telephone']").focus();
				}
		} 
		);
		
		$("input[name='telephone']").on(
		"input", function (event) {
				let pattern = /^[\d\s#+*-]{10,20}$/;
				let input = $(this).val().trim();
				if (!pattern.test(input)){
						if (!errorMessage){
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
		
		$("input[name='telephone']").on(
		"keydown", function (event) {
				let input = $(this).val().trim();
				let pattern = /^[\d\s#+*-]{10,20}$/;
				if (event.key === 'Enter') {
						if (pattern.test(input)){
								$("label[for='message']").css("display","inline-block");
								$("textarea[name='message']").css("display", "inline-block");
								$("textarea[name='message']").focus();
						}else{
								if (!errorMessage){
										errorMessage = $("<div> Your phone number should contain atleast 10-20 numbers and any of these: ()-+#* or space  </div>");
										errorMessage.css("color", "#A50044").insertAfter($(this)).show();
										$(this).css("border-bottom", "3px solid #A50044")
										setTimeout(() => {errorMessage.hide();$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)")}, 2000);
								}else{
										errorMessage.css("color", "#A50044").insertAfter($(this)).show();
										$(this).css("border-bottom", "3px solid #A50044")
										setTimeout(() => {errorMessage.hide();$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)")}, 2000);
								}
						}
				}
		}
		);
		
		$("textarea[name='message']").on(
		"input", function (event) {
			if (!$("input[name='sendButton']").is(":visible")){
					$("input[type='button']").show(1500);
			}
				let input = $(this).val().trim();
				if (!infoLabel){
						infoLabel = $(`<div> ${input.length} / 300 </div>`);
						infoLabel.css('color', 'green').insertAfter($(this)); 
				}
				infoLabel.html(`<div> ${input.length} / 300</div>`);
if (input.length === 300)				{
		infoLabel.css("color", "#A50044");
}
				}
		);
		
		
}
		);