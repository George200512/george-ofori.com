import {TEMPLATE_ID, PUBLIC_KEY, SERVICE_ID} from "./secrets.js";

$(document).ready(function () {
		let errorMessage, infoLabel, counterLabel;
		emailjs.init(PUBLIC_KEY);
		$(".status-container").hide();
		$("input[name='username']").focus();
		$("input[name='username']").on(
	"input", function (event) {
			if ($(this).val().trim().length > 25){
					if (!errorMessage){
							errorMessage = $('<div style="font-size: 2vh"> Name cannot exceed 25 characters. </div>');
							errorMessage.css("color", "rgba(117, 18, 35)").insertAfter($(this));
					}
					errorMessage.show();
					$(this).css("border", "0.1rem solid rgba(117, 18, 35)");
					setTimeout(() => {errorMessage.hide(); $(this).css('border', "0.1rem solid rgba(0, 64, 147, 1.0)");}, 2000);
			}else{
					if (errorMessage){
							errorMessage.hide();
							$(this).css("border", "0.1rem solid rgba(0, 64, 147, 1.0)");
					}
			}
	}	
		);
		
		$("input[name='username']").on(
		"keydown", function (event) {
				if (event.key === 'Enter' && $(this).val().trim().length < 25 && $(this).val().trim().length > 0){
						event.preventDefault();	
						$("input[name='email']").focus();
				}
		} 
		);
		
		
		$("input[name='email']").on(
		"keydown", function (event) {
			if (event.key === "Enter"){
					event.preventDefault();
								$("textarea[name='message']").focus();
			}
		}
		);
		
		$("textarea[name='message']").on(
		"input", function (event) {
				let input = $(this).val();
				if (!counterLabel){
						counterLabel = $(`<div style='font-size: 2vh;'> ${input.length} / 300 </div>`);
						counterLabel.insertAfter($(this)); 
				}
				counterLabel.html(`<div style="font-size:2vh;"> ${input.length} / 300</div>`);
						if (input.length >= 300){
								counterLabel.css({
										"color": "rgba(117, 18, 35)",
								});
								$(this).css("border", "0.1rem solid rgba(117, 18, 35)");
								setTimeout(() => {$(this).css("border", "0.1rem solid rgba(0, 64, 147, 1.0)"); counterLabel.css("color", "green");}, 2000);			
						}else{
								counterLabel.css({
										"color": "green",
								});
						}
				}
		);
		
		$("textarea[name='message']").on("blur", function () {$(this).css("border", "0.1rem solid rgba(0, 64, 147, 1)");});
		$("textarea[name='message']").on('focus', function () {$(this).css("border-", '0.1rem solid green');});
		
		$("input[name='username']").on("blur", function () {$(this).css("border", "0.1rem solid rgba(0, 64, 147, 1.0)");});
		$("input[name='username']").on('focus', function () {$(this).css("border", '0.1rem solid green');});
		
		$("input[name='email']").on("blur", function () {$(this).css("border", "0.1rem solid rgba(0, 64, 147, 1.0)");});
		$("input[name='email']").on('focus', function () {$(this).css("border", '0.1rem solid green');});
		
		$("input[type='submit']").on("click", function (event) {
				event.preventDefault();
				if ($("textarea[name='message']").val().trim().length === 0){
						if (!infoLabel){
						infoLabel = $(`<div style="font-size:2vh;">Message field can't be empty.</div>`);
						infoLabel.insertAfter($("textarea[name='message']")).css("color", "rgba(117, 18, 35)"); 
				}
				infoLabel.show();
						setTimeout(() => {infoLabel.hide();}, 2000);
				}else{
						if(infoLabel){
								infoLabel.hide();
						}
						$(".message").text("Email is being sent...\nPlease wait.");
						$(".status-container").fadeIn(1500);
						setTimeout(() => {$(".status-container").fadeOut(1500);}, 3000);
						
						emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, $("form"))
						
						.then(response => {	$(".message").text("Email sent.\nWe will get back to you as soon as possible");
						$(".status-container").fadeIn(1500);
						setTimeout(() => {$(".status-container").fadeOut(1500);}, 3000);
								document.querySelectorAll("form").forEach(input => {input.value = "";});
						}
						)
								.catch(error =>{	$(".message").text("Email couldn't be sent.\nPlease try again later.");
						$(".status-container").fadeIn(1500);
						setTimeout(() => {$(".status-container").fadeOut(1500);}, 3000);
								document.querySelectorAll("form").forEach(input => {input.value = "";});
						}
						);
				}
				
		});
		
		$(".status-container .fa-xmark").click(
		function (event){
				$(".status-container").hide();
		}
		);
		
}
		);