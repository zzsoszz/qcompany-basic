function SideMenu(target){
	this.isShow=false;
	this.toggleMenu=function(){
		this.isShow=!this.isShow;
		if(this.isShow)
		{
			target.addClass("sidemenu--on");
		}
		else{
			target.removeClass("sidemenu--on");
		}
	};
	this.hideMenu=function(){
		if(this.isShow)
		{
			target.removeClass("sidemenu--on");
			this.isShow=!this.isShow;
		}
	};
	this.init=function(){
		$(document).on('click',
		    $.proxy(
			function(event){
			  if( !$(event.target).closest(target).length ) 
			  {
				 this.hideMenu();
			  }
			},this)
		);
	};
	this.init();
};




$(document).ready(function (argument) {
	
	var menu=new SideMenu($("#sidemenu"));
	
	$(".qopenmenu").on("click",function(e){
		e.stopPropagation();
		menu.toggleMenu();
	});
	
});