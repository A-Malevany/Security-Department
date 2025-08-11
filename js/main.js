function documentsCarousel() {
	$('.documents__slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0px',
		appendArrows: $('.documents__slider-arrow'),
		appendDots: $('.documents__slider-nav'),
	});
}
documentsCarousel();

function reviewsCarousel() {
	$('.reviews__slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 2,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0px',
		appendArrows: $('.reviews__slider-arrow'),
		appendDots: $('.reviews__slider-nav'),
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
}
reviewsCarousel();

function licensesCarousel() {
	$('.licenses__slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 2,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0px',
		appendArrows: $('.licenses__slider-arrow'),
		appendDots: $('.licenses__slider-nav'),
		responsive: [
			{
				breakpoint: 1112,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
}
licensesCarousel();