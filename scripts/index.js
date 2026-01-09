$(document).ready(
function (event){
		let mobileMenuOpened = false;	
		$(".menu-icon").click(
		function () {
				if (!mobileMenuOpened){
						$(".mobile-menu").slideUp(100);
						mobileMenuOpened = true;
		}else{
				$(".mobile-menu").css("display", "flex").slideDown(100);
						mobileMenuOpened = false;
		}
		}      

		);
}

);