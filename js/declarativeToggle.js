jQuery(document).ready(function() {
	

	$('.toggle-btn').each(function () {
		var $this = $(this);
		$this.on("click", function () {
			var claso = $(this).attr('data-toggle-target');

			switch(claso){
				case ".leo":
					$(".leo").show();
					$(".rafa").hide();
					$(".mike").hide();
					$(".don").hide();
				break;
				case ".rafa":
					$(".rafa").show();
					$(".leo").hide();
					$(".mike").hide();
					$(".don").hide();
				break;
				case ".mike":
					$(".mike").show();
					$(".rafa").hide();
					$(".leo").hide();
					$(".don").hide();
				break;
				case ".don":
					$(".leo").hide();
					$(".rafa").hide();
					$(".mike").hide();
					$(".don").show();
				break;
			}

		});
	});

	

});