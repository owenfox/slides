"use strict";Handlebars.registerHelper("step",function(a){var b="";for(var c in a)b=b+" data-"+c+'="'+a[c]+'"';return b});var appendSlides=function(a){var b=a,c=$("#step-template").html(),d=Handlebars.compile(c);b.forEach(function(a){var b=d;console.log(a),$.ajax({url:"/steps/"+a.uri,success:function(c){$(".steps").append(b({file:c,data:a.data,"class":a.class,id:a.id}))},async:!1})})};