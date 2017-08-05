/*
 * jq-Selector
 * @author Gavin
 * 2016-2-15
 */
$(document).ready(function(){
	var command = $(".commander")[0];
	var showBox = $(".show");
	var flag = null;
	var active = "active";
	var title = "";
	var limitBox = ".main";

	var handle = function(){
		//获取data-value值
		var value = $(this).data("value");
		//获取选中的jquery对象
		if (value !== ":root") {
			var des = $(value, limitBox);
		} else {
			var des = $(value);
		}
		//取消上一次选中时的效果
		if ( flag !== null && flag !== this ) {
			flag.removeClass(active);
		}
		des.addClass(active);
		flag = des;

		//到指定位置
		//toPos(des);
		return false;
	};

	var Title = {
		show :  function(e){
			showBox.css("display", "block");
			showBox.css({
				top: e.pageY + 15 + "px",
				left: e.pageX + 15 + "px"
			});
			title = $(this).data("title");
			showBox.html(title);
		},
		hide: function(e){
			showBox.css("display", "none");
		}
	};

	var toPos = function(des){
		$(document).scrollTop(des[0].offsetTop);
	};

	// 事件委托
	$(command).on("click", "a", handle)
			  .on("mouseover", "a", Title.show)
			  .on("mouseout", "a", Title.hide)
	          .on("mousemove", "a", Title.show);
	$(showBox).on("mouseover",function(){return false;})
			  .on("mouseout",function(){return false;});

	// 清除所有选中效果
	$(".clear").click(function(){
		flag.removeClass(active);
	});
})