$(document).ready(function(){
	var repeat = $(".prod_ul").html();
	$(".prod_ul").append(repeat);
	// var slice = Math.ceil($(".prod_ul").height()/2*-1);
	var slice = 1176/2*-1;
	console.log($("#p_conul").height());
	function qaslide(){
		var top = parseInt($(".prod_ul").css("marginTop"));
		if(top == slice){
			$(".prod_ul").css("marginTop","0px")
		}else{
			$(".prod_ul").css("marginTop",top-1+"px")
		}
	}
	var t = setInterval(qaslide,50);
	$(".imgli").bind({
		mouseover:function(){
			clearInterval(t);
		},
		mouseleave:function(){
			t = setInterval(qaslide,50);
		}
	})
})