function checkForChanges() {
	if ($('.content-message').hasClass('active-slide'))

		setTimeout(function () {

			$('.notification').addClass('opacity-0').removeClass('fadeIn'),
				$('#text-alert').text('Enjoy your visit...').addClass('fadeIn')

		}, 300);

	else
		setTimeout(checkForChanges, 500);
}

$(window).load(function () {

	$('#text-alert').text('Web/Graphic designer...');

	$('a.messages').addClass('ion-chatbubble-working').removeClass('');

	setTimeout(function () {
		$('#text-alert').text('Click below to contact me').addClass('fadeIn');
		$('.notification').addClass('fadeIn').removeClass('opacity-0');


		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', 'assets/tone/note.m4r');
		audioElement.setAttribute('autoplay', 'autoplay');

		$.get();

		audioElement.addEventListener("load", function () {
			audioElement.play();
		}, true);

		audioElement.play();



		$(checkForChanges);

	}, 2500);


	$('.loading-part').fadeOut();

});

$(document).ready(function () {

	$('.swipebox').swipebox();

	$('.swipebox-video').swipebox();

	function prevNavigation() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev('.slide');
		$('.slide').animate({
			scrollTop: 0
		}, 'fast');

		if (prevSlide.length === 0) {
			prevSlide = $('.slide').last();
		}


		currentSlide.removeClass('active-slide');
		prevSlide.addClass('active-slide');
	}

	function nextNavigation() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next('.slide');
		$('.slide').animate({
			scrollTop: 0
		}, 'fast');

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
		}


		currentSlide.removeClass('active-slide');
		nextSlide.addClass('active-slide');
	}

	$('.prev-button').click(function () {

		prevNavigation();

	});

	$('.next-button').click(function (e) {

		nextNavigation();

	});

	$('a.icon-popup').on('click', function () {
		$("#main").fadeOut("600", "linear");
		$(".slider-nav").addClass('active-nav');
	});

	$("a.messages").click(function () {
		$(".content-message").addClass('active-slide');
	});

	$("a.about").click(function () {
		$(".content-about").addClass('active-slide');
	});

	$("a.photos").click(function () {
		$(".content-photos").addClass('active-slide');
	});

	$("a.close-content").click(function () {
		$(".global-content section").removeClass('active-slide');
		$(".slider-nav").removeClass('active-nav');
		$("#main").fadeIn("600", "linear");
		$('.slide').animate({
			scrollTop: 0
		}, 'fast');
	});

	if (window.matchMedia("(min-width: 1025px)").matches) {

		$(function () {
			$("[data-toggle='tooltip']").tooltip();
		});

	}

});
