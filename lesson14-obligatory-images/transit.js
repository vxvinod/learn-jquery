(function($){

	var sliderUL=$('div.slider').css('overflow','hidden').children('ul'),
	imgs=sliderUL.find('img'),
	imgWidth=imgs[0].width,
	imgsLen=imgs.length,
	current=1;
	$('div#slider-nav').show().find('button').on('click',function(){
		var direction=$(this).data('dir');
		console.log(direction);

		(direction=='next')? ++current:--current
		console.log(current);
	});

	if(current===0){
		current=imgsLen;
		direction='next';
	}else if{
		current=1;
	}

})(jQuery);