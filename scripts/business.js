import {TEMPLATE_ID, PUBLIC_KEY, SERVICE_ID} from "./secrets.js";

$(document).ready(function () {
		let errorMessage, infoLabel, counterLabel;
		emailjs.init(PUBLIC_KEY);
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
							$(this).css("border-bottom", "1px solid rgba(0, 64, 156, 0.5)").filter(":hover");
					}
			}
	}	
		);
		
		$("input[name='username']").on(
		"keydown", function (event) {
				if (event.key === 'Enter' && $(this).val().trim().length < 25 && $(this).val().trim().length > 0){
						event.preventDefault();
											$("label[for='email']").removeClass('hidden').css('display', 'inline-block');
						$("input[name='email']").removeClass('hidden').css('display', 'block');
						$("input[name='email']").focus();
				}
		} 
		);
		
		
		$("input[name='email']").on(
		"keydown", function (event) {
			if (event.key === "Enter"){
					event.preventDefault();
								$("label[for='message']").css("display","inline-block");
								$("textarea[name='message']").css("display", "block");
								$("textarea[name='message']").focus();
			}
		}
		);
		
		$("textarea[name='message']").on(
		"input", function (event) {
			if (!$("input[name='sendButton']").is(":visible")){
					$("input[type='submit']").show(1500);
			}
				let input = $(this).val().trim();
				if (!counterLabel){
						counterLabel = $(`<div> ${input.length} / 300 </div>`);
						counterLabel.insertAfter($(this)); 
				}
				counterLabel.html(`<div> ${input.length} / 300</div>`);
						if (input.length >= 300){
								counterLabel.css({
										"color": "#A50044",
								});
								$(this).css("border-bottom", "0.2rem solid #A50044");
								setTimeout(() => {$(this).css("border-bottom", "0.2rem solid rgba(0, 64, 156, 0.5)"); counterLabel.css("color", "green");}, 2000);			
						}else{
								counterLabel.css({
										"color": "green",
								});
						}
				}
		);
		
		$("textarea[name='message']").on("blur", function () {$(this).css("border-bottom", "0.2rem solid rgba(0, 64, 156, 0.5)");});
		$("textarea[name='message']").on('focus', function () {$(this).css("border-bottom", '0.2rem solid green');});
		
		$("input[type='submit']").on("click", function (event) {
				event.preventDefault();
				if ($("textarea[name='message']").val().trim().length === 0){
						if (!infoLabel){
						infoLabel = $(`<div>Message field can't be empty.</div>`);
						infoLabel.insertAfter($("textarea[name='message']")).css("color", "#A50044"); 
				}
				infoLabel.show();
						setTimeout(() => {infoLabel.hide();}, 2000);
				}else{
						if(infoLabel){
								infoLabel.hide();
						}
						$("#message").text("Email is being sent...\nPlease wait.").css("display", "inline-block");
						$("#modalBox").fadeIn(1500);
						setTimeout(() => {$("#modalBox").fadeOut(1500);}, 3000);
						
						emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contactForm")
						
						.then(response => {	$("#message").text("Email sent.\nWe will get back to you as soon as possible").css("display", "inline_block");
						$("#modalBox").fadeIn(1500);
						setTimeout(() => {$("#modalBox").fadeOut(1500);}, 3000);
								document.querySelectorAll("#contactForm").forEach(input => {input.value = "";});
						}
						)
						
						.catch(error =>{	$("#message").text("Email couldn't be sent.\nPlease try again later.").css("display", "inline-block");
						$("#modalBox").fadeIn(1500);
						setTimeout(() => {$("#modalBox").fadeOut(1500);}, 3000);
								document.querySelectorAll("#contactForm").forEach(input => {input.value = "";});
						}
						);
				}
				
		});
		
}
		);