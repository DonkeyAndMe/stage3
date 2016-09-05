$(function(){
//	控制最上面的图片和文字
	$(".my_zone_d").hover(function(){
		$(".my_zone").animate(5500).css("background","url(../img/sprite.png) no-repeat -10px -27px");
		$(".my_zone_div").css("display","block");
		
		$(".my_zone_div").mouseover(function(){
			$(".my_zone_div").css("display","block");
		})
		$(".my_zone_div").mouseout(function(){
			$(".my_zone_div").css("display","none");
		})
	},function(){
		$(".my_zone").css("background","url(../img/sprite.png) no-repeat 0 -27px");
		$(".my_zone_div").css("display","none");
	})
	
	$(".server_d").hover(function(){
		$(".server").animate(5500).css("background","url(../img/sprite.png) no-repeat -10px -27px");
		$(".server_div").css("display","block");
	},function(){
		$(".server").css("background","url(../img/sprite.png) no-repeat 0 -27px");
		$(".server_div").css("display","none");
		
		$(".server_div").mouseover(function(){
			$(".server_div").css("display","block");
		})
		$(".server_div").mouseout(function(){
			$(".server_div").css("display","none");
		})
		
	})
//	控制活动的图
	$(".a_close").click(function(){
		$(".dis_picture").css("display","none");
	})
	
	//控制右边购物车的隐藏
	$(".mycar").mouseover(function(){
		$(".dis_car").css("display","block");
		$(".opener a").css("color","#333333");
		$(".opener em").css("color","#f7661f");
		$(".opener strong").css("background","url(../img/sprite.png) no-repeat -23px -1389px");
	})
	$(".mycar").mouseout(function(){
		$(".dis_car").css("display","none");
		$(".opener a").css("color","#FFFFFF");
		$(".opener em").css("color","");
		$(".opener strong").css("background","url(../img/sprite.png) no-repeat 0 -1242px");
	})
	
	$(".shou").mouseover(function(){
		$(".yin").css("display","block");
		$(".shou_dt strong").css("color","#FF6600");
		$(".shou_dt a").css("color","#333333");
		$(".shou_dt strong").css("background","url(../img/sprite.png) no-repeat -23px -1389px");
	})
	$(".shou").mouseout(function(){
		$(".yin").css("display","none");
		$(".shou_dt a").css("color","#fff");
		$(".shou_dt strong").css("background","url(../img/sprite.png) no-repeat 0 -1242px");
	})
})


