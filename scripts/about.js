$(document).ready(
function (event){
		const dob = new Date(2005, 12, 25), currentDate = new Date();
	let	age = currentDate.getFullYear() - dob.getFullYear();
		if (!currentDate.getMonth() >= dob.getMonth() && currentDate.getDate() >=dob.getDate()){
				age -= 1;
		}
		$("#age").text(`Age: ${age}`);
		$(".section-2").slideDown(500).css("display", "flex");
		$(".section-3").css("display", "flex").show();
		$("#year").text(`${currentDate.getFullYear()}`);
}


);

