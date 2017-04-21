/*
 * @modified $Author: chengliufeng $
 * @version 1.0 $
 * @date 2013.8.6 $
 * 本插件实现首页点击导航栏，页面滚动到相应位置
 */
(function($){
	$.extend($.fn,{
		scrollTo:function(time,to){
			time=time||800;
			to=to||1;
            $('a[href*=#]', this).click(function(){
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        if (to == 1) {
                            $('html,body').animate({
                                scrollTop: $target.offset().top
                            }, time);
                        }
                        else if(to==2){
                            $('html,body').animate({
                                scrollLeft: $target.offset().left
                            }, time);
                        }else{
							alert('argument error！');
						}
                        return false;
                    }
                }
            });
		}
	});
})(jQuery);