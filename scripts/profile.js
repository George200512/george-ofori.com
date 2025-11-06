$(document).ready(
function (event) {
			const CURRENT_DATE = new Date(), BIRTHDATE = new Date("2005-12-25");
		let getAge = () => {
				let age = CURRENT_DATE.getFullYear() - BIRTHDATE.getFullYear();
				if (CURRENT_DATE.getMonth() < BIRTHDATE.getMonth() && (CURRENT_DATE.getDate() < BIRTHDATE.getDate())){
						age -= 1;
				}
				return age;
		}
		$("#age").text(`${getAge()}`);
		
		if(CURRENT_DATE.getMonth() === BIRTHDATE.getMonth() &&(CURRENT_DATE.getDate() === BIRTHDATE.getDate())){
				$("#dob").text("Today");
		}else{
		$("#dob").text("25th December, 2005");
		}
}
);

