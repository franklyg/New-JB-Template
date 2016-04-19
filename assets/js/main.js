$(function(){
var source   = $("#product-description").html();
var template = Handlebars.compile(source);
var data     = {proddesc:[
                { title : "[PRODUCT NAME]", assets : "30ml - 30 Day Supply", description : "Anti-Wrinkle Serum"}
               ]};
$("#product-content").html(template(data));
});