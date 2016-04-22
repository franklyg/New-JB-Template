JUMBLEBERRY TEMPLATE STANDARD
-----------------------------

###JB UI Library:

####Include and initialize library

- the JB UI library is located in /assets/jblib/
- this folder includes css styles, javascript functions, and commmon UI image elements

- Include the required files at the top of each page:
 
```html
    <link href="assets/jblib/styles.css" rel="stylesheet" type="text/css">
    <script src="assets/jblib/ui.js"></script>
```
- We use an error message pop-up called Toastr. You can include it by adding the following:

```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
```


####Features
 
   ```
       Coming soon.
   ```
    
#### HTML, CSS, and JS STANDARDS

#### HTML
    General
      Update all <footer> and <head> with proper product name.
      Fill in any alt tags with instances of [PRODUCT NAME] or [COUNTRY].

    index.html
      Form Sctructure and naming should be left as is. Along with any intstance of 'class="cta"'.
      If given a different PSD please update, and code all sections.

    checkout.html
      Product naming can be update in main.js(explained in JS)
      DO NOT change template structure 

    thankyou.html
      DO NOT change template structure 
      Product naming can be update in main.js(explained in JS)    

    upsell.html
      DO NOT change template structure .
      Product naming can be update in main.js(explained in JS).
      Update all proudct naming.

#### CSS
    reset.css
    DONT NOT TOUCH THIS
    
    main.css



#### JS
    main.js
    All auto scroll to top function on landing page on click of call to action.

    ```html
      $('#index-body .cta a, #index-body .wrapper .bottom a').on('click', function(){
        $('html, body').animate({
          scrollTop: 0
        });
      });
    ```
    The counter function for the landing page.
    This is located on the top of the form counting down at a rapid pace on the. Currently set to 7 miliseconds, but can be adjusted in the invertalId variable.
    
    ```html
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
    ```
    The counter function for the clock on the checkout page.
    The counter function can be located activly on the banner that fades in above the left side of the checkout page.
    ```html
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
    ```
    Validation functions and styles for all forms.
    ```html
    $('.active').val();
    $('.active').focus();

    $(':input[type="text"], select').on('focus', function(){
        $(this).addClass('active');
    }).on('blur', function(){
        $(this).removeClass('active');
    });
    ```
    Steps bar function on checkout, thank you and upsell pages.
    ```html
    if($('body').attr('id') == 'checkout-body'){
        $('.steps .bar .slider').css({
            'width': '139px'
        });
        $('.steps .step-2 .step-inner p').addClass('current');
    }
    if($('body').attr('id') == 'thankyou-body' || $('body').attr('id') == 'upsell-body'){
        $('.steps .bar .slider').css({
            'width': '300px'
        });
        $('.steps .step-2 .step-inner p, .steps .step-3 .step-inner p').addClass('current') 
    }
    ```
    Function used to update product naming on checkout and thank you.
    ```html
    $(function(){
      var source   = $(".product-description").html();
      var template = Handlebars.compile(source);
      var data     =  {   prodname : "[PRODUCT NAME]",
                          proddesc:{  
                          assets : "30ml - 30 Day Supply", 
                          description : "Anti-Wrinkle Serum"
                          }
              };
      $(".product-content").html(template(data));
    });
    ```