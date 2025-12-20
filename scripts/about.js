$(document).ready(
function (event){
		const dob = new Date(2005, 12, 25), currentDate = new Date();
	let	age = currentDate.getFullYear() - dob.getFullYear();
		if (!currentDate.getMonth() >= dob.getMonth() && currentDate.getDate() >=dob.getDate()){
				age -= 1;
		}
		$("#age").text(`Age: ${age}`);
		$(".section-2").css("display", "flex").hide().slideDown(500);
		$(".section-3").css("display", "flex");
		$("#year").text(`2025-${currentDate.getFullYear()}`);
}


);

