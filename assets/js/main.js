$(function(){
	/*
	Set variables for Handlebars templating
	*/ 
    $.ajax({
        url : 'http://localhost/MAIN/New%20template/content.json',
        method: 'GET',
        dataType : 'json',
        success : function(){
        	var prodDesc 		 = $('#prod-desc').html();
        	var prodDescTemplate = Handlebars.compile(prodDesc);

            var context = content;
            console.log(context)
            var compiledProdDesc = prodDescTemplate(context);
            $('.prod-content').html(prodDescTemplate({content:context}));
        }
    });
});