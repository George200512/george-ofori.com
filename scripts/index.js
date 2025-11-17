$(document).ready(
function (event){
		let mobileMenuOpened = true;
		$(".hire-button").click(
		function (event) {
				if (!$(".mobile-menu").is(":visible")){
						$(".hire-form").css("display", "flex");
				}else{
						$(".mobile-menu").hide();
						$(".hire-form").css("display", "flex");
				}
		}
		);
		
	$	(".fa-xmark").click(
		function (event){
				$(".hire-form").hide();
		}
		);
		
		$(".fa-bars").click(
		function () {
				if (!$(".hire-form").is(":visible")){
						$(".mobile-menu").slideDown(100);
				}else{
						$(".hire-form").hide();
						$(".mobile-menu").slideDown(100);
				}
		}
		);
		
		
}
);

