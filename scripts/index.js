$(document).ready(
function (event){
		let mobileMenuOpened = true, dsktpSocialMenuClosed = true;
		$(".hire-button").click(
		function (event) {
				if (!$(".mobile-menu").is(":visible")){
						$(".hire-form").css("display", "flex");
				}else{
						$(".mobile-menu").hide();
						if ($(".menu-button").hasClass("fa-xmark")){
								$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
						}
									mobileMenuOpened = false;
						$(".hire-form").css("display", "flex");
				}
		}
		);
		
$(".close-form-button").click(
		function (event){
				$(".hire-form").hide();
				if ($(".email-status").is(":visible")){
						$(".email-status").hide();
				}
		}
		);
	
		
		$(".menu-button").click(
		function () {
				if (!mobileMenuOpened){
						if (!$(".mobile-menu").is(":visible")){
				if (!$(".hire-form").is(":visible")){
						$(".mobile-menu").slideDown(1000);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}else{
						$(".hire-form").hide();
						$(".mobile-menu").slideDown(1000);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}
						}else{
								$(".mobile-menu").slideUp(1000);
								if ($(".menu-button").hasClass("fa-xmark")){
										$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
								}
								mobileMenuOpened = false;
						}
		}else{
				if(!$(".mobile-menu").is(":visible")){
				if (!$(".hire-form").is(":visible")){
						$(".mobile-menu").slideDown(1000);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}else{
						$(".hire-form").hide();
						$(".mobile-menu").slideDown(1000);
						$(".menu-button").removeClass("fa-bars").addClass("fa-xmark");
						mobileMenuOpened = true;
				}
				}else{
						if ($(".menu-button").hasClass("fa-xmark")){
								$(".menu-button").removeClass("fa-xmark").addClass("fa-bars");
						}
						$(".mobile-menu").slideUp(1000);
						mobileMenuOpened = false;
				}
		}
		}
		);
		
		
		$(".dsktp-switch-menu").slideDown(500);
		        setTimeout(
		         function () {
		             $(".dsktp-switch-menu").slideUp(500);
		         }, 10_000   
		        );
		        
		setInterval(
		    function () {
		        $(".dsktp-switch-menu").slideDown(500);
		        setTimeout(
		         function () {
		             $(".dsktp-switch-menu").slideUp(500);
		         }, 10_000   
		        );
		    }, 120_000
		);
		
		$(".icon-container").click(
		    function (event) {
		        let icon = $(".icon"), menu = $(".dsktp-socialHandles ul");
		    		icon.toggleClass("fa-share-nodes fa-xmark");
		    		menu.toggleClass("open");
		    }
		);
		
}
		);
