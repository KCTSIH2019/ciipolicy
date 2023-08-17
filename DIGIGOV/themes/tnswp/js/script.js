
  /*=========================================================================
                    Common for all pages
  ==========================================================================*/
  
  $(document).ready(function () {
  /*var video = $('#myVideo');
  var image = $('#image_background');
  //var image=$('.home').css({"background-image":"url(../UI/images/homepage-images/landingPage-images/Landingpage_img.png)","background-size":"cover","background-position":"center center"});

  video.on('ended', function() {
    $(this).fadeOut('200',function(){//$(this) refers to video
      $('.home').css({"background-image":"url(../UI/images/homepage-images/landingPage-images/Landingpage_img.png)","background-size":"cover","background-position":"center center"}).fadeIn('200');
    });
  });*/


  /*--------------------------
  guidance anthem
  ---------------------------*/
  $('#modalAgrupacion').on('shown.bs.modal', function () {
    $('#video1')[0].play();
    // $('.section_hover').addClass("mediaopthover");
  })
  $('#modalAgrupacion').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
    // $('.section_hover').removeClass("mediaopthover");
   
  })


  /*--------------------------
  end guidance anthem
  ---------------------------*/
 


  setInterval(function () {
   
	  var d = new Date(srvTime());
    var hours = d.getHours() % 12 || 12;
    var ampm = d.getHours() >= 12 ? 'pm' : 'am';
    var min = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeformat = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + ", " + hours + ":" + min + " " + ampm + " (IST)"
    if (document.getElementById("currentdate") != null){
      document.getElementById("currentdate").innerHTML = timeformat;
    }
  }, 1000);
  
  function srvTime(){
	  var xmlHttp;
	  if (window.XMLHttpRequest)
	 	{
	 		// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlHttp = new XMLHttpRequest();
	 	}
	 	else
	 	{
	 		// code for IE6, IE5
	 		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	 	}
	    xmlHttp.open('HEAD',contextPath+'/TN-pages/guidance-tnswp.jsp?pagedisp=static',false);
      xmlHttp.setRequestHeader("Content-Type", "text/html");
      xmlHttp.send('');
      var st =  xmlHttp.getResponseHeader("Date");
      return st;
  }

  $('#help').mouseenter(function () {
    $('.welcome_details,.social_links').hide();
  });

  $('#help').mouseleave(function () {
    $('.welcome_details,.social_links').show();
  });

  $(".open-hamburger").on("click", function () {
    $("#mySidenav").css("width", "86.9565vw");
  })
  $("#close-hamburger").on("click", function () {
    $("#mySidenav").css("width", "0vw");
  })


  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("header_scroll");
        $("#search_overlay").addClass("scroll_overlay");
        // $(".hamburger-black").show();
        // $(".hamburger-white ").hide();
      }
      else {
        $(".header").removeClass("header_scroll");
        $("#search_overlay").removeClass("scroll_overlay");
        // $(".hamburger-black").hide();
        // $(".hamburger-white ").show();
      }
    });
  });

  


  $("#aboutus-header").on("click", function () {
    $(".aboutus-down").toggle();
    $(".aboutus-up").toggle();
    $(".sectors-up,.business-up,.media-up,.help-up,.initiative-up").hide();
    $(".sectors-down,.business-down,.media-down,.help-down,.initiative-down").show();
    $(".aboutus-active").toggleClass("active-hamburger-header");
    $(".sectors-active,.business-active,.media-active,.help-active,.initiative-active").removeClass("active-hamburger-header");
  });

  $("#sectors-header").on("click", function () {
    $(".sectors-down").toggle();
    $(".sectors-up").toggle();
    $(".aboutus-up,.business-up,.media-up,.help-up,.initiative-up").hide();
    $(".aboutus-down,.business-down,.media-down,.help-down,.initiative-down").show();
    $(".sectors-active").toggleClass("active-hamburger-header")
    $(".aboutus-active,.business-active,.media-active,.help-active,.initiative-active").removeClass("active-hamburger-header");
  });

  $("#business-header").on("click", function () {
    $(".business-down").toggle();
    $(".business-up").toggle();
    $(".aboutus-up,.sectors-up,.media-up,.help-up,.initiative-up").hide();
    $(".aboutus-down,.sectors-down,.media-down,.help-down,.initiative-down").show();
    $(".business-active").toggleClass("active-hamburger-header")
    $(".aboutus-active,.sectors-active,.media-active,.help-active,.initiative-active").removeClass("active-hamburger-header");
  });

  $("#media-header").on("click", function () {
    $(".media-down").toggle();
    $(".media-up").toggle();
    $(".aboutus-up,.sectors-up,.business-up,.help-up,.initiative-up").hide();
    $(".aboutus-down,.sectors-down,.business-down,.help-down,.initiative-down").show();
    $(".media-active").toggleClass("active-hamburger-header");
    $(".aboutus-active,.sectors-active,.business-active,.help-active,.initiative-active").removeClass("active-hamburger-header");
  });

  $("#initiative-header").on("click", function () {
    $(".initiative-down").toggle();
    $(".initiative-up").toggle();
    $(".aboutus-up,.sectors-up,.business-up,.media-up,.help-up").hide();
    $(".aboutus-down,.sectors-down,.business-down,.media-down,.help-down").show();
    $(".initiative-active").toggleClass("active-hamburger-header");
    $(".aboutus-active,.sectors-active,.business-active,.media-active,.help-active").removeClass("active-hamburger-header");
  });

  $("#help-header").on("click", function () {
    $(".help-down").toggle();
    $(".help-up").toggle();
    $(".aboutus-up,.sectors-up,.business-up,.media-up,.initiative-up").hide();
    $(".aboutus-down,.sectors-down,.business-down,.media-down,.initiative-down").show();
    $(".help-active").toggleClass("active-hamburger-header");
    $(".aboutus-active,.sectors-active,.business-active,.media-active,.initiative-active").removeClass("active-hamburger-header");
  });

  setInterval(function () {
    $('.mouse_slider_image').attr("src", "../UI/images/homepage-images/achievement-section-images/scroll.gif");
  }, 10000);
});

