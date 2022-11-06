$(".files .files_menu_list_item").click(function() {
	$(".files .files_menu_list_item").removeClass("active").eq($(this).index()).addClass("active");
	$(".files_content_block_wrapper").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");