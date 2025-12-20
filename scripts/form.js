
import {PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from "./secrets.js";

$(document).ready(
function (event){
		emailjs.init(PUBLIC_KEY);
		let errorMessageForUsername, errorMessageForEmail, errorMessageForMessage, counter, errorMessageForSubmit;
		
		$("#username").on("input", 
		function (event){
				let input = $(this).val();
				if (!errorMessageForUsername){
						errorMessageForUsername = $("<p style='font-size:1rem; color: var(--barca-red);font-weight:bold'> Username cannot exceed 25 characters. </p>");
							 errorMessageForUsername.insertAfter($(this).parent());
						if (input.length > 25){
								errorMessageForUsername.show();
								$($(this).parent()).addClass("shake");
								setTimeout(()=>{errorMessageForUsername.hide(); $($(this).parent()).removeClass("shake")}, 1000);
						}else{
							 errorMessageForUsername.hide();
								$($(this).parent()).removeClass("shake");
						}
				}else{
						if (input.length > 25){
								$($(this).parent()).addClass("shake");
								 errorMessageForUsername.show();
								setTimeout(()=>{errorMessageForUsername.hide(); $($(this).parent()).removeClass("shake");}, 1000);
						}else{
								$(errorMessageForUsername).hide();
								$($(this).parent()).removeClass("shake");
						}
				}
		}
		);
		
		$("#email").on("input", 
		function (event){
				if (!errorMessageForEmail){
						errorMessageForEmail = $("<p style='font-size:1rem; color: var(--barca-red);font-weight:bold'> Email not valid </p>");
							 errorMessageForEmail.insertAfter($(this).parent());
						if (!this.checkValidity()){
								errorMessageForEmail.show();
								$($(this).parent()).addClass("shake");
								setTimeout(()=>{errorMessageForEmail.hide(); $($(this).parent()).removeClass("shake")}, 2000);
						}else{
							 errorMessageForEmail.hide();
								$($(this).parent()).removeClass("shake");
						}
				}else{
						if (!this.checkValidity()){
								$($(this).parent()).addClass("shake");
								 errorMessageForEmail.show();
								setTimeout(()=>{errorMessageForEmail.hide(); $($(this).parent()).removeClass("shake");}, 2000);
						}else{
								$(errorMessageForEmail).hide();
								$($(this).parent()).removeClass("shake");
						}
				}
		}
		);
		
		$("#message").on("input", 
		function (event){
				let inputLength = $(this).val().length;
				if (!counter){
				counter = $(`<p style='font-size:1rem; color: var(--barca-blue);font-weight:bold'> ${inputLength}/300 </p>`);
				counter.insertAfter($(this).parent());
				}else{
						counter.text(`${inputLength}/300`);
				}
				
				if (!errorMessageForMessage){
						errorMessageForMessage = $("<p style='font-size:1rem; color: var(--barca-red);font-weight:bold'> Message cannot exceed 300 characters</p>");
							 errorMessageForMessage.insertAfter($(this).parent());
						if (inputLength > 300){
								errorMessageForMessage.show();
								counter.hide();
								$($(this).parent()).addClass("shake");
								setTimeout(()=>{errorMessageForMessage.hide(); $($(this).parent()).removeClass("shake")}, 2000);
						}else{
							 errorMessageForMessage.hide();
								$($(this).parent()).removeClass("shake");
								counter.show();
						}
				}else{
						if (inputLength > 300){
								$($(this).parent()).addClass("shake");
								 errorMessageForMessage.show();
								counter.hide();
								setTimeout(()=>{errorMessageForMessage.hide(); $($(this).parent()).removeClass("shake");}, 2000);
						}else{
								$(errorMessageForMessage).hide();
								$($(this).parent()).removeClass("shake");
								counter.show();
						}
				}
		}
		);
		
		$(".hire-form").on("submit", function (event) {
				event.preventDefault();
				
				let inputLength = $("#message").val().length;
				if (!errorMessageForSubmit){
						errorMessageForSubmit = $("<p style='font-size:1rem; color: var(--barca-red);font-weight:bold'> Message field cannot be empty.</p>");
							 errorMessageForSubmit.insertAfter($("#message").parent());
				if (inputLength < 1){
						errorMessageForSubmit.show();
								$($("#message").parent()).addClass("shake");
								setTimeout(()=>{errorMessageForSubmit.hide(); $($("#message").parent()).removeClass("shake")}, 2000);
				}else{
						errorMessageForSubmit.hide();
						let username = $("#username").val();
				let email = $("#email").val();
				let message = $("#message").val();
				
				$(".email-status").css("display", "flex");
				$(".status-icon").addClass("fa-spinner").addClass("fa-spin").css("color", "rgba(0, 65, 152, 1)");
				$(".status").text("Sending...");
				
				emailjs.send(SERVICE_ID, TEMPLATE_ID, {
						name: username, email: email, message: message
				})
				.then(function () {$(".status-icon").addClass("fa-check-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "green"); $(".status").text("Sent"); $(".ok").show();})
				
				.catch(function (error) {console.log(error.message); $(".status-icon").addClass("fa-xmark-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "rgba(152, 0, 46, 1)"); $(".status").text("Failed"); $(".close").show(); $(".retry").show();});
				}
				}else{
						if (inputLength < 1){
						errorMessageForSubmit.show();
								$($("#message").parent()).addClass("shake");
								setTimeout(()=>{errorMessageForSubmit.hide(); $($("#message").parent()).removeClass("shake")}, 2000);
				}else{
						errorMessageForSubmit.hide();
						let username = $("#username").val();
				let email = $("#email").val();
				let message = $("#message").val();
				
				$(".email-status").css("display", "flex");
				$(".status-icon").addClass("fa-spinner").addClass("fa-spin").css("color", "rgba(0, 65, 152, 1)");
				$(".status").text("Sending...");
				
				emailjs.send(SERVICE_ID, TEMPLATE_ID, {
						name: username, time: new Date().toString(), message: message, email: email
				})
				.then(function () {$(".status-icon").addClass("fa-check-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "green"); $(".status").text("Sent"); $(".ok").show();})
				
				.catch(function (error) {console.log(error.message); $(".status-icon").addClass("fa-xmark-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "rgba(152, 0, 46, 1)"); $(".status").text("Failed"); $(".close").show(); $(".retry").show();});
				}
				}
		}
		);
				
				
		
		$(".ok").click(function (event) {
				$(".email-status").hide();
				$(this).hide();
		});
		
		$(".retry").click(function (event) {
					let username = $("#username").val();
				let email = $("#email").val();
				let message = $("#message").val();
				
				$(".email-status").css("display", "flex");
				$(".status-icon").addClass("fa-spinner").addClass("fa-spin").css("color", "rgba(0, 65, 152, 1)");
				$(".status").text("Sending...");
				$(".close, .retry").hide();
				emailjs.send(SERVICE_ID, TEMPLATE_ID, {
						name: username, email: email, message: message, time: new Date().toString()
				})
				.then(function () {$(".status-icon").addClass("fa-check-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "green"); $(".status").text("Sent"); $(".ok").show(); })
				
				.catch(function (error) {$(".status-icon").addClass("fa-xmark-circle").removeClass("fa-spinner").removeClass("fa-spin").css("color", "rgba(152, 0, 46, 1)"); $(".status").text("Failed"); $(".close").show(); $(".retry").show();	});
		});
		
		$(".close").click(function (event){$(".email-status").hide();});
		
}
);
