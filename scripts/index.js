
$(document).ready(function () {
		$("body").fadeIn(1500);
		$("footer").append(`<p style="text-align:center; padding-top:1vh">ATS &copy; ${new Date().getFullYear()}<p>`);
});

$("#businessButton").click(function () { 
location.href = "business.html";
}
);
