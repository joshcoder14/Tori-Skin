jQuery(function ($) {
	var filterList = {
		init: function () {
            var activeFilter = $('#filter .filter.active').data('filter');

			$('.product-grid').mixItUp({
				selectors: {
                    target: '.prod-item',
                    filter: '.filter'	
                },
                load: {
                    filter: activeFilter
                }     
			});								
		}
	};

	filterList.init();
});
