
import {PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from "./secrets.js";

$(document).ready(
function (event){
		emailjs.init(PUBLIC_KEY);
		
		$("input[name='username']").on("input", function (event)
{
		let inputValue = event.target.value;
		if (inputValue.startsWith(" ")){
				if (!$(".errMssgUsername2").is(":visible")){
						$(".errMsgUsername2").show();
				}
		}else{
				$(".errMsgUsername2").hide();
		}
		
		if (inputValue.length > 25){
				if (!$(".errMsgUsername").is(":visible")){
						$(".errMsgUsername").show();
				}
		}else{
				$(".errMsgUsername").hide();
		}
} 		
		);
		
		$("input[name='email']").on("input", 
		function (event){
				let inputValue = event.target.value;
				if (!this.validity.valid){
						if (!$(".errMsgEmail").is(":visible")){
								$(".errMsgEmail").show();
						}
				}else{
						$(".errMsgEmail").css("display", "none");
				}
					}
		);
		
		$("textarea[name='message']").on("input", 
		function (event){
				let inputValue = event.target.value;
				if (!$(".counterLabel").is(":visible")){
	  $(".counterLaber").text(`${inputValue.length}/300`);
						$(".counterLabel").show();
				}else{
						$(".counterLabel").text(`${inputValue.length}/300`);
				}
				
				if (inputValue.length > 300){
						if (!$(".errMsgMessage").is(":visible")){
								$(".errMsgMessage").show();
								$(".counterLabel").css("color", "var(--secondary-color)");
						} 
				}else{
						$(".errMsgMessage").hide();
						$(".counterLabel").css("color", "var(--primary-color)");
				}
		}
		);
		
		$("form").on("submit", function (event){
				event.preventDefault();
				console.log("Send");
	 	if (!$("textarea[name='message']").val().length){
						if (!$(".no-content").is(":visible")){
								$(".no-content").fadeIn(500).css("display", "flex");
								setTimeout(function (){
										$(".no-content").fadeOut(500);
								}, 3000);
						}
				}else{
						let username = $("input[name='username']").val();
						let email = $("input[name='email']").val();
						let message = $("textarea[name='message']").val();
						sendEmail(username, email, message);
				}
		}
		);
		
		$(".fa-times").click(function (event) {
				$(this).parent().hide();
		});
		
		$(".retry").click(function (event) {
				 let username = $("input[name='username']").val();
						let email = $("input[name='email']").val();
						let message = $("textarea[name='message']").val();
						sendEmail(username, email, message);
				});
		 
}
);
		
function sendEmail (name, email, message){
		$(".pending").fadeIn(500).css("display", "flex");
		setTimeout(function () {
				$(".pending").fadeOut(500);
		}, 3000);
		
		emailjs.send(SERVICE_ID,TEMPLATE_ID, {
				name : name, email : email, message : message
		}).
		then(function () {
				if ($(".pending").is(":visible")){
						$(".pending").hide();
				}
				$(".sent").fadeIn(500).css("display", "flex");
				setTimeout(()=>{
						$(".sent").fadeOut(500);
				}, 3000 );
	 }).
		catch (function (err) {
				if ($(".pending").is(":visible")){
						$(".pending").hide();
				}
				$(".failed").fadeIn(500).css("display", "flex");
				setTimeout(()=>{
						$(".failed").fadeOut(500);
				}, 3000);
		});
}
		