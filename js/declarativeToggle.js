jQuery(document).ready(function() {
	
	$('.toggle-btn').each(function () {
		var $this = $(this);
		$this.on("click", function () {
			var claso = $(this).attr('data-toggle-target');
			showData(claso);
		});
	});

	function showData(current){
		$(".description").hide();
		$(current).show();
	}

	$(".menu li a").on("click",function(event){
		$(".menu li a").removeAttr('aria-current',"page");
		$(this).attr('aria-current',"page");
	});

	$(".menu li a").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){		
			$(".menu li a").removeAttr('aria-current',"page");
			$(this).attr('aria-current',"page");
		}
	});
	var black = false
	var bgcolor;
	$(".burguer").on("click", ()=>{	
		$(".menuAcc").toggle("display");
		if (black = !black) {
            bgcolor = $(".burguer").css('backgroundColor');
            $(".burguer").css("background-color", "#000");
			$(".burguer").attr('aria-expanded',true);
        } else {
            $(".burguer").css("background-color", bgcolor);
			$(".burguer").attr('aria-expanded',false);
        }
	});
	$("#heroes").on("focus", ()=>{	
		$(".menuAcc").css("display","none");	
        $(".burguer").css("background-color", "transparent");
	});
	var fe = true;
	$(".burguer").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if((keycode == '13') && fe ==true){		
			$(".menuAcc").css("display","block");
			$(".burguer").css("background-color","black");
			$(".burguer").attr('aria-expanded',true);
			fe = false; 
		}else{
			$(".menuAcc").css("display","none");
			$(".burguer").css("background-color","transparent");
			$(".burguer").attr('aria-expanded',false);
			fe = true;  
		}
	});

	


});