$(document).ready(
function (event){
		let mobileMenuOpened = true, dsktpSocialMenuClosed = true;
		$(".hire-button").click(
		function (event) {
				if (!$(".mobile-menu").is(":visible")){
						$(".overlay").css("display", "flex");
				}else{
						$(".mobile-menu").hide();
						if ($(".menu-button").hasClass("fa-xmark")){
								$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
						}
									mobileMenuOpened = false;
						$(".overlay").css("display", "flex");
				}
		}
		);
		
$(".close-form-button").click(
		function (event){
				$(".overlay").hide();
				if ($(".email-status").is(":visible")){
						$(".email-status").hide();
				}
		}
		);
	
		
		$(".menu-button").click(
		function () {
				if (!mobileMenuOpened){
						if (!$(".mobile-menu").is(":visible")){
				if (!$(".overlay").is(":visible")){
						$(".mobile-menu").slideDown(500);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}else{
						$(".overlay").hide();
						$(".mobile-menu").slideDown(500);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}
						}else{
								$(".mobile-menu").slideUp(500);
								if ($(".menu-button").hasClass("fa-xmark")){
										$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
								}
								mobileMenuOpened = false;
						}
		}else{
				if(!$(".mobile-menu").is(":visible")){
				if (!$(".overlay").is(":visible")){
						$(".mobile-menu").slideDown(500);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}else{
						$(".overlay").hide();
						$(".mobile-menu").slideDown(500);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}
				}else{
						if ($(".menu-button").hasClass("fa-xmark")){
								$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
						}
						$(".mobile-menu").slideUp(500);
						mobileMenuOpened = false;
				}
		}
		}
		);
		
		       
}
		);
