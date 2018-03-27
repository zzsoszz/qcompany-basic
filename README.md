# 公司通用导航，左侧划入
```
$(document).ready(function (argument) {
	
	//创建菜单
	var menu=new SideMenu($("#sidemenu"));
	
	//触发打开菜单
	$(".qopenmenu").on("click",function(e){
		e.stopPropagation();
		menu.toggleMenu();
	});
	
});
```