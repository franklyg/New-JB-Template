$(function () {
    //Click back to top
    $('#index-body .cta a, #index-body .wrapper .bottom a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });
    //Reminder Pop up
    $('#index-body .top .reminder .reminder-inner').delay(3000).animate({
        'top': '0px',
        'opacity': 1
    });

    // Landing Page Counter
    // var counter = 599;
    var one = 0;
    var ten = 0;
    var hundered = 6;
    var intervalId = setInterval(function () {
        time();
    }, .7);

    function time() {
        one--;

        if (one == -1) {
            ten = ten - 1;
            one = 0 + 9;
        }
        if (ten == -1) {
            hundered = hundered - 1;
            ten = 0 + 9;
        }
        var wholeNum = hundered + '' + ten + '' + one;
        if (wholeNum == 250) {
            clearInterval(intervalId);
        }
        //Set class/id to have countdown
        $('.timer').html('<span>' + hundered + '</span><span>' + ten + '</span><span>' + one + '</span>');

    }

    // Checkout Counter
    var min = 0;
    var second = 00;
    var zeroPlaceholder = 0;
    var counterId = setInterval(function () {
        countUp();
    }, 1000);

    function countUp() {
        second++;
        if (second == 59) {
            second = 00;
            min = min + 1;
        }
        if (second == 10) {
            zeroPlaceholder = '';
        } else if (second == 00) {
            zeroPlaceholder = 0;
        }
        //Set class/id to have countup
        $('.count-up').html(min + ':' + zeroPlaceholder + second);
    }

    //Hidden form and Downsell functions
    $('form .form-container .billing-info input[type="checkbox"]').on('click', function () {
        $('form .hidden-fields').stop().slideToggle();
    });
    if ($('#checkout-body').hasClass('downsell')) {
        $('form .hidden-fields').css('display', 'block')
    }

    $(function(){
        $("#footer").load("footer.html");
    });

    // Form Validation  Styles
    $('.active').val();
    $('.active').focus();

    $(':input[type="text"], select').on('focus', function () {
        $(this).addClass('active');
    }).on('blur', function () {
        $(this).removeClass('active');
    });

    //Steps Animation
    if ($('body').attr('id') == 'checkout-body') {
        $('.steps .bar .slider').css({
            'width': '139px'
        });
        $('.steps .step-2 .step-inner p').addClass('current');
    }
    if ($('body').attr('id') == 'thankyou-body' || $('body').attr('id') == 'upsell-body') {
        $('.steps .bar .slider').css({
            'width': '300px'
        });
        $('.steps .step-2 .step-inner p, .steps .step-3 .step-inner p').addClass('current')
    }

    //Downsell close
    $('.popover .popover-graphics img.close').on('click', function () {
        $('.popover').css({
            'visibility': 'hidden'
        })
    });


})


function getDate(days) {
    var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var now = new Date();
    now.setDate(now.getDate() + days);
    var nowString = monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
    document.write(nowString);
}

$(function () {
    var source = $(".product-description").html();

    if ($(".product-description").html()) {
        var template = Handlebars.compile(source);
        var data = {
            prodname: "[PRODUCT NAME]",
            proddesc: {
                assets: "30ml - 30 Day Supply",
                description: "Anti-Wrinkle Serum"
            }
        };
        $(".product-content").html(template(data));
    }

});
$(function () {
    var source = $(".product-description2").html();

    if ($(".product-description2").html()) {
        var template = Handlebars.compile(source);
        var data = {
            prodname: "[PRODUCT NAME 2]",
            proddesc: {
                assets: "30ml - 30 Day Supply",
                description: "Anti-Wrinkle Serum"
            }
        };
        $(".product-content2").html(template(data));
    }

});
