/******************************************
    File Name: fontchanges.js
*******************************************/


jQuery(document).ready(function($){
	//get defult size in UNIT from Style css
	var defultsize = parseInt($("html").css('font-size'));
	// set fontSizeObj defult value
	var fontSizeObj = 16;
	// font increase / decrease / normal on click
	$('.inc').on('click',function(){
	    //debugger;
	    fontSizeObj = parseInt($('html').css('font-size'));
	  if(fontSizeObj == (defultsize+(2))){
	  	$('html').css('font-size',fontSizeObj+'px');
	  }
	  else
	  {

	  	fontSizeObj+=1;
	  	$('html').css('font-size',fontSizeObj+'px');
	  }
	  	sessionStorage.setItem('fSize', fontSizeObj);
	 })
	 $('.dec').on('click',function(){
	 	fontSizeObj = parseInt($('html').css('font-size'));
		if(fontSizeObj == (defultsize-(2))){
			 $('html').css('font-size',fontSizeObj+'px');
		 }
		 else
		 {
			 fontSizeObj-=1;
			 $('html').css('font-size',fontSizeObj+'px');
		 }
	 		//sessionStorage.setItem('fSize', fontSizeObj);
	 })
	 $('.orig').on('click',function(){
		 //debugger;
		 $('html').css('font-size',defultsize+'px');
		 sessionStorage.setItem('fSize', defultsize);
	 })
	 if (sessionStorage.length !== 0) {
		 $('html').css('font-size', sessionStorage.getItem('fSize') + 'px');
	 }
    
});