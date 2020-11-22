$(document).ready(function () {
	$animation1 = $("#animation-1");
	$animation2 = $("#animation-2");
	$learnMoreBtn = $("#learBtn");
	$info = $(".info");
	$info1 = $(".info1");
	$item1 = $(".item-1");
	$info2 = $(".info2");
	$item2 = $(".item-2");
	$info3 = $(".info3");
	$item3 = $(".item-3");
	$info4 = $(".info4");
	$item4 = $(".item-4");

	// portifolio

	$item1.on("mouseover", function () {
		$info1.show();
	});

	$item2.on("mouseover", function () {
		$info2.show();
	});

	$item3.on("mouseover", function () {
		$info3.show();
	});

	$item4.on("mouseover", function () {
		$info4.show();
	});

	// other
	$animation1.on("animationend", () => {
		let c = 1;
		setTimeout(() => {
			$animation1.hide();
			$animation2.show();
			// c b a
		}, 1500);
	});

	$animation2.on("animationend", () => {
		setTimeout(() => {
			$animation2.hide();
			$animation1.show();
		}, 1500);
	});

	$(document).ready(function () {
		$(".sidenav").sidenav();
	});

	$(".dropdown-trigger").dropdown({
		hover: true,
	});

	$(document).ready(function () {
		// create mobile menu

		$(".sidenav").sidenav();
		// create dropdown
	});

	$(document).ready(function () {
		$(".materialbox").materialbox();
	});
});
