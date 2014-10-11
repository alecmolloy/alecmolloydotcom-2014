$(document).ready(function() {
		$("div.imagechange").each(function(index) {
			var image = "section_headers/" + $(this).attr('id') + ".jpg";
			$(new Image()).load(function() { }).attr('src',image);
			});

		$(window).scroll(function() {
			$("div.imagechange").each(function(index) {
				var scrollTop = $(window).scrollTop();
				var apos = $(this).position();		
				var image = $(this).attr('id');
				if (scrollTop > apos.top) {
				$("#imagechange-target img").attr("src","section_headers/"+image+".jpg");
				}
				});
			});
		});
