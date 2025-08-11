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

function playTraining() {
	$('.how-training__video-play').on('click', function () {
		var $parent = $(this).closest('.how-training__video');
		var $video = $parent.find('video')[0];

		if ($video) {
			$video.play();
			$parent.addClass('active');
		}
	});
}
playTraining();

function accordion() {
	$(".faq__item").on("click", function (e) {
		e.preventDefault();

		if (!$(this).hasClass("accordion-active")) {
			$(".faq__item-body").slideUp(300);
			$(".faq__item-title").removeClass("accordion-active");
			$(".accordion-item").removeClass("accordion-active");
		}

		$(this).toggleClass("accordion-active");
		$(this).children('.faq__item-title').toggleClass("accordion-active");
		$(this).children('.faq__item-body').slideToggle();
	});
}
accordion();