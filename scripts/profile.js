$(document).ready(
function (event) {
			const CURRENT_DATE = Date(), BIRTHDATE = Date("2005-12-25");
		let getAge = () => {
				age = BIRTHDATE.getFullYear() - CURRENT_DATE.getFullYear();
				if (CURRENT_DATE.getMonth() >= BIRTHDATE.getMonth()){
						age += 1;
				}
				return age;
		}
		$('#age').ready(
		function (event) {
				$(this).text(`{getAge()}`);
		}
		);
} 
);