//Search bar
function openSearch() {
  document.getElementById("search_overlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("search_overlay").style.display = "none";
}
//end of search bar



//This function use to close the hamburger menu when user open guidance video modal
function closeHamburger(){
    $("#mySidenav").css("width", "0vw");
}

$(document).ready(function () {
  $('.sector_list li').hover(function(){
    $(this).addClass('sec_menu_hover');
   },function(){
    $(this).removeClass('sec_menu_hover');
   });
});

/*=============================================================
				SCROLL TO TOP ARROW
============================================================= */

$(document).ready(function() {
  $(".back_to_top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 2000);
      return false;
  });
});




// =============================footer======================================

$( document ).ready(function() {
    var acc = document.getElementsByClassName("footer-menubar");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

        this.classList.toggle("active");

        var footerpanel = this.nextElementSibling;
        if (footerpanel.style.maxHeight){
        footerpanel.style.maxHeight = null;
        } 
        else {
        let active = document.querySelectorAll(".footer-accordion .footer-menubar.active");
        for(let j = 0; j < active.length; j++){
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.maxHeight = null;
        }
        this.classList.toggle("active");
        footerpanel.style.maxHeight = footerpanel.scrollHeight + "px";
        }
        });
    }

});



/*-----------------------------------faq scroll logic-----------------------------*/
$(document).ready(function () {

  var scr_width= $('html').width();
  var extra_top1= (300/1920)*scr_width; 
  var extra_top2= (115/1920)*scr_width;
  
  $(".start_one").click(function() {
      $('html,body').animate({
          scrollTop: $("#start_busi").offset().top - extra_top1},
          1000);
  });
  
  $(".start_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#start_investg").offset().top - extra_top1},
          1200);
  });
  
  $(".start_three").click(function() {
      $('html,body').animate({
          scrollTop: $("#land_costs").offset().top -  extra_top1},
          1200);
  });
  
  $(".start_four").click(function() {
      $('html,body').animate({
          scrollTop: $("#lab_reg").offset().top - extra_top1},
          1200);
  });
  
  $(".start_five").click(function() {
      $('html,body').animate({
          scrollTop: $("#utili_connectn").offset().top - extra_top1},
          1200);
  });
  
  $(".start_six").click(function() {
      $('html,body').animate({
          scrollTop: $("#tax_reg").offset().top - extra_top1},
          1200);
  });
  $(".start_seven").click(function() {
      $('html,body').animate({
          scrollTop: $("#incent_start").offset().top - extra_top1},
          1200);
  });
  $(".start_eight").click(function() {
      $('html,body').animate({
          scrollTop: $("#skill_avail").offset().top - extra_top1},
          1200);
  });
    $(".start_nine").click(function() {
      $('html,body').animate({
          scrollTop: $("#Constr_permit").offset().top - extra_top1},
          1200);
  });
  $(".start_ten").click(function() {
      $('html,body').animate({
          scrollTop: $("#disp_res").offset().top - extra_top1},
          1200);
  });
  $(".start_eleven").click(function() {
      $('html,body').animate({
          scrollTop: $("#ex_imp_reg").offset().top - extra_top1},
          1200);
  });
  $(".start_twelve").click(function() {
      $('html,body').animate({
          scrollTop: $("#miscel").offset().top - extra_top1},
          1200);
  });
    
  });	
  
/*-----------------------------------faq button slider -----------------------------*/
// (defined in our team page section)





// data.items.forEach(function(v, i) {
//     div1[i].innerHTML = v.name;
//  div2[i].innerHTML = v.role;
//  div3[i].innerHTML = v.unit;
// });


/*$(function() {

    var netinfo = function(data) {
        var output = "";
        for (var i = 0; i < data.length; i++) {
            output +=
                "<hr>" +
                "<p> Adapter Name: " + data[i].name + "</p>" +
                "<p> IP Address:  " + data[i].age + "</p>" +
                "<p> MAC Address:  " + data[i].name+ "</p>" +
                "<p> Adapter ID:  " + data[i].age + "</p>" +
                "<hr>";
        }
        $(".network-info").html(output);
    };
    $.ajax({
        url: "our-team.json",
        dataType: 'json',
        crossDomain: true,
    }).done(function(data) {
        netinfo(data);
    });

});*/




/*---------------------------------------------------
why tamilnadu
----------------------------------------------------*/

function openwhytnTab(btnname, tabname) {
  var i;
  var x = document.getElementsByClassName("wtn");
  var y = document.getElementsByClassName("wtn_tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].className = y[i].className.replace("wtn_btn", "");
  }
  document.getElementById(tabname).style.display = "block";
  document.getElementById(btnname).classList.add('wtn_btn');
}


function langChange()
{	
	$.ajax({
		url:contextPath+ "/changeLocale?locale="+$('#langSelect').val(),
		success:function(res)
		{
			if(res.trim() == "success")
			{
				location.reload(true);
			}
		},
		error:function(res)
		{
			location.reload(true);
		}
	})
}