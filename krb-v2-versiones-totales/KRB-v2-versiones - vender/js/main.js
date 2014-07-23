$(document).ready(function(){
	/*
	Navigation Function
	**/
	if($(window).scrollTop()===0){
		$('#main-nav').removeClass('scrolled');		
	}
	else{
		$('#main-nav').addClass('scrolled');
	}

	$(window).scroll(function(){
		if($(window).scrollTop()===0){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');
		}
	});
	/*
	ScrollTo Links
	**/
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-80}});
		e.preventDefault();
		if($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	/*
	section projects

	**/
	$('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {verticalFit: true},
        zoom: {enabled: true,  duration: 300 // don't foget to change the duration also in CSS
        }
      });
    // popup-with-zoom-anim
      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
    // On document ready:
      $(function(){
        // Instantiate MixItUp:
        $('#Containermix').mixItUp();
      });





	/*
	Links - MARKETPLACE
	**/
	$('section.zonesmkp').hide();
	$('a.title-sec').click(function(e){		
		$('.title-sec').removeClass('title-active');
		$(this).addClass('title-active');
		if($('.title-store').hasClass('acti-diag')){
			$('.title-store').removeClass('acti-diag');
		}
		if($('.title-store').hasClass('title-active')){
			$('.title-store').addClass('acti-diag');
			$('section.zone-repository').hide();
			$('section.zone-store').show();
		}
		if($('.title-repository').hasClass('title-active')){
			$('section.zone-store').hide();
			$('section.zone-repository').css({'display':'block'});
		}
	});
	/*
	Header Functions
	
	$('.pantalla').height($(window).height());**/
	$('.pantalla').css({'height':$(window).height()});
	$('.message-box').css({'paddingTop':$(window).height()*0.4});
	$('.home-slider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: false,
		direction: "vertical",
		slideshowSpeed: 2500,
		animationSpeed: 500,
		smoothHeight: false
	});

	/*
	Header Functions 
	--------------------- MARKETPLACE -----------------	
	$('.pantalla').height($(window).height());**/
	$('.pantallamkp').css({'height':$(window).height()});
	$('.message-box-mkp').css({'paddingTop':$(window).height()*0.4});
	$('.home-slider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: false,
		direction: "vertical",
		slideshowSpeed: 2500,
		animationSpeed: 500,
		smoothHeight: false
	});

	/*
	Rotating Words
	*/
	var rotate_words = $('.rotate-words');
		if(rotate_words.length && Modernizr.csstransforms) {
			rotate_words.find('span').eq(0).addClass('active');
			setInterval(function(){
				next_word_index = rotate_words.find('.active').next().length ? rotate_words.find('.active').next().index() : 0;
				rotate_words.find('.active').addClass('rotate-out').removeClass('rotate-in active');
				rotate_words.find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
			},2000);
		}
	/*
	animated number
	**/	
    $(document).scroll(function () { 
		var cf = $(this);
		cf.find(".animated-number").each(function() {
			var targetnumber = $(this).attr("data-target-number");
			$(this).animateNumbers(targetnumber, true, 4000);
		});
	});
    /*
    Animated progress bar
    **/
    $(document).scroll(function () {
    	var cf = $(this);
	    cf.find(".animated-skills").each(function() {
	    $(this).css("width",$(this).attr("data-skills-width"));
	    });
	});

	/*
	POPup VIDEO
	**/
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	/*
	Resize functions
	**/
	$(window).resize(function(){
		/* $('.pantalla').height($(window).height());**/
		$('.pantalla').css({'height':$(window).height()});
		$('.message-box').css({'paddingTop':$(window).height()*0.4});
		scrollSpyRefresh();
		waypointsRefresh();
	});
	/*
	Resize functions
	---------------------- MARKETPLACE ---------------------
	**/
	$(window).resize(function(){
		/* $('.pantalla').height($(window).height());**/
		$('.pantallamkp').css({'height':$(window).height()});
		$('.message-box-mkp').css({'paddingTop':$(window).height()*0.4});
		scrollSpyRefresh();
		waypointsRefresh();
	});

	$('.no-csstransitions .hover-mask').hover(
		function() {
			$( this ).stop(true,true).animate({opacity: 1});
		}, function() {
			$( this ).stop(true,true).animate({opacity: 0});
		}
	);
	/*
	Placeholder detection
	**/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}
	/*
	Scrolling Animation
	**/
	$('.scrollimation').waypoint(function(){
		$(this).toggleClass('in');
	},{offset:'90%'});
	/*
	Refresh scrollSpy function
	**/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}
	/*
	Refresh waypoints function
	**/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});