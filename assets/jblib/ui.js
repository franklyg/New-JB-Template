//downsell action
var exit_pop_alert_text = "\nWAIT! \n\n" +
    "LIMITED TIME SPECIAL OFFER!\n\nDue to a HIGH DEMAND we can only guarantee availability TODAY." +
    "\n\nClick *Cancel* or *Stay* below to accept this offer.\n\n";
function setPromo() {
    $("#popover").css('visibility', 'visible');
    $("#popup_overlay").show();
}
function PopIt() {
    exit_pop_do_autoclick();
    return exit_pop_alert_text;
}
function exit_pop_do_autoclick() {
    window.onbeforeunload = UnPopIt;
    setPromo();
}
function UnPopIt() {
}
function UnPopIt(){}

//Disable Downsell On Certain Actions
$(document).ready(function() {
    if (window.location.search.indexOf('[?&]downsell') != -1 || window.location.href.indexOf("/thank-you.php") > -1) {
        return false;
    } else {
        window.onbeforeunload = PopIt;
        $("a").click(function () {
            window.onbeforeunload = UnPopIt;
        });
        $("input[type=submit]").click(function () {
            window.onbeforeunload = UnPopIt;
        });
        $("button[type=submit]").click(function () {
            window.onbeforeunload = UnPopIt;
        });
        $("input[type=button]").click(function () {
            window.onbeforeunload = UnPopIt;
        });
        $("input[type=image]").click(function () {
            window.onbeforeunload = UnPopIt;
        });

        $("form").submit(function () {
            window.onbeforeunload = UnPopIt;
        });
        $("input").submit(function () {
            window.onbeforeunload = UnPopIt;
        });
    }
});
// rush links and terms links
$(document).ready(function () {

    //CTA Rush Links - Send to top of page
    $(document).on('click', 'a.rush-link', function () {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        });
    });

    //Shadowbox footer links method
    $("body").on('click', '.terms-link', function (e) {
        $.colorbox({width: "80%", height: "80%", closeButton:true, href: "page-terms.php"});
    });
    $("body").on('click', '.privacy-link', function (e) {
        $.colorbox({width: "80%", height: "80%", closeButton:true, href: "page-privacy.php"});
    });

    $("body").on('click', '.contact-link', function (e) {
        $.colorbox({width: "80%", height: "80%", closeButton:true, href: "page-contact.php"});
    });

    //Billing same as shipping - Desktop/Radio Buttons
    $(".billing_address_notsame").click(function () {
        $("#billing").slideDown();
        $("#billing input, .hidden-fields.shipping-information select").attr("required", "true");
        $("#billingSameAsShipping").attr('value', 'NO');
    });
    $(".billing_address_same").click(function () {
        $("#billing").slideUp();
        $("#billing input, .hidden-fields.shipping-information select").removeAttr("required");
        $("#billingSameAsShipping").attr('value', 'YES');
    });

    //Billing same as shipping - Mobile/Check Box
    var billingSameAsShipping = $('#checkBilling');

    if (billingSameAsShipping.length) {
        billingSameAsShipping.on('change', function (e) {
            var elem = $(this);
            elem.val(elem.is(':checked') ? 'YES' : 'NO');
            if (elem.is(':checked')) {
                $('#hidden-fields').find('select, input, tel').removeClass('required');
                $("#billingSameAsShipping").attr('value', 'YES');
            } else {
                $('#hidden-fields').find('select, input, tel').addClass('required');
                $("#billingSameAsShipping").attr('value', 'NO');
            }
        });
    }

    //Decline links method
    $(".noThanksLink").on('click', function () {
        if (window.location.search == '') {
            window.location.href = 'thank-you.php?decline=1';
        }
        else {
            window.location.href = 'thank-you.php' + window.location.search + '&decline=1';
        }
    });

    $('.active > input').val();
    $('.active > input').focus();

});

//CVV Method to close tool-tip popup
$(document).mouseup(function (e)
{
    var container = $("#toolTipLayer");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
});

//downsell from LP action
function RedirectToLPDownsell() {
    if (window.location.search == '') {
        window.location.href = 'check-out.php?lpdownsell=1';
    } else {
        window.location.href = 'check-out.php' + window.location.search + '&lpdownsell=1';
    }
}
//downsell from CP action
function RedirectToCPdownsell() {
    if (window.location.search == '') {
        window.location.href = 'check-out.php?downsell=1';
    } else {
        window.location.href = 'check-out.php' + window.location.search + '&downsell=1';
    }
}

// Trigger Upsell for submit with preloader
function submitUpsell() {
    $('#preloader').css({'display' : 'block'});
    $('#upsell_form').submit();
}

/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,d=d.concat(c.errorList)}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b===this.lastElement)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var b,c=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(b=0;c[b];b++)this.settings.unhighlight.call(this,c[b],this.settings.errorClass,"");else c.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?this.findByName(b.name).filter(":checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.off(".validate-equalTo").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});

$(document).ready(function () {

    if (jQuery().validate == undefined)
        return;

    $.validator.addMethod('CCExp', function (value, element, params) {
        var minMonth = new Date().getMonth() + 1;
        var minYear = new Date().getFullYear();
        var month = parseInt($(params.month).val(), 10);
        var year = parseInt($(params.year).val(), 10);

        if ('20' + year > minYear && month > 0 || ('20' + year == minYear && month >= minMonth)) {
            $($(params.month)).removeClass('error');
            $($(params.month)).addClass('valid');
            return true;
        } else {
            return false;
        }
    });

    // make sure forms exists
    if ($("#customer_form").length > 0) {

        $("#customer_form").validate({
            submitHandler: function(form){
                $('#preloader').css({'display' : 'block'});
                form.submit();
            },
            rules: {
                fields_fname: "required",
                fields_lname: "required",
                fields_address1: "required",
                fields_city: "required",
                fields_country: "required",
                fields_zip: {
                    required: true,
                    maxlength: 6,
                    minlength: 6
                },
                fields_state: "required",
                fields_phone: {
                    required: true,
                    maxlength: 10,
                    minlength: 10
                },
                fields_email: {
                    required: true,
                    email: true
                }
            },
            errorPlacement: function (error, element) {

            }
        });
    }

    if ($("#billing_form").length > 0) {

        $("#billing_form").validate({
            submitHandler: function(form){
                $('#preloader').css({'display' : 'block'});
                form.submit();
            },
            rules: {
                cc_number: {
                    required: true,
                    minlength: 16,
                    maxlength: 16
                },
                cc_cvv: {
                    required: true,
                    minlength: 3,
                    maxlength: 3
                },
                fields_expmonth: {
                    required: true,
                    CCExp: {
                        month: '#fields_expmonth',
                        year: '#fields_expyear'
                    }
                },
                fields_expyear: {
                    required: true,
                    CCExp: {
                        month: '#fields_expmonth',
                        year: '#fields_expyear'
                    }
                },
                billing_fname: "required",
                billing_lname: "required",
                billing_address1: "required",
                billing_city: "required",
                billing_postcode: {
                    required: true,
                    maxlength: 6,
                    minlength: 6
                },
                billing_state: "required",
                billing_phone: {
                    required: true,
                    maxlength: 10,
                    minlength: 10
                },
                billing_email: {
                    required: true,
                    email: true
                },
                fields_fname: "required",
                fields_lname: "required",
                fields_address1: "required",
                fields_city: "required",
                fields_country: "required",
                fields_zip: {
                    required: true,
                    maxlength: 6,
                    minlength: 6
                },
                fields_state: "required",
                fields_phone: {
                    required: true,
                    maxlength: 10,
                    minlength: 10
                },
                fields_email: {
                    required: true,
                    email: true
                }
            },
            errorPlacement: function (error, element) {

            },
            success: function (x) {

            }
        });
    }

});


//function numbersOnly(e) {
//    e = (e) ? e : window.event;
//    var charCode = (e.which) ? e.which : e.keyCode;
//    if (charCode > 31 && (charCode < 48 || charCode > 57))
//        return false;
//    return true;
//
//}

function numbersOnly(event){
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


/*!
 Colorbox 1.6.3
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=n("button","Slideshow"),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);


function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($email)) {
        return false;
    }
    else {
        return true;
    }
}

function checkcustomerform() {
    var re = /^[a-zA-Z ]*$/;
    var error = 0;

    if ($.trim($("#fields_fname").val()) == "") {
        error++;
        toastr["error"]("Please enter your first name.");
        return false;
    }
    else if (!re.test($("#field_fname").val())) {
        error++;
        toastr["error"]("Your name can consist only of letters");
        return false;
    }
    else if ($.trim($("#fields_lname").val()) == "") {
        error++;
        toastr["error"]("Please enter your last name.");
        return false;
    }
    else if (!re.test($("#fields_lname").val())) {
        error++;
        toastr["error"]("Your name can consist only of letters");
        return false;
    }
    else if ($.trim($("#fields_address1").val()) == "") {
        error++;
        toastr["error"]("Please enter your address.");
        return false;
    }
    else if ($.trim($("#fields_city").val()) == "") {
        error++;
        toastr["error"]("Please enter your city.");
        return false;
    }
    else if ($.trim($("#fields_country").val()) == "") {
        error++;
        toastr["error"]("Please select country");
    }
    else if (($("#fields_state").val() == "")) {
        error++;
        toastr["error"]("Please select province");

    }
    else if ($.trim($("#fields_zip").val()) == "") {
        error++;
        toastr["error"]("Zip/Postal Code is required!");

    }
    else if ($("#fields_zip").val().length < 6) {
        error++;
        toastr["error"]("Please enter a valid postal code.");
        return false;
    }
    else if ($.trim($("#fields_phone").val()) == "") {
        error++;
        toastr["error"]("Please enter your phone number.");
        return false;
    }
    else if ($("#fields_phone").val().length < 10) {
        error++;
        toastr["error"]("Please enter a valid phone number.");
        return false;
    }
    else if ($.trim($("#fields_email").val()) == "") {
        error++;
        toastr["error"]("Please enter your email address.");
        return false;
    }
    else if ($.trim($("#fields_email").val()) == "") {
        error++;
        toastr["error"]("Please enter your email address.");
        return false;
    }
    else if (validateEmail($("#fields_email").val()) == false) {
        error++;
        toastr["error"]("Please enter valid email address.");
        return false;
    }
}

function checkbillingform() {
    var re = /^[a-zA-Z ]*$/;
    var error = 0;

    if(window.location.href.search("[?&]lpdownsell") > -1){

        if ($.trim($("#fields_fname").val()) == "") {
            error++;
            toastr["error"]("Please enter your first name.");
            return false;
        }
        else if (!re.test($("#field_fname").val())) {
            error++;
            toastr["error"]("Your name can consist only of letters");
            return false;
        }
        else if ($.trim($("#fields_lname").val()) == "") {
            error++;
            toastr["error"]("Please enter your last name.");
            return false;
        }
        else if (!re.test($("#fields_lname").val())) {
            error++;
            toastr["error"]("Your name can consist only of letters");
            return false;
        }
        else if ($.trim($("#fields_address1").val()) == "") {
            error++;
            toastr["error"]("Please enter your address.");
            return false;
        }
        else if ($.trim($("#fields_city").val()) == "") {
            error++;
            toastr["error"]("Please enter your city.");
            return false;
        }
        else if ($.trim($("#fields_country").val()) == "") {
            error++;
            toastr["error"]("Please select country");
            return false;
        }
        else if (($("#fields_state").val() == "")) {
            error++;
            toastr["error"]("Please select province");
            return false;
        }
        else if ($.trim($("#fields_zip").val()) == "") {
            error++;
            toastr["error"]("Zip/Postal Code is required!");
            return false;
        }
        else if($("#fields_zip").val().length < 5)
        {
            error++;
            toastr["error"]("Please enter a valid postal code.");
            return false;
        }
        else if ($.trim($("#fields_email").val()) == "") {
            error++;
            toastr["error"]("Please enter your email address.");
            return false;
        }
        else if (validateEmail($("#fields_email").val()) == false) {
            error++;
            toastr["error"]("Please enter valid email address.");
            return false;
        }

        else if ($.trim($("#fields_phone").val()) == "") {
            error++;
            toastr["error"]("Please enter your phone number.");
            return false;
        }
        else if ($("#fields_phone").val().length < 10) {
            error++;
            toastr["error"]("Please enter a valid phone number.");
            return false;
        }

        else if ($.trim($("#fields_email").val()) == "") {
            error++;
            toastr["error"]("Please enter your email address.");
            return false;
        }



    }

    if ($("#billingSameAsShipping").val() == "NO") {
        if ($.trim($("#billing_fname").val()) == "") {
            error++;
            toastr["error"]("Please enter your first name.");
            return false;
        }
        else if (!re.test($("#billing_fname").val())) {
            error++;
            toastr["error"]("Your name can consist only of letters");
            return false;
        }
        else if ($.trim($("#billing_lname").val()) == "") {
            error++;
            toastr["error"]("Please enter your last name.");
            return false;
        }
        else if (!re.test($("#billing_lname").val())) {
            error++;
            toastr["error"]("Your name can consist only of letters");
            return false;
        }
        else if ($.trim($("#billing_address1").val()) == "") {
            error++;
            toastr["error"]("Please enter your address.");
            return false;
        }
        else if ($.trim($("#billing_country").val()) == "") {
            error++;
            toastr["error"]("Please select country");
        }
        else if ($.trim($("#billing_city").val()) == "") {
            error++;
            toastr["error"]("Please enter your city.");
            return false;
        }
        else if (($("#billing_state").val() == "")) {
            error++;
            toastr["error"]("Please select province");
            return false;
        }
        else if ($.trim($("#billing_postcode").val()) == "") {
            error++;
            toastr["error"]("Zip/Postal Code is required!");
            return false;
        }
        else if($("#billing_postcode").val().length < 5)
        {
            error++;
            toastr["error"]("Please enter a valid zip code.");
            return false;
        }
    }


    if ($.trim($("#cc_type").val()) == "") {
        error++;
        toastr["error"]("Please select a credit card type.");
        return false;
    }
    else if ($.trim($("#cc_number").val()) == "") {
        error++;
        toastr["error"]("Please enter your credit card number.");
        return false;
    }
    else if ($("#cc_number").val().length < 13) {
        error++;
        toastr["error"]("The number you have entered is not a valid credit card number, please check and try again.");
        return false;
    }
    else if ($("#cc_number").val().length > 19) {
        error++;
        toastr["error"]("The number you have entered is not a valid credit card number, please check your entry and try again.");
        return false;
    }
    else if (!CheckDate()) {
        error++;
        toastr["error"]("Please correct the expiration month/year.");
        return false;
    }
    else if ($.trim($("#cc_cvv").val()) == "") {
        error++;
        toastr["error"]("Please enter your cvv number.");
        return false;
    }
    else if ($("#cc_cvv").val().length < 3) {
        error++;
        toastr["error"]("The CVV number you have entered is not valid, please check your entry and try again.");
        return false;
    }

}

function CheckDate() {
    var minMonth = new Date().getMonth() + 1;
    var minYear = new Date().getFullYear();
    var month = parseInt($('#fields_expmonth').val(), 10);
    var year = parseInt($('#fields_expyear').val(), 10);

    if ('20' + year > minYear || ('20' + year == minYear && month >= minMonth)) {
        return true;
    } else {
        return false;
    }
}

// Set fields_state/billing_state based on country. Can use used with country dropdown or hidden country value
$(document).ready(function(){

    if ($("#customer_form, #billing_form").length > 0){
        $('#fields_country, #billing_country').change(function(){
            var val = $(this).val();
            var id = $(this).attr('id');
            var stateFieldId = (id.indexOf('fields_') > -1) ? 'fields' : 'billing';
            if (countryFields.hasOwnProperty(val)) {
                $('#'+stateFieldId+'_state').html(countryFields[val]);
            } else {
                $('#'+stateFieldId+'_state').html('<option>Select a country</option>')
            }
        });
        if ($('#fields_country, #billing_country').val() != ""){
            var val = $('#fields_country, #billing_country').val();
            var id = $('#fields_country, #billing_country').attr('id');
            var stateFieldId = (id.indexOf('fields_') > -1) ? 'fields' : 'billing';
            if (countryFields.hasOwnProperty(val)) {
                $('#'+stateFieldId+'_state').html(countryFields[val]);
            } else if (val = 'CA'){
                $('#'+stateFieldId+'_state').html('<option>Select a Province</option>')
            } else if (val = 'US'){
                $('#'+stateFieldId+'_state').html('<option>Select a State</option>')
            } else if (val = 'GB'){
                $('#'+stateFieldId+'_state').html('<option>Select a County</option>')
            }
        }
    }

});

// Country States DB
var countryFields = {
    'CA' : '<option value="">Select Province</option><option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NB">New Brunswick</option><option value="NL">Newfoundland and Labrador</option><option value="NT">Northwest Territories</option><option value="NS">Nova Scotia</option><option value="NU">Nunavut</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon</option>',
//UNITED STATES
    'US' : '<option value="">Select State</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="AE-A">Armed Forces Africa</option><option value="AA">Armed Forces Americas</option><option value="AE-C">Armed Forces Canada</option><option value="AE-E">Armed Forces Europe</option><option value="AE-M">Armed Forces Middle East</option><option value="AP">Armed Forces Pacific</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FM">Federated States of Micronesia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="MH">Republic of Marshall Islands</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands of the U.S.</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>',
//UNITED KINGDOM
    'GB' : '<option value="">Select County</option><option value="GB-ABE">Aberdeen City</option><option value="GB-ABD">Aberdeenshire</option><option value="GB-ANS">Angus</option><option value="GB-ANT">Antrim</option><option value="GB-ARD">Ards</option><option value="GB-AGB">Argyll and Bute</option><option value="GB-ARM">Armagh, County of</option><option value="GB-BLA">Ballymena</option><option value="GB-BLY">Ballymoney</option><option value="GB-BNB">Banbridge</option><option value="GB-BDG">Barking and Dagenham</option><option value="GB-BNE">Barnet</option><option value="GB-BNS">Barnsley</option><option value="GB-BAS">Bath and North East Somerset</option><option value="GB-BBO">Bedford Borough</option><option value="GB-BDF">Bedfordshire</option><option value="GB-BFS">Belfast</option><option value="GB-BEX">Bexley</option><option value="GB-BIR">Birmingham</option><option value="GB-BBD">Blackburn with Darwen</option><option value="GB-BPL">Blackpool</option><option value="GB-BGW">Blaenau Gwent</option><option value="GB-BOL">Bolton</option><option value="GB-BMH">Bournemouth</option><option value="GB-BRC">Bracknell Forest</option><option value="GB-BRD">Bradford</option><option value="GB-BEN">Brent</option><option value="GB-BGE">Bridgend</option><option value="GB-BNH">Brighton and Hove</option><option value="GB-BST">Bristol, City of</option><option value="GB-BRY">Bromley</option><option value="GB-BUC">Buckingham</option><option value="GB-BKM">Buckinghamshire</option><option value="GB-BUR">Bury</option><option value="GB-CAY">Caerphilly</option><option value="GB-CLD">Calderdale</option><option value="GB-CAM">Cambridgeshire</option><option value="GB-CMD">Camden</option><option value="GB-CRF">Cardiff</option><option value="GB-CMN">Carmarthenshire</option><option value="GB-CKF">Carrickfergus</option><option value="GB-CSR">Castlereagh</option><option value="GB-CGN">Ceredigion</option><option value="GB-CHS">Cheshire</option><option value="GB-CHE">Cheshire East</option><option value="GB-CWC">Cheshire West and Chester</option><option value="GB-CLK">Clackmannanshire</option><option value="GB-CLR">Coleraine</option><option value="GB-CWY">Conwy</option><option value="GB-CKT">Cookstown</option><option value="GB-CON">Cornwall</option><option value="GB-COV">Coventry</option><option value="GB-CGV">Craigavon</option><option value="GB-CRY">Croydon</option><option value="GB-CMA">Cumbria</option><option value="GB-DAL">Darlington</option><option value="GB-DEN">Denbighshire</option><option value="GB-DER">Derby</option><option value="GB-DBY">Derbyshire</option><option value="GB-DRY">Derry</option><option value="GB-DEV">Devon</option><option value="GB-DNC">Doncaster</option><option value="GB-DOR">Dorset</option><option value="GB-DOW">Down</option><option value="GB-DUD">Dudley</option><option value="GB-DGY">Dumfries and Galloway</option><option value="GB-DND">Dundee City</option><option value="GB-DGN">Dungannon</option><option value="GB-DUR">Durham, County of</option><option value="GB-EAL">Ealing</option><option value="GB-EAY">East Ayrshire</option><option value="GB-EDU">East Dunbartonshire</option><option value="GB-ELN">East Lothian</option><option value="GB-ERW">East Renfrewshire</option><option value="GB-ERY">East Riding of Yorkshire</option><option value="GB-ESX">East Sussex</option><option value="GB-EDH">Edinburgh, City of</option><option value="GB-ELS">Eilean Siar</option><option value="GB-ENF">Enfield</option><option value="GB-ESS">Essex</option><option value="GB-FAL">Falkirk</option><option value="GB-FER">Fermanagh, County of</option><option value="GB-FIF">Fife</option><option value="GB-FLN">Flintshire</option><option value="GB-GAT">Gateshead</option><option value="GB-GLG">Glasgow City</option><option value="GB-GLS">Gloucestershire</option><option value="GB-GLO">Greater London</option><option value="GB-GRE">Greenwich</option><option value="GB-GGY">Guernsey</option><option value="GB-GWN">Gwynedd</option><option value="GB-HCK">Hackney</option><option value="GB-HAL">Halton</option><option value="GB-HMF">Hammersmith and Fulham</option><option value="GB-HAM">Hampshire</option><option value="GB-HRY">Haringey</option><option value="GB-HRW">Harrow</option><option value="GB-HPL">Hartlepool</option><option value="GB-HAV">Havering</option><option value="GB-HEF">Herefordshire, County of</option><option value="GB-HTF">Hertford</option><option value="GB-HRT">Hertfordshire</option><option value="GB-HLD">Highland</option><option value="GB-HIL">Hillingdon</option><option value="GB-HNS">Hounslow</option><option value="GB-IVC">Inverclyde</option><option value="GB-AGY">Isle of Anglesey</option><option value="GB-IOM">Isle of Man</option><option value="GB-IOW">Isle of Wight</option><option value="GB-IOS">Isles of Scilly</option><option value="GB-ISL">Islington</option><option value="GB-JEY">Jersey</option><option value="GB-KEC">Kensington and Chelsea</option><option value="GB-KEN">Kent</option><option value="GB-KHL">Kingston upon Hull, City of</option><option value="GB-KTT">Kingston upon Thames</option><option value="GB-KIR">Kirklees</option><option value="GB-KWL">Knowsley</option><option value="GB-LBH">Lambeth</option><option value="GB-LAN">Lancashire</option><option value="GB-LRN">Larne</option><option value="GB-LDS">Leeds</option><option value="GB-LCE">Leicester</option><option value="GB-LEC">Leicestershire</option><option value="GB-LEW">Lewisham</option><option value="GB-LMV">Limavady</option><option value="GB-LIN">Lincolnshire</option><option value="GB-LSB">Lisburn</option><option value="GB-LIV">Liverpool</option><option value="GB-LND">London, City of</option><option value="GB-LUT">Luton</option><option value="GB-MFT">Magherafelt</option><option value="GB-MAN">Manchester</option><option value="GB-MDW">Medway</option><option value="GB-MTY">Merthyr Tydfil</option><option value="GB-MRT">Merton</option><option value="GB-MDB">Middlesbrough</option><option value="GB-MLN">Midlothian</option><option value="GB-MIK">Milton Keynes</option><option value="GB-MON">Monmouthshire</option><option value="GB-MRY">Moray</option><option value="GB-MYL">Moyle</option><option value="GB-NTL">Neath Port Talbot</option><option value="GB-NET">Newcastle upon Tyne</option><option value="GB-NWM">Newham</option><option value="GB-NWP">Newport</option><option value="GB-NYM">Newry and Mourne</option><option value="GB-NTA">Newtownabbey</option><option value="GB-NFK">Norfolk</option><option value="GB-NAY">North Ayrshire</option><option value="GB-NDN">North Down</option><option value="GB-NEL">North East Lincolnshire</option><option value="GB-NLK">North Lanarkshire</option><option value="GB-NLN">North Lincolnshire</option><option value="GB-NSM">North Somerset</option><option value="GB-NTY">North Tyneside</option><option value="GB-NYK">North Yorkshire</option><option value="GB-NTH">Northamptonshire</option><option value="GB-NBL">Northumberland</option><option value="GB-NGM">Nottingham</option><option value="GB-NTT">Nottinghamshire</option><option value="GB-OLD">Oldham</option><option value="GB-OMH">Omagh</option><option value="GB-ORK">Orkney Islands</option><option value="GB-OXF">Oxfordshire</option><option value="GB-PEM">Pembrokeshire</option><option value="GB-PKN">Perth and Kinross</option><option value="GB-PTE">Peterborough</option><option value="GB-PLY">Plymouth</option><option value="GB-POL">Poole</option><option value="GB-POR">Portsmouth</option><option value="GB-POW">Powys</option><option value="GB-RDG">Reading</option><option value="GB-RDB">Redbridge</option><option value="GB-RCC">Redcar and Cleveland</option><option value="GB-RFW">Renfrewshire</option><option value="GB-RCT">Rhondda Cynon Taff</option><option value="GB-RIC">Richmond upon Thames</option><option value="GB-RCH">Rochdale</option><option value="GB-ROT">Rotherham</option><option value="GB-RUT">Rutland</option><option value="GB-SLF">Salford</option><option value="GB-SAW">Sandwell</option><option value="GB-SCB">Scottish Borders, The</option><option value="GB-SFT">Sefton</option><option value="GB-SHF">Sheffield</option><option value="GB-ZET">Shetland Islands</option><option value="GB-SHR">Shropshire</option><option value="GB-SLG">Slough</option><option value="GB-SOL">Solihull</option><option value="GB-SOM">Somerset</option><option value="GB-SAY">South Ayrshire</option><option value="GB-SGC">South Gloucestershire</option><option value="GB-SLK">South Lanarkshire</option><option value="GB-STY">South Tyneside</option><option value="GB-SYK">South Yorkshire</option><option value="GB-STH">Southampton</option><option value="GB-SOS">Southend-on-Sea</option><option value="GB-SWK">Southwark</option><option value="GB-SHN">St. Helens</option><option value="GB-STS">Staffordshire</option><option value="GB-STG">Stirling</option><option value="GB-SKP">Stockport</option><option value="GB-STT">Stockton-on-Tees</option><option value="GB-STE">Stoke-on-Trent</option><option value="GB-STB">Strabane</option><option value="GB-SFK">Suffolk</option><option value="GB-SND">Sunderland</option><option value="GB-SRY">Surrey</option><option value="GB-STN">Sutton</option><option value="GB-SWA">Swansea</option><option value="GB-SWD">Swindon</option><option value="GB-TAM">Tameside</option><option value="GB-TFW">Telford and Wrekin</option><option value="GB-THR">Thurrock</option><option value="GB-TOB">Torbay</option><option value="GB-TOF">Torfaen</option><option value="GB-TWH">Tower Hamlets</option><option value="GB-TRF">Trafford</option><option value="GB-VGL">Vale of Glamorgan, The</option><option value="GB-WKF">Wakefield</option><option value="GB-WLL">Walsall</option><option value="GB-WFT">Waltham Forest</option><option value="GB-WND">Wandsworth</option><option value="GB-WRT">Warrington</option><option value="GB-WAR">Warwickshire</option><option value="GB-WBK">West Berkshire</option><option value="GB-WDU">West Dunbartonshire</option><option value="GB-WLN">West Lothian</option><option value="GB-WMD">West Midlands</option><option value="GB-WSX">West Sussex</option><option value="GB-WYK">West Yorkshire</option><option value="GB-WSM">Westminster</option><option value="GB-WGN">Wigan</option><option value="GB-WIL">Wiltshire</option><option value="GB-WNM">Windsor and Maidenhead</option><option value="GB-WRL">Wirral</option><option value="GB-WOK">Wokingham</option><option value="GB-WLV">Wolverhampton</option><option value="GB-WOC">Worcester</option><option value="GB-WOR">Worcestershire</option><option value="GB-WRX">Wrexham</option><option value="GB-YOR">York</option>',
//AUSTRALIA
    'AU' : '<option value="AU-ACT">Australian Capital Territory</option><option value="AU-NSW">New South Wales</option><option value="AU-NT">Northern Territory</option><option value="AU-QLD">Queensland</option><option value="AU-SA">South Australia</option><option value="AU-TAS">Tasmania</option><option value="AU-VIC">Victoria</option><option value="AU-WA">Western Australia</option>',
//GERMANY
    'DE' : '<option value="DE-BW">"Baden-Württemberg</option><option value="DE-BY">"Bayern</option><option value="DE-BE">"Berlin</option><option value="DE-BB">"Brandenburg</option><option value="DE-HB">"Bremen</option><option value="DE-HH">"Hamburg</option><option value="DE-HE">"Hessen</option><option value="DE-MV">"Mecklenburg-Vorpommern</option><option value="DE-NI">"Niedersachsen</option><option value="DE-NW">"Nordrhein-Westfalen</option><option value="DE-RP">"Rheinland-Pfalz</option><option value="DE-SL">"Saarland</option><option value="DE-SN">"Sachsen</option><option value="DE-ST">"Sachsen-Anhalt</option><option value="DE-SH">"Schleswig-Holstein</option><option value="DE-TH">"Thüringen</option>',
//NEW ZEALAND
    'NZ' : '<option value="NZ-AUK">Auckland</option><option value="NZ-BOP">Bay of Plenty</option><option value="NZ-CAN">Canterbury</option><option value="NZ-CIT">Chatham Islands Territory</option><option value="NZ-GIS">Gisborne District</option><option value="NZ-HKB">Hawkes\'s Bay</option><option value="NZ-MWT">Manawatu-Wanganui</option><option value="NZ-MBH">Marlborough District</option><option value="NZ-NSN">Nelson City</option><option value="NZ-N">North Island</option><option value="NZ-NTL">Northland</option><option value="NZ-OTA">Otago</option><option value="NZ-S">South Island</option><option value="NZ-STL">Southland</option><option value="NZ-TKI">Taranaki</option><option value="NZ-TAS">Tasman District</option><option value="NZ-WKO">Waikato</option><option value="NZ-WGN">Wellington</option><option value="NZ-WTC">West Coast</option>',
//ITALY
    'IT' : '<option value="IT-65">Abruzzo</option><option value="IT-AG">Agrigento</option><option value="IT-AL">Alessandria</option><option value="IT-AN">Ancona</option><option value="IT-AO">Aosta</option><option value="IT-AR">Arezzo</option><option value="IT-AP">Ascoli Piceno</option><option value="IT-AT">Asti</option><option value="IT-AV">Avellino</option><option value="IT-BA">Bari</option><option value="IT-BT">Barletta-Andria-Trani</option><option value="IT-77">Basilicata</option><option value="IT-BL">Belluno</option><option value="IT-BN">Benevento</option><option value="IT-BG">Bergamo</option><option value="IT-BI">Biella</option><option value="IT-BO">Bologna</option><option value="IT-BZ">Bolzano</option><option value="IT-BS">Brescia</option><option value="IT-BR">Brindisi</option><option value="IT-CA">Cagliari</option><option value="IT-78">Calabria</option><option value="IT-CL">Caltanissetta</option><option value="IT-72">Campania</option><option value="IT-CB">Campobasso</option><option value="IT-CI">Carbonia-Iglesias</option><option value="IT-CE">Caserta</option><option value="IT-CT">Catania</option><option value="IT-CZ">Catanzaro</option><option value="IT-CH">Chieti</option><option value="IT-CO">Como</option><option value="IT-CS">Cosenza</option><option value="IT-CR">Cremona</option><option value="IT-KR">Crotone</option><option value="IT-CN">Cuneo</option><option value="IT-45">Emilia-Romagna</option><option value="IT-EN">Enna</option><option value="IT-FM">Fermo</option><option value="IT-FE">Ferrara</option><option value="IT-FI">Firenze</option><option value="IT-FG">Foggia</option><option value="IT-FC">Forli-Cesena</option><option value="IT-36">Friuli-Venezia Giulia</option><option value="IT-FR">Frosinone</option><option value="IT-GE">Genova</option><option value="IT-GO">Gorizia</option><option value="IT-GR">Grosseto</option><option value="IT-IM">Imperia</option><option value="IT-IS">Isernia</option><option value="IT-AQ">LAquila</option><option value="IT-SP">La Spezia</option><option value="IT-LT">Latina</option><option value="IT-62">Lazio</option><option value="IT-LE">Lecce</option><option value="IT-LC">Lecco</option><option value="IT-42">Liguria</option><option value="IT-LI">Livorno</option><option value="IT-LO">Lodi</option><option value="IT-25">Lombardia</option><option value="IT-LU">Lucca</option><option value="IT-MC">Macerata</option><option value="IT-MN">Mantova</option><option value="IT-57">Marche</option><option value="IT-MS">Massa-Carrara</option><option value="IT-MT">Matera</option><option value="IT-VS">Medio Campidano</option><option value="IT-ME">Messina</option><option value="IT-MI">Milano</option><option value="IT-MO">Modena</option><option value="IT-67">Molise</option><option value="IT-MB">Monza e Brianza</option><option value="IT-NA">Napoli</option><option value="IT-NO">Novara</option><option value="IT-NU">Nuoro</option><option value="IT-OG">Ogliastra</option><option value="IT-OT">Olbia-Tempio</option><option value="IT-OR">Oristano</option><option value="IT-PD">Padova</option><option value="IT-PA">Palermo</option><option value="IT-PR">Parma</option><option value="IT-PV">Pavia</option><option value="IT-PG">Perugia</option><option value="IT-PU">Pesaro e Urbino</option><option value="IT-PE">Pescara</option><option value="IT-PC">Piacenza</option><option value="IT-21">Piemonte</option><option value="IT-PI">Pisa</option><option value="IT-PT">Pistoia</option><option value="IT-PN">Pordenone</option><option value="IT-PZ">Potenza</option><option value="IT-PO">Prato</option><option value="IT-75">Puglia</option><option value="IT-RG">Ragusa</option><option value="IT-RA">Ravenna</option><option value="IT-RC">Reggio Calabria</option><option value="IT-RE">Reggio Emilia</option><option value="IT-RI">Rieti</option><option value="IT-RN">Rimini</option><option value="IT-RM">Roma</option><option value="IT-RO">Rovigo</option><option value="IT-SA">Salerno</option><option value="IT-88">Sardegna</option><option value="IT-SS">Sassari</option><option value="IT-SV">Savona</option><option value="IT-82">Sicilia</option><option value="IT-SI">Siena</option><option value="IT-SR">Siracusa</option><option value="IT-SO">Sondrio</option><option value="IT-TA">Taranto</option><option value="IT-TE">Teramo</option><option value="IT-TR">Terni</option><option value="IT-TO">Torino</option><option value="IT-52">Toscana</option><option value="IT-TP">Trapani</option><option value="IT-32">Trentino-Alto Adige</option><option value="IT-TN">Trento</option><option value="IT-TV">Treviso</option><option value="IT-TS">Trieste</option><option value="IT-UD">Udine</option><option value="IT-55">Umbria</option><option value="IT-23">Valle dAosta</option><option value="IT-VA">Varese</option><option value="IT-34">Veneto</option><option value="IT-VE">Venezia</option><option value="IT-VB">Verbano-Cusio-Ossola</option><option value="IT-VC">Vercelli</option><option value="IT-VR">Verona</option><option value="IT-VV">Vibo Valentia</option><option value="IT-VI">Vicenza</option><option value="IT-VT">Viterbo</option>',
//NETHERLANDS
    'NL' : '<option value="NL-DR">Drenthe</option><option value="NL-FL">Flevoland</option><option value="NL-FR">Friesland</option><option value="NL-GE">Gelderland</option><option value="NL-GR">Groningen</option><option value="NL-LI">Limburg</option><option value="NL-NB">Noord-Brabant</option><option value="NL-NH">Noord-Holland</option><option value="NL-OV">Overijssel</option><option value="NL-UT">Utrecht</option><option value="NL-ZE">Zeeland</option><option value="NL-ZH">Zuid-Holland</option>',
//FRANCE
    'FR' : '<option value="FR-01">Ain</option><option value="FR-02">Aisne</option><option value="FR-03">Allier</option><option value="FR-04">Alpes-de-Haute-Provence</option><option value="FR-06">Alpes-Maritimes</option><option value="FR-07">Ardèche</option><option value="FR-08">Ardennes</option><option value="FR-09">Ariège</option><option value="FR-10">Aube</option><option value="FR-11">Aude</option><option value="FR-12">Aveyron</option><option value="FR-67">Bas-Rhin</option><option value="FR-13">Bouches-du-Rhône</option><option value="FR-14">Calvados</option><option value="FR-15">Cantal</option><option value="FR-16">Charente</option><option value="FR-17">Charente-Maritime</option><option value="FR-18">Cher</option><option value="FR-CP">Clipperton</option><option value="FR-19">Corrèze</option><option value="FR-2A">Corse-du-Sud</option><option value="FR-21">Côte-d\'Or</option><option value="FR-22">Côtes-d\'Armor</option><option value="FR-23">Creuse</option><option value="FR-79">Deux-Sèvres</option><option value="FR-24">Dordogne</option><option value="FR-25">Doubs</option><option value="FR-26">Drôme</option><option value="FR-91">Essonne</option><option value="FR-27">Eure</option><option value="FR-28">Eure-et-Loir</option><option value="FR-29">Finistère</option><option value="FR-30">Gard</option><option value="FR-32">Gers</option><option value="FR-33">Gironde</option><option value="FR-68">Haut-Rhin</option><option value="FR-2B">Haute-Corse</option><option value="FR-31">Haute-Garonne</option><option value="FR-43">Haute-Loire</option><option value="FR-52">Haute-Marne</option><option value="FR-70">Haute-Saône</option><option value="FR-74">Haute-Savoie</option><option value="FR-87">Haute-Vienne</option><option value="FR-05">Hautes-Alpes</option><option value="FR-65">Hautes-Pyrénées</option><option value="FR-92">Hauts-de-Seine</option><option value="FR-34">Hérault</option><option value="FR-35">Ille-et-Vilaine</option><option value="FR-36">Indre</option><option value="FR-37">Indre-et-Loire</option><option value="FR-38">Isère</option><option value="FR-39">Jura</option><option value="FR-40">Landes</option><option value="FR-41">Loir-et-Cher</option><option value="FR-42">Loire</option><option value="FR-44">Loire-Atlantique</option><option value="FR-45">Loiret</option><option value="FR-46">Lot</option><option value="FR-47">Lot-et-Garonne</option><option value="FR-48">Lozère</option><option value="FR-49">Maine-et-Loire</option><option value="FR-50">Manche</option><option value="FR-51">Marne</option><option value="FR-53">Mayenne</option><option value="FR-YT">Mayotte</option><option value="FR-54">Meurthe-et-Moselle</option><option value="FR-55">Meuse</option><option value="FR-56">Morbihan</option><option value="FR-57">Moselle</option><option value="FR-58">Nièvre</option><option value="FR-59">Nord</option><option value="FR-NC">Nouvelle-Calédonie</option><option value="FR-60">Oise</option><option value="FR-61">Orne</option><option value="FR-75">Paris</option><option value="FR-62">Pas-de-Calais</option><option value="FR-PF">Polynésie française</option><option value="FR-63">Puy-de-Dôme</option><option value="FR-64">Pyrénées-Atlantiques</option><option value="FR-66">Pyrénées-Orientales</option><option value="FR-69">Rhône</option><option value="FR-BL">Saint-Barthélemy</option><option value="FR-MF">Saint-Martin</option><option value="FR-PM">Saint-Pierre-et-Miquelon</option><option value="FR-71">Saône-et-Loire</option><option value="FR-72">Sarthe</option><option value="FR-73">Savoie</option><option value="FR-77">Seine-et-Marne</option><option value="FR-76">Seine-Maritime</option><option value="FR-93">Seine-Saint-Denis</option><option value="FR-80">Somme</option><option value="FR-81">Tarn</option><option value="FR-82">Tarn-et-Garonne</option><option value="FR-TF">Terres Australes Françaises</option><option value="FR-90">Territoire de Belfort</option><option value="FR-95">Val-d\'Oise</option><option value="FR-94">Val-de-Marne</option><option value="FR-83">Var</option><option value="FR-84">Vaucluse</option><option value="FR-85">Vendée</option><option value="FR-86">Vienne</option><option value="FR-88">Vosges</option><option value="FR-WF">Wallis et Futuna</option><option value="FR-89">Yonne</option><option value="FR-78">Yvelines</option>',
//SWITZERLAND
    'CH' : '<option value="CH-AG">Aargau (de)</option><option value="CH-AR">Appenzell Ausserrhoden (de)</option><option value="CH-AI">Appenzell Innerrhoden (de)</option><option value="CH-BL">Basel-Landschaft (de)</option><option value="CH-BS">Basel-Stadt (de)</option><option value="CH-BE">Bern (de)</option><option value="CH-FR">Fribourg (fr)</option><option value="CH-GE">Genève (fr)</option><option value="CH-GL">Glarus (de)</option><option value="CH-GR">Graubünden (de)</option><option value="CH-JU">Jura (fr)</option><option value="CH-LU">Luzern (de)</option><option value="CH-NE">Neuchâtel (fr)</option><option value="CH-NW">Nidwalden (de)</option><option value="CH-OW">Obwalden (de)</option><option value="CH-SG">Sankt Gallen (de)</option><option value="CH-SH">Schaffhausen (de)</option><option value="CH-SZ">Schwyz (de)</option><option value="CH-SO">Solothurn (de)</option><option value="CH-TG">Thurgau (de)</option><option value="CH-TI">Ticino (it)</option><option value="CH-UR">Uri (de)</option><option value="CH-VS">Valais (fr)</option><option value="CH-VD">Vaud (fr)</option><option value="CH-ZG">Zug (de)</option><option value="CH-ZH">Zürich (de)</option>',
//BELGIUM
    'BE' : '<option value="BE-VAN">Antwerpen</option><option value="BE-WBR">Brabant Wallon</option><option value="BE-BRU">Brussels</option><option value="BE-WHT">Hainaut</option><option value="BE-WLG">Liège</option><option value="BE-VLI">Limburg</option><option value="BE-WLX">Luxembourg</option><option value="BE-WNA">Namur</option><option value="BE-VOV">Oost-Vlaanderen</option><option value="BE-VBR">Vlaams Brabant</option><option value="BE-VWV">West-Vlaanderen</option>',
//BRAZIL
    'BR' : '<option value="BR-AC">Acre</option><option value="BR-AL">Alagoas</option><option value="BR-AP">Amapá</option><option value="BR-AM">Amazonas</option><option value="BR-BA">Bahia</option><option value="BR-CE">Ceará</option><option value="BR-DF">Distrito Federal</option><option value="BR-ES">Espírito Santo</option><option value="BR-GO">Goiás</option><option value="BR-MA">Maranhão</option><option value="BR-MT">Mato Grosso</option><option value="BR-MS">Mato Grosso do Sul</option><option value="BR-MG">Minas Gerais</option><option value="BR-PA">Pará</option><option value="BR-PB">Paraíba</option><option value="BR-PR">Paraná</option><option value="BR-PE">Pernambuco</option><option value="BR-PI">Piauí</option><option value="BR-RJ">Rio de Janeiro</option><option value="BR-RN">Rio Grande do Norte</option><option value="BR-RS">Rio Grande do Sul</option><option value="BR-RO">Rondônia</option><option value="BR-RR">Roraima</option><option value="BR-SC">Santa Catarina</option><option value="BR-SP">São Paulo</option><option value="BR-SE">Sergipe</option><option value="BR-TO">Tocantins</option>',
//CHINA
    'CN' : '<option value="CN-34">Anhui</option><option value="CN-92">Aomen</option><option value="CN-11">Beijing</option><option value="CN-50">Chongqing</option><option value="CN-35">Fujian</option><option value="CN-62">Gansu</option><option value="CN-44">Guangdong</option><option value="CN-45">Guangxi</option><option value="CN-52">Guizhou</option><option value="CN-46">Hainan</option><option value="CN-13">Hebei</option><option value="CN-23">Heilongjiang</option><option value="CN-41">Henan</option><option value="CN-42">Hubei</option><option value="CN-43">Hunan</option><option value="CN-32">Jiangsu</option><option value="CN-36">Jiangxi</option><option value="CN-22">Jilin</option><option value="CN-21">Liaoning</option><option value="CN-15">Nei Mongol</option><option value="CN-64">Ningxia</option><option value="CN-63">Qinghai</option><option value="CN-61">Shaanxi</option><option value="CN-37">Shandong</option><option value="CN-31">Shanghai</option><option value="CN-14">Shanxi</option><option value="CN-51">Sichuan</option><option value="CN-71">Taiwan</option><option value="CN-12">Tianjin</option><option value="CN-91">Xianggang</option><option value="CN-65">Xinjiang</option><option value="CN-54">Xizang</option><option value="CN-53">Yunnan</option><option value="CN-33">Zhejiang</option>',
//COLUMBIA
    'CO' : '<option value="CO-AMA">Amazonas</option><option value="CO-ANT">Antioquia</option><option value="CO-ARA">Arauca</option><option value="CO-ATL">Atlántico</option><option value="CO-BOL">Bolívar</option><option value="CO-BOY">Boyacá</option><option value="CO-CAL">Caldas</option><option value="CO-CAQ">Caquetá</option><option value="CO-CAS">Casanare</option><option value="CO-CAU">Cauca</option><option value="CO-CES">Cesar</option><option value="CO-CHO">Chocó</option><option value="CO-COR">Córdoba</option><option value="CO-CUN">Cundinamarca</option><option value="CO-DC">Distrito Capital de Bogotá</option><option value="CO-GUA">Guainía</option><option value="CO-GUV">Guaviare</option><option value="CO-HUI">Huila</option><option value="CO-LAG">La Guajira</option><option value="CO-MAG">Magdalena</option><option value="CO-MET">Meta</option><option value="CO-NAR">Nariño</option><option value="CO-NSA">Norte de Santander</option><option value="CO-PUT">Putumayo</option><option value="CO-QUI">Quindío</option><option value="CO-RIS">Risaralda</option><option value="CO-SAP">San Andrés, Providencia y Santa Catalina</option><option value="CO-SAN">Santander</option><option value="CO-SUC">Sucre</option><option value="CO-TOL">Tolima</option><option value="CO-VAC">Valle del Cauca</option><option value="CO-VAU">Vaupés</option><option value="CO-VID">Vichada</option>',
//DENMARK
    'DK' : '<option value="DK-070">Århus</option><option value="DK-040">Bornholm</option><option value="DK-84">Capital</option><option value="DK-82">Central Jutland</option><option value="DK-147">Frederiksberg City</option><option value="DK-020">Frederiksborg</option><option value="DK-042">Fyn</option><option value="DK-015">København</option><option value="DK-101">København City</option><option value="DK-080">Nordjylland</option><option value="DK-81">North Jutland</option><option value="DK-055">Ribe</option><option value="DK-065">Ringkøbing</option><option value="DK-025">Roskilde</option><option value="DK-83">South Denmark</option><option value="DK-035">Storstrøm</option><option value="DK-050">Sønderjylland</option><option value="DK-060">Vejle</option><option value="DK-030">Vestsjælland</option><option value="DK-076">Viborg</option><option value="DK-85">Zeeland</option>',
//IRELAND
    'IE' : '<option value="IE-CW">Carlow</option><option value="IE-CN">Cavan</option><option value="IE-CE">Clare</option><option value="IE-C">Cork</option><option value="IE-DL">Donegal</option><option value="IE-D">Dublin</option><option value="IE-G">Galway</option><option value="IE-KY">Kerry</option><option value="IE-KE">Kildare</option><option value="IE-KK">Kilkenny</option><option value="IE-LS">Laois</option><option value="IE-LM">Leitrim</option><option value="IE-LK">Limerick</option><option value="IE-LD">Longford</option><option value="IE-LH">Louth</option><option value="IE-MO">Mayo</option><option value="IE-MH">Meath</option><option value="IE-MN">Monaghan</option><option value="IE-OY">Offaly</option><option value="IE-RN">Roscommon</option><option value="IE-SO">Sligo</option><option value="IE-TA">Tipperary</option><option value="IE-WD">Waterford</option><option value="IE-WH">Westmeath</option><option value="IE-WX">Wexford</option><option value="IE-WW">Wicklow</option>',
//MALAYSIA
    'MY' : '<option value="MY-01">Johor</option><option value="MY-02">Kedah</option><option value="MY-03">Kelantan</option><option value="MY-04">Melaka</option><option value="MY-05">Negeri Sembilan</option><option value="MY-06">Pahang</option><option value="MY-08">Perak</option><option value="MY-09">Perlis</option><option value="MY-07">Pulau Pinang</option><option value="MY-12">Sabah</option><option value="MY-13">Sarawak</option><option value="MY-10">Selangor</option><option value="MY-11">Terengganu</option><option value="MY-14">Wilayah Persekutuan Kuala Lumpur</option><option value="MY-15">Wilayah Persekutuan Labuan</option><option value="MY-16">Wilayah Persekutuan Putrajaya</option>',
//NORWAY
    'NO' : '<option value="NO-02">Akershus</option><option value="NO-09">Aust-Agder</option><option value="NO-06">Buskerud</option><option value="NO-20">Finnmark</option><option value="NO-04">Hedmark</option><option value="NO-12">Hordaland</option><option value="NO-22">Jan Mayen</option><option value="NO-15">Møre og Romsdal</option><option value="NO-17">Nord-Trøndelag</option><option value="NO-18">Nordland</option><option value="NO-05">Oppland</option><option value="NO-03">Oslo</option><option value="NO-11">Rogaland</option><option value="NO-14">Sogn og Fjordane</option><option value="NO-21">Svalbard</option><option value="NO-16">Sør-Trøndelag</option><option value="NO-08">Telemark</option><option value="NO-19">Troms</option><option value="NO-10">Vest-Agder</option><option value="NO-07">Vestfold</option><option value="NO-01">Østfold</option>',
//PHILIPPINES
    'PH' : '<option value="PH-ABR">Abra</option><option value="PH-AGN">Agusan del Norte</option><option value="PH-AGS">Agusan del Sur</option><option value="PH-AKL">Aklan</option><option value="PH-ALB">Albay</option><option value="PH-ANT">Antique</option><option value="PH-APA">Apayao</option><option value="PH-AUR">Aurora</option><option value="PH-14">Autonomous Region in Muslim Mindanao (ARMM)</option><option value="PH-BAS">Basilan</option><option value="PH-BAN">Bataan</option><option value="PH-BTN">Batanes</option><option value="PH-BTG">Batangas</option><option value="PH-BEN">Benguet</option><option value="PH-05">Bicol (Region V)</option><option value="PH-BIL">Biliran</option><option value="PH-BOH">Bohol</option><option value="PH-BUK">Bukidnon</option><option value="PH-BUL">Bulacan</option><option value="PH-CAG">Cagayan</option><option value="PH-02">Cagayan Valley (Region II)</option><option value="PH-40">CALABARZON (Region IV-A)</option><option value="PH-CAN">Camarines Norte</option><option value="PH-CAS">Camarines Sur</option><option value="PH-CAM">Camiguin</option><option value="PH-CAP">Capiz</option><option value="PH-13">Caraga (Region XIII)</option><option value="PH-CAT">Catanduanes</option><option value="PH-CAV">Cavite</option><option value="PH-CEB">Cebu</option><option value="PH-03">Central Luzon (Region III)</option><option value="PH-07">Central Visayas (Region VII)</option><option value="PH-COM">Compostela Valley</option><option value="PH-15">Cordillera Administrative Region (CAR)</option><option value="PH-11">Davao (Region XI)</option><option value="PH-DAV">Davao del Norte</option><option value="PH-DAS">Davao del Sur</option><option value="PH-DAO">Davao Oriental</option><option value="PH-DIN">Dinagat Islands</option><option value="PH-EAS">Eastern Samar</option><option value="PH-08">Eastern Visayas (Region VIII)</option><option value="PH-GUI">Guimaras</option><option value="PH-IFU">Ifugao</option><option value="PH-01">Ilocos (Region I)</option><option value="PH-ILN">Ilocos Norte</option><option value="PH-ILS">Ilocos Sur</option><option value="PH-ILI">Iloilo</option><option value="PH-ISA">Isabela</option><option value="PH-KAL">Kalinga</option><option value="PH-LUN">La Union</option><option value="PH-LAG">Laguna</option><option value="PH-LAN">Lanao del Norte</option><option value="PH-LAS">Lanao del Sur</option><option value="PH-LEY">Leyte</option><option value="PH-MAG">Maguindanao</option><option value="PH-MAD">Marinduque</option><option value="PH-MAS">Masbate</option><option value="PH-41">MIMAROPA (Region IV-B)</option><option value="PH-MDC">Mindoro Occidental</option><option value="PH-MDR">Mindoro Oriental</option><option value="PH-MSC">Misamis Occidental</option><option value="PH-MSR">Misamis Oriental</option><option value="PH-MOU">Mountain Province</option><option value="PH-00">National Capital Region</option><option value="PH-NEC">Negros Occidental</option><option value="PH-NER">Negros Oriental</option><option value="PH-NCO">North Cotabato</option><option value="PH-10">Northern Mindanao (Region X)</option><option value="PH-NSA">Northern Samar</option><option value="PH-NUE">Nueva Ecija</option><option value="PH-NUV">Nueva Vizcaya</option><option value="PH-PLW">Palawan</option><option value="PH-PAM">Pampanga</option><option value="PH-PAN">Pangasinan</option><option value="PH-QUE">Quezon</option><option value="PH-QUI">Quirino</option><option value="PH-RIZ">Rizal</option><option value="PH-ROM">Romblon</option><option value="PH-SAR">Sarangani</option><option value="PH-X2">Shariff Kabunsuan</option><option value="PH-SIG">Siquijor</option><option value="PH-12">Soccsksargen (Region XII)</option><option value="PH-SOR">Sorsogon</option><option value="PH-SCO">South Cotabato</option><option value="PH-SLE">Southern Leyte</option><option value="PH-SUK">Sultan Kudarat</option><option value="PH-SLU">Sulu</option><option value="PH-SUN">Surigao del Norte</option><option value="PH-SUR">Surigao del Sur</option><option value="PH-TAR">Tarlac</option><option value="PH-TAW">Tawi-Tawi</option><option value="PH-WSA">Western Samar</option><option value="PH-06">Western Visayas (Region VI)</option><option value="PH-ZMB">Zambales</option><option value="PH-ZAN">Zamboanga del Norte</option><option value="PH-ZAS">Zamboanga del Sur</option><option value="PH-09">Zamboanga Peninsula (Region IX)</option><option value="PH-ZSI">Zamboanga Sibugue</option>',
//SOUTH AFRICA
    'ZA' : '<option value="ZA-EC">Eastern Cape</option><option value="ZA-FS">Free State</option><option value="ZA-GT">Gauteng</option><option value="ZA-NL">Kwazulu-Natal</option><option value="ZA-LP">Limpopo</option><option value="ZA-MP">Mpumalanga</option><option value="ZA-NW">North-West</option><option value="ZA-NC">Northern Cape</option><option value="ZA-WC">Western Cape</option>',
//SWEDEN
    'SE' : '<option value="SE-K">Blekinge län</option><option value="SE-W">Dalarnas län</option><option value="SE-X">Gävleborgs län</option><option value="SE-I">Gotlands län</option><option value="SE-N">Hallands län</option><option value="SE-Z">Jämtlands län</option><option value="SE-F">Jönköpings län</option><option value="SE-H">Kalmar län</option><option value="SE-G">Kronobergs län</option><option value="SE-BD">Norrbottens län</option><option value="SE-T">Örebro län</option><option value="SE-E">Östergötlands län</option><option value="SE-M">Skåne län</option><option value="SE-D">Södermanlands län</option><option value="SE-AB">Stockholms län</option><option value="SE-C">Uppsala län</option><option value="SE-S">Värmlands län</option><option value="SE-AC">Västerbottens län</option><option value="SE-Y">Västernorrlands län</option><option value="SE-U">Västmanlands län</option><option value="SE-O">Västra Götalands län</option>',
//TURKEY
    'TR' : '<option value="TR-01">Adana</option><option value="TR-02">Adiyaman</option><option value="TR-03">Afyon</option><option value="TR-04">Agri</option><option value="TR-68">Aksaray</option><option value="TR-05">Amasya</option><option value="TR-06">Ankara</option><option value="TR-07">Antalya</option><option value="TR-75">Ardahan</option><option value="TR-08">Artvin</option><option value="TR-09">Aydin</option><option value="TR-10">Balikesir</option><option value="TR-74">Bartin</option><option value="TR-72">Batman</option><option value="TR-69">Bayburt</option><option value="TR-11">Bilecik</option><option value="TR-12">Bingöl</option><option value="TR-13">Bitlis</option><option value="TR-14">Bolu</option><option value="TR-15">Burdur</option><option value="TR-16">Bursa</option><option value="TR-17">Çanakkale</option><option value="TR-18">Çankiri</option><option value="TR-19">Çorum</option><option value="TR-20">Denizli</option><option value="TR-21">Diyarbakir</option><option value="TR-81">Düzce</option><option value="TR-22">Edirne</option><option value="TR-23">Elazig</option><option value="TR-24">Erzincan</option><option value="TR-25">Erzurum</option><option value="TR-26">Eskisehir</option><option value="TR-27">Gaziantep</option><option value="TR-28">Giresun</option><option value="TR-29">Gümüshane</option><option value="TR-30">Hakkâri</option><option value="TR-31">Hatay</option><option value="TR-33">Içel</option><option value="TR-76">Igdir</option><option value="TR-32">Isparta</option><option value="TR-34">Istanbul</option><option value="TR-35">Izmir</option><option value="TR-46">Kahramanmaras</option><option value="TR-78">Karabük</option><option value="TR-70">Karaman</option><option value="TR-36">Kars</option><option value="TR-37">Kastamonu</option><option value="TR-38">Kayseri</option><option value="TR-79">Kilis</option><option value="TR-71">Kirikkale</option><option value="TR-39">Kirklareli</option><option value="TR-40">Kirsehir</option><option value="TR-41">Kocaeli</option><option value="TR-42">Konya</option><option value="TR-43">Kütahya</option><option value="TR-44">Malatya</option><option value="TR-45">Manisa</option><option value="TR-47">Mardin</option><option value="TR-48">Mugla</option><option value="TR-49">Mus</option><option value="TR-50">Nevsehir</option><option value="TR-51">Nigde</option><option value="TR-52">Ordu</option><option value="TR-80">Osmaniye</option><option value="TR-53">Rize</option><option value="TR-54">Sakarya</option><option value="TR-55">Samsun</option><option value="TR-63">Sanliurfa</option><option value="TR-56">Siirt</option><option value="TR-57">Sinop</option><option value="TR-73">Sirnak</option><option value="TR-58">Sivas</option><option value="TR-59">Tekirdag</option><option value="TR-60">Tokat</option><option value="TR-61">Trabzon</option><option value="TR-62">Tunceli</option><option value="TR-64">Usak</option><option value="TR-65">Van</option><option value="TR-77">Yalova</option><option value="TR-66">Yozgat</option><option value="TR-67">Zonguldak</option>'
};