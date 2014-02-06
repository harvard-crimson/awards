jQuery(document).ready(function() {
	jQuery('ul.sections li').click(function() {
		var selector = jQuery(this).attr('data-section');
		jQuery('ul.sections li, .section-content table').removeClass('active');
		jQuery(this).addClass('active');
		jQuery(selector).addClass('active');
	});
});
