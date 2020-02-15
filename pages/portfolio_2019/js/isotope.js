$(document).ready(function(){	
	//item-wrapper
	var $grid = $('.list-item-wrapper').isotope({
		itemSelector : '.list-item',
		columnWidth : '.list-item',
		percentPosition : true,
		transitionDuration : '0.8s'
	});

	//filter function
	$('.filter a').on('click',function(e){
		e.preventDefault();
		var sort = $(this).attr('href');
		$grid.isotope({filter:sort});
	});

});

