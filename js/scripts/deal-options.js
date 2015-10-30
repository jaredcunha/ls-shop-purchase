$(document).ready(function(){
	$('.buy-button a').on("click", function(){
		$(this).parent().addClass("hide");
		setTimeout(function(){
			$('.purchase-options').addClass("in-view");
		}, 500);
		
	});

	$('.options-top').on("click", function(){
		$('.buy-button').removeClass("hide");
		setTimeout(function(){
			$('.purchase-options').removeClass("in-view");
		}, 500);
		
	});

	$('.variant').on("click", function(){
		var $title = $(this).attr("data-option-title");
		var $theHeader = $(this).closest(".option-set-group").find('.option-set-header');
		var $titleContentContainer = $theHeader.find(".selection");
		$theHeader.addClass('init');
		$titleContentContainer.text($title);
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parent().removeClass("item-remaining");
		if ($('.item-remaining').length === 0) {
			$('.btn').removeClass("btn-disabled");
			$('.error').remove();
		};
	});

	/* SORT OF REDUNDANT FUNCTION OF THE ABOVE, BUT ALLOWS TO MAP ACTIONS BACK TO DOM CHANGES FROM THE CAROUSL */
	$('body').on("touchend",function(){
		var $titleFromSlider = $(".carousel-controlled .variant.active").attr("data-option-title");
		var $carouselControlledHeader = $(".carousel-controlled.option-set-group").find('.option-set-header');
		var $carouselControlledTitleContentContainer = $carouselControlledHeader.find(".selection");
		$carouselControlledHeader.addClass('init');
		$carouselControlledTitleContentContainer.text($titleFromSlider);
	});

	var q = parseInt($('#quantity').html());
	$(".incremental-button").on("click", function(){
		$(this).addClass('clicked');
		setTimeout(function(){
			$(".incremental-button").removeClass("clicked");
		}, 200);
	});

	
	$('.incremental-plus').on('click', function(){
		q++;
		$('#quantity').html(q);
	});

	$('.incremental-minus').on('click', function(){
		if (q > 1) {
			q--;
			$('#quantity').html(q);
		}
	});

	$('.btn').on("click", function(){
		if($(this).hasClass('btn-disabled'))  {
			$(this).before('<p class="error">please select remaining options</p>');
		}
	}) 
});