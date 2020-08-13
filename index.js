$(document).ready(function () {
	$("#smoke").click(function () {
		console.log(11111)
		// $("#smoke").addClass("smoke").removeClass("smoke-min");
		$("#smoke").toggleClass("smoke").toggleClass("smoke-min");
	});
});