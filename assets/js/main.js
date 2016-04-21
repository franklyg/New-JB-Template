
$(function(){
	$('#index-body .cta a').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		});
	});

	
	// Landing Page Counter
	// var counter = 599;
    var one        = 0;
    var ten        = 0;
    var hundered   = 6;
    var intervalId = setInterval(function(){
                        time();
                      }, .7);
	function time(){
	    one--;

	    if(one == -1){
	      	ten = ten - 1;
	      	one = 0 + 9;
	    }
	    if(ten == -1 ){
	      	hundered = hundered - 1;
	      	ten = 0 + 9;
	    }
	    var wholeNum = hundered+''+ten+''+one;
		if(wholeNum == 250){
	  		clearInterval(intervalId);
		}
		//Set class/id to have countdown
	    $('.timer').html('<span>'+hundered+'</span><span>'+ten+'</span><span>'+one+'</span>');

    }
    // Checkout Counter
  	var min    = 0;
  	var second = 00;
  	var zeroPlaceholder = 0;
  	var counterId = setInterval(function(){
 			           	countUp();
                  	}, 1000);

    function countUp () {
        second++;
        if(second == 59){
            second = 00;
            min = min + 1;
        }
        if(second == 10){
            zeroPlaceholder = '';
        }else if(second == 00){
            zeroPlaceholder = 0;
        }
        //Set class/id to have countup
        $('.count-up').html(min+':'+zeroPlaceholder+second);
    }

    //Hidden form and Downsell functions
    $('form .form-container .billing-info input[type="checkbox"]').on('click', function(){
    	$('form .hidden-fields').stop().slideToggle();
    });
    if($('#checkout-body').hasClass('downsell')){
    	$('form .hidden-fields').css('display' , 'block')
    }

})
$(function(){
	var source   = $(".product-description").html();
	var template = Handlebars.compile(source);
	var data     = 	{   prodname : "[PRODUCT NAME]",
	                		proddesc:{  
	                		assets : "30ml - 30 Day Supply", 
	                		description : "Anti-Wrinkle Serum"
	                		}
					};
	$(".product-content").html(template(data));
});