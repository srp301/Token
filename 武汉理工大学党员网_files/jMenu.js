	$(function() {
	    $('.mainlevel').bind('mouseover', openSubMenu);
	    $('.mainlevel').bind('mouseout', closeSubMenu);
		
	    function openSubMenu() {
	        $(this).find('ul').css('visibility', 'visible');	
	    };
		
	    function closeSubMenu() {
	        $(this).find('ul').css('visibility', 'hidden');	
	    };
		
		//鼠标放上导航上，导航下面出现下划线
		$('.mainlevel>a').hover(function(){
			$(this).addClass('menu_current');
		},function(){
			$(this).removeClass('menu_current');
		});		   
	});