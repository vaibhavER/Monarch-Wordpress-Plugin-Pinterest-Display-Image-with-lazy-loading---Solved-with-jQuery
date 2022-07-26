jQuery('.et_social_pin_image').remove();

jQuery('.blog-info-text img[data-lazy-src], .bnnr_pinterest').each(function(index,items){
	jQuery('.et_social_pin_images').append(`
		<div class="et_social_pin_image pinterest_inner"><a href="https://in.pinterest.com/pin/create/button/?url=${location.href}&media=${jQuery(items).attr('data-lazy-src')}&description=${jQuery('title').text().replace(/ /g,"+")}" rel="nofollow" class="et_social_icon et_social_share" data-social_name="pinterest" data-post_id="${jQuery("#post_id").val()}" data-social_type="share"><img src="/assets/images/blank.webp" width="140" height="77" data-lazy-src="${jQuery(items).attr('data-lazy-src')}" alt="${jQuery(items).attr('alt')}"><span class="et_social_pin_overlay et_social_icon"></span></a></div>
	`)
})