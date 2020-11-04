$(() => {
  
	$animation1 = $("#animation-1");
	$animation2 = $("#animation-2");

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
});
