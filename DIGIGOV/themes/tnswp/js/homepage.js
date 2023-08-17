
/*=============================================================
					COUNTER UP FOR OPPORTUNITY SECTION
============================================================= */

$( document ).ready(function() {
  $(".count_fact_figure").counterUp({
   delay:10,
    time:500
  });
  
});

$( document ).ready(function() {
  if($(window).width() < 767)
  {
    $('#temple1_img').attr('src','../UI/images/homepage-images/opportunity-images/brihadeeshwarar-temple-mobile.png');
    $("#train_img").attr("src","../UI/images/homepage-images/opportunity-images/nilgiri-railway-mobile.png");
    $('#ghats_img').attr('src','../UI/images/homepage-images/opportunity-images/western-ghats-mobile.png');
    $('#mahabalipuram_img').attr('src','../UI/images/homepage-images/opportunity-images/mahabalipuram-monuments-mobile.png');
    $('#temple2_img').attr('src','../UI/images/homepage-images/opportunity-images/airavatheeswara-temple-mobile.png');
    
  } else {
    $('#temple1_img').attr('src','../UI/images/homepage-images/opportunity-images/brihadeeshwarar-temple.png');
    $("#train_img").attr("src","../UI/images/homepage-images/opportunity-images/nilgiri-railway.png");
    $('#ghats_img').attr('src','../UI/images/homepage-images/opportunity-images/western-ghats.png');
    $('#mahabalipuram_img').attr('src','../UI/images/homepage-images/opportunity-images/mahabalipuram-monuments.png');
    $('#temple2_img').attr('src','../UI/images/homepage-images/opportunity-images/airavatheeswara-temple.png');
  }
});


 /*========================================================================
                  SECTION: Sectors                                                     
  =========================================================================*/
  $(document).ready(function () {

     $(".modal-close").on('click',function(){
      $('.mobile-focus-honeycomb').removeClass('active');
      $('.mobile-sunrise-honeycomb').removeClass('active');
    });
  
   
     $('.focus-honeycomb').on('click',function()
     {
       $('.mobile-focus-honeycomb').removeClass('active');
        $(this).addClass('active');
    });
  
    $('.focus-honeycomb').on('click',function()
     {
       $('.desktop-focus-honeycomb').removeClass('active');
        $(this).addClass('active');
    });
  
    $('.sunrise-honeycomb').on('click',function()
     {
       $('.mobile-sunrise-honeycomb').removeClass('active');
     $(this).addClass('active');
    });
  
    $('.sunrise-honeycomb').on('click',function()
    {
      $('.desktop-sunrise-honeycomb').removeClass('active');
    $(this).addClass('active');
   });
    
    $("#sunrise_sec").on("click", function () {
      $(".sunrise_sec_menu,.sunrise_sec_map").show();
      $(".focus_sec_menu,.focus_sec_map").hide();
      $(".sectors_details").removeClass("col-lg-5");
      $(".sectors_map").removeClass("col-lg-7");
      $(".sectors_details").addClass("col-lg-6");
      $(".sectors_map").addClass("col-lg-6");
      $("#sunrise_sec").addClass("active_sector");
      $("#focus_sec").removeClass("active_sector");
    });
  
    $("#focus_sec").on("click", function () {
      $(".focus_sec_menu,.focus_sec_map").show();
      $(".sunrise_sec_menu,.sunrise_sec_map").hide();
      $(".sectors_details").removeClass("col-lg-6");
      $(".sectors_map").removeClass("col-lg-6");
      $(".sectors_details").addClass("col-lg-5");
      $(".sectors_map").addClass("col-lg-7");
      $("#focus_sec").addClass("active_sector");
      $("#sunrise_sec").removeClass("active_sector");
    });   
  });
/*=============================================================
				 DYNAMIC DATA OF SECTORS AND DISTRICTS
============================================================= */
fetch('themes/tnswp/libs/json_data/main.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				appendDatasector(data);
			})
			.catch(function (err) {
				console.log('error: ' + err);
			});
		function appendDatasector(data) {
			$(document).ready(function () {

				$(".desktop-focus-honeycomb").on("click", function () {
					var txt = ($(this).attr("id")).toLocaleLowerCase();

					for (var i = 0; i < data.length; i++) {
						if (data[i].tab_id == txt) {
							$(".focus_sector_name").text(data[i].sector_name);
							$(".focus_sector_description").text(data[i].sector_description);
							$(".focus_sector_points").html(data[i].sector_points);
							let sector_img = $("<img/>", {
								src: data[i].sector_img,
								class: "sector_img",
							});
							let sector_img_div = $(
								"<span class='sector-icon'></span>"
							).prepend($(sector_img));
							$(sector_img_div).appendTo(".focus_sector_name");
							$(".focus_sector_expert_img").attr(
								"src",
								data[i].sector_expert_img
							);
							$(".focus_sector_expert_mail").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".focus_sector_expert_mail").text(
								data[i].sector_expert_email_id
							);
							$("#focus_sector_expert_chat").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".focus_sector_expert_name").text(data[i].sector_expert_name);
							$(".focus_first_ach_no").html(data[i].first_ach_no);
							$(".focus_first_ach_detail").text(data[i].first_ach_detail);
							$(".focus_second_ach_no").html(data[i].second_ach_no);
							$(".focus_second_ach_detail").text(data[i].second_ach_detail);
							$(".focus_view_more").attr(
								"href",
								data[i].individual_sector_link
							);
						}
					}
				});


				$(".mobile-focus-honeycomb").on("click", function () {
					var txt = $(this).attr("id");
					console.log(txt);

					for (var i = 0; i < data.length; i++) {
						if (data[i].tab_id == txt) {
							$(".focus_sector_name").text(data[i].sector_name);
							$(".focus_sector_description").text(data[i].sector_description);
							$(".focus_sector_points").html(data[i].sector_points);
							let sector_img = $("<img/>", {
								src: data[i].sector_img,
								class: "sector_img",
							});
							let sector_img_div = $(
								"<span class='sector-icon'></span>"
							).prepend($(sector_img));
							$(sector_img_div).appendTo(".focus_sector_name");
							$(".focus_sector_expert_img").attr(
								"src",
								data[i].sector_expert_img
							);
							$(".focus_sector_expert_mail").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".focus_sector_expert_mail").text(
								data[i].sector_expert_email_id
							);
							$("#focus_sector_expert_chat").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".focus_sector_expert_name").text(data[i].sector_expert_name);
							$(".focus_first_ach_no").html(data[i].first_ach_no);
							$(".focus_first_ach_detail").text(data[i].first_ach_detail);
							$(".focus_second_ach_no").html(data[i].second_ach_no);
							$(".focus_second_ach_detail").text(data[i].second_ach_detail);
							$(".focus_view_more").attr(
								"href",
								data[i].individual_sector_link
							);
						}
					}
				});

				$(".mobile-sunrise-honeycomb").on("click", function () {
					var txt = $(this).attr("id");

					for (var i = 0; i < data.length; i++) {
						if (data[i].tab_id == txt) {
							$(".sunrise_sector_name").text(data[i].sector_name);
							$(".sunrise_sector_description").text(
								data[i].sector_description
							);
							$(".sunrise_sector_points").html(data[i].sector_points);
							let sector_img = $("<img/>", {
								src: data[i].sector_img,
								class: "sector_img",
							});
							let sector_img_div = $(
								"<span class='sector-icon'></span>"
							).prepend($(sector_img));
							$(sector_img_div).appendTo(".sunrise_sector_name");
							$(".sunrise_sector_expert_img").attr(
								"src",
								data[i].sector_expert_img
							);
							$(".sunrise_sector_expert_mail").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".sunrise_sector_expert_mail").text(
								data[i].sector_expert_email_id
							);
							$("#sunrise_sector_expert_chat").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".sunrise_sector_expert_name").text(
								data[i].sector_expert_name
							);
							$(".sunrise_first_ach_no").html(data[i].first_ach_no);
							$(".sunrise_first_ach_detail").text(data[i].first_ach_detail);
							$(".sunrise_second_ach_no").html(data[i].second_ach_no);
							$(".sunrise_second_ach_detail").text(data[i].second_ach_detail);
							$(".sunrise_view_more").attr(
								"href",
								data[i].individual_sector_link
							);
						}
					}
				});

				$(".desktop-sunrise-honeycomb").on("click", function () {
					var txt = ($(this).attr("id")).toLocaleLowerCase();

					for (var i = 0; i < data.length; i++) {
						if (data[i].tab_id == txt) {
							$(".sunrise_sector_name").text(data[i].sector_name);
							$(".sunrise_sector_description").text(
								data[i].sector_description
							);
							$(".sunrise_sector_points").html(data[i].sector_points);
							let sector_img = $("<img/>", {
								src: data[i].sector_img,
								class: "sector_img",
							});
							let sector_img_div = $(
								"<span class='sector-icon'></span>"
							).prepend($(sector_img));
							$(sector_img_div).appendTo(".sunrise_sector_name");
							$(".sunrise_sector_expert_img").attr(
								"src",
								data[i].sector_expert_img
							);
							$(".sunrise_sector_expert_mail").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".sunrise_sector_expert_mail").text(
								data[i].sector_expert_email_id
							);
							$("#sunrise_sector_expert_chat").attr(
								"href",
								data[i].sector_expert_mailto
							);
							$(".sunrise_sector_expert_name").text(
								data[i].sector_expert_name
							);
							$(".sunrise_first_ach_no").html(data[i].first_ach_no);
							$(".sunrise_first_ach_detail").text(data[i].first_ach_detail);
							$(".sunrise_second_ach_no").html(data[i].second_ach_no);
							$(".sunrise_second_ach_detail").text(data[i].second_ach_detail);
							$(".sunrise_view_more").attr(
								"href",
								data[i].individual_sector_link
							);
						}
					}
				});
				$('.home_district_item').on('click', function () {
					var txt = ($(this).text());
					
         
					for (var i = 0; i < data.length; i++) {

						if (data[i].Districts == txt) {

              $(".dist_title").html(data[i].Districts);
							$(".dist_description").html(data[i].Description);
							$("#district_area").html(data[i].Area +' sq km');
							$("#district_population").html(data[i].Population);
							$("#district_literacy").html(data[i].Literacy);
							$("#district_airport").html(data[i].Airport);
							$("#district_port").html(data[i].Seaport);
							$("#district_railway").html(data[i].RailwayStation);
							$("#district_button").html('Explore '+data[i].Districts);
              $("#district_button").attr("href", 'TN-pages/individual-dist.jsp?pagedisp=static&individual-district='+data[i].Districts);
							
						}



					}

				});
				$('.dist_tn').on('click', function () {
					var txt = ($(this).attr('id'));
					

					for (var i = 0; i < data.length; i++) {

						if (data[i].Districts == txt) {

							$(".dist_title").html(data[i].Districts);
							$(".dist_description").html(data[i].Description);
							$("#district_area").html(data[i].Area +' sq km');
							$("#district_population").html(data[i].Population);
							$("#district_literacy").html(data[i].Literacy);
							$("#district_airport").html(data[i].Airport);
							$("#district_port").html(data[i].Seaport);
							$("#district_railway").html(data[i].RailwayStation);
							$("#district_button").html('Explore '+data[i].Districts);
              $("#district_button").attr("href", 'TN-pages/individual-dist.jsp?pagedisp=static&individual-district='+data[i].Districts);
							
						}



					}

				});
			});

		}

/*=============================================================
				 RESOURCES SECTION
============================================================= */

// for card hovering animation effect:
$( document ).ready(function() {
	var arrow1=$('#resources_gear_arrow');
	var arrow2=$('#resources_know_y_clrn_arrow');
	var arrow3=$('#resources_li_of_clrn_arrow');
	var arrow4=$('#resources_user_manual_arrow');
	var win_width=$(window).width();
  $('#resources_gear_card').hover(function(){ // hover in
    var v1=$('#resources_gear_img').attr("src", "../UI/images/homepage-images/resources-images/full-gear.gif");
	if(v1){
		$('#resources_gear_img').removeClass("resources_non_anim_img");
		$('#resources_gear_img').addClass("resources_anim_img");
	}
    arrow1.attr("src", "../UI/images/homepage-images/resources-images/arrow-right-white.svg");
  }, function(){ // hover out
    $('#resources_gear_img').attr("src", "../UI/images/homepage-images/resources-images/full-gear-reverse.gif");
	(win_width < 767)?arrow1.attr('src','homepage-images/resources-images/arrow-right-black.svg'):arrow1.attr("src", "../UI/images/homepage-images/resources-images/arrow-right.svg");	
    
    setTimeout(() => {
      if($('#resources_gear_img').attr("src")!="../UI/images/homepage-images/resources-images/full-gear.gif"){
        var v2=$('#resources_gear_img').attr("src", "../UI/images/homepage-images/resources-images/full-gear.svg");
        if(v2){
          $('#resources_gear_img').removeClass("resources_anim_img");
          $('#resources_gear_img').addClass("resources_non_anim_img");
        }
      }
    }, 1000);
  });
  
  $('#resources_know_y_clrn_card').hover(function(){ // hover in
    
    var v3=$('#resources_know_y_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/know-your-clearance.gif");
	if(v3){
		$('#resources_know_y_clrn_img').removeClass("resources_non_anim_img");
		$('#resources_know_y_clrn_img').addClass("resources_anim_img");
	}
    arrow2.attr("src", "../UI/images/homepage-images/resources-images/arrow-right-white.svg");
  }, function(){
    $('#resources_know_y_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/know-your-clearance-reverse.gif");
	(win_width < 767)?arrow2.attr('src','homepage-images/resources-images/arrow-right-black.svg'):arrow2.attr("src", "../UI/images/homepage-images/resources-images/arrow-right.svg");
    setTimeout(() => {
      if($('#resources_know_y_clrn_img').attr("src")!="../UI/images/homepage-images/resources-images/know-your-clearance.gif"){
        var v4=$('#resources_know_y_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/know-your-clearance.svg");
        if(v4){
        $('#resources_know_y_clrn_img').removeClass("resources_anim_img");
        $('#resources_know_y_clrn_img').addClass("resources_non_anim_img");
        }	
      }
    }, 1000);
  });
  
  $('#resources_li_of_clrn_card').hover(function(){ // hover in
    
    var v5=$('#resources_li_of_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/list-of-clearance.gif");
	if(v5){
		$('#resources_li_of_clrn_img').removeClass("resources_non_anim_img");
		$('#resources_li_of_clrn_img').addClass("resources_anim_img");	
	}
    arrow3.attr("src", "../UI/images/homepage-images/resources-images/arrow-right-white.svg");
  }, function(){ // hover out
    $('#resources_li_of_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/list-of-clearance-reverse.gif");
    (win_width < 767)?arrow3.attr('src','homepage-images/resources-images/arrow-right-black.svg'):arrow3.attr("src", "../UI/images/homepage-images/resources-images/arrow-right.svg");	
    setTimeout(() => {
      if($('#resources_li_of_clrn_img').attr("src")!= "../UI/images/homepage-images/resources-images/list-of-clearance.gif"){
        var v6=$('#resources_li_of_clrn_img').attr("src", "../UI/images/homepage-images/resources-images/list-of-clearance.svg"); 
        if(v6){
          $('#resources_li_of_clrn_img').removeClass("resources_anim_img");
          $('#resources_li_of_clrn_img').addClass("resources_non_anim_img");
        }
      }  
    }, 1000);
  });
  
  
  $('#resources_user_manual_card').hover(function(){ // hover in
	var v7=$('#resources_user_manual_img').attr("src", "../UI/images/homepage-images/resources-images/user-manual.gif");
	if(v7){
		$('#resources_user_manual_img').removeClass("resources_non_anim_img");
		$('#resources_user_manual_img').addClass("resources_anim_img");
	}
	arrow4.attr("src", "../UI/images/homepage-images/resources-images/arrow-right-white.svg");
  }, function(){ // hover out
    $('#resources_user_manual_img').attr("src", "../UI/images/homepage-images/resources-images/user-manual-reverse.gif");
    (win_width < 767)?arrow4.attr('src','homepage-images/resources-images/arrow-right-black.svg'):arrow4.attr("src", "../UI/images/homepage-images/resources-images/arrow-right.svg");	
    setTimeout(() => { 
      if($('#resources_user_manual_img').attr("src")!="../UI/images/homepage-images/resources-images/user-manual.gif"){
        var v8=$('#resources_user_manual_img').attr("src", "../UI/images/homepage-images/resources-images/user-manual.svg");
        if(v8){
          $('#resources_user_manual_img').removeClass("resources_anim_img");
          $('#resources_user_manual_img').addClass("resources_non_anim_img");
        }
      }
	 }, 1000);
  });
  
});

// for changing arrow near 'view more' from orange to black in mobile screen:
$( document ).ready(function() {
  if($(window).width() < 767)
  {
    $('.view_more_arrow').attr('src','../UI/images/homepage-images/resources-images/arrow-right-black.svg');
    
  } else {
    $('.view_more_arrow').attr('src','../UI/images/homepage-images/resources-images/arrow-right.svg');
  }
});


/*=============================================================
      SECTION: EXPLORE TAMIL NADU
============================================================= */
$(document).ready(function () {
  $('.exp-tn-cmn-but').on('click', function () {
    $('.exp-tn-cmn-but').removeClass('exp-tn-butt-active');
    $(this).addClass('exp-tn-butt-active');
  });
});
function openExpTab(tabname) {
  var i;
  var x = document.getElementsByClassName("common_tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabname).style.display = "block";
}
function selectDist(distName) {
  var j;
  var x = document.getElementsByClassName("dist_tn");
  for (j = 0; j < x.length; j++) {
    x[i].removeClass("active_dist_tn");
  }
  document.getElementById(distName).addClass("active_dist_tn");
}

(function () {
  var chtxt = document.getElementById('chennaitxt');
})();

var triggers = document.getElementsByClassName('dist_tn');
for (var i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener('mousemove', showTooltip);
  triggers[i].addEventListener('mouseout', hideTooltip);
}
function showTooltip(evt) {
  tooltip.setAttributeNS(null, "visibility", "visible");
}
function hideTooltip() {
  chtxt.setAttributeNS(null, "visibility", "hidden");
}

$(document).ready(function () {
  $('.selected-dist').text('Chennai');
  $("#home_input_dist_search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".home_district_list *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $('.dist_selection .home_district_list div').click(function () {
    $('.home_district_item').removeClass('district_item_active');
    $(this).addClass('district_item_active');
    $('.selected-dist').text($(this).text());
    $('.dist_tn').removeClass('dist-active');
    $('#' + $(this).text()).addClass('dist-active');
    $('.districts-name').removeClass('mapped-pin');
    $('.' + $(this).text() + '-txt').addClass('mapped-pin');
    // $('#home_input_dist_search').val('');
  });
});
$(document).ready(function () {
  $('.dist_tn').on('click', function () {
    $('.districts-name').removeClass('mapped-pin');
    $('.' + this.id + '-txt').addClass('mapped-pin');
    $('.dist_tn').removeClass('dist-active');
    $(this).addClass('dist-active');
    $('.selected-dist').text(this.id);
    $('.home_district_item').removeClass('district_item_active')
    $('#' + $(this).attr('id').toLowerCase()).addClass('district_item_active')
  });

  $(document).ready(function () {
    $('.dist_tn').hover(function () {
      $('.' + this.id + '-txt').addClass('district-name-active');
      // $('.' + this.id + '-industrial-pin-txt').addClass('district-name-active');
      // $('#' + this.id + '-industrial-pin').addClass('display-none');
    }, function () {
      $('.' + this.id + '-txt').removeClass('district-name-active');
      // $('.' + this.id + '-industrial-pin-txt').removeClass('district-name-active');
      // $('#' + this.id + '-industrial-pin').removeClass('display-none');
    });
  });
  $("#home_input_dist_search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".home_district_list *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    if(!$(".home_district_item:visible").length)
      {
          $(".home-no-results").removeClass('d-none');
      }
      else{
        $(".home-no-results").addClass('d-none');
      }
  });
  if($('html').width() > 767){
  $(".industrial-pin").mouseenter(function () {
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $(this).addClass('display-none');

  });
  $(".industrial-tool-tip").mouseleave(function () {
    $(this).removeClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('.industrial-pin').removeClass('display-none');
  });
  $(".seaport-pin").mouseenter(function () {
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $(this).addClass('display-none');

  });
  $(".seaport-tool-tip").mouseleave(function () {
    $(this).removeClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('.seaport-pin').removeClass('display-none');
  });
  $(".airport-pin").mouseenter(function () {
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $(this).addClass('display-none');

  });
  $(".airport-tool-tip").mouseleave(function () {
    $(this).removeClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('.airport-pin').removeClass('display-none');
  });
    
}
if($('html').width() < 767){
  $(".seaport-pin").click(function () {
    $('.seaport-tool-tip').removeClass('district-name-active');
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $('.seaport-pin').removeClass('display-none');
    $(this).addClass('display-none');
  });
  $(".airport-pin").click(function () {
    $('.airport-tool-tip').removeClass('district-name-active');
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $('.airport-pin').removeClass('display-none');
    $(this).addClass('display-none');
  });
  $(".industrial-pin").click(function () {
    $('.industrial-tool-tip').removeClass('district-name-active');
    $('.' + this.id + '-txt').addClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');
    $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
    $('.industrial-pin').removeClass('display-none');
    $(this).addClass('display-none');
  });
}
$('.cellular-pin').hover(function () {
  $('.' + this.id + '-txt').addClass('district-name-active');
  $('.dist_tn').removeClass('map-pin-hover');
  $('#' + this.id.substr(0, this.id.indexOf("-"))).addClass('map-pin-hover');
}, function () {
  $('.' + this.id + '-txt').removeClass('district-name-active');
  $(this).removeClass('district-name-active');
  $('.dist_tn').removeClass('map-pin-hover');
});
$('#Kumbakkonam-cellular-pin').hover(function () {
  $('.Kumbakkonam-cellular-pin-txt').addClass('district-name-active');
  $('.dist_tn').removeClass('map-pin-hover');
  $('#Thanjavur').addClass('map-pin-hover');
}, function () {
  $('.Kumbakkonam-cellular-pin-txt').removeClass('district-name-active');
  $('.dist_tn').removeClass('map-pin-hover');
});
});

// ==============================================
//             pin-hover section
// ============================================
$(document).ready(function () {
  $('.exp-tn-cmn-but').on('click', function () {
    $('.dist_tn').addClass('disabled');
    $('.dist_tn').removeClass('dist-active');
    $('.districts-name').removeClass('mapped-pin');
  });
  $('.districts').on('click', function () {
    $('.dist_tn').removeClass('disabled');
    // $('.dist-chennai').addClass('dist-active');
    // $('.Chennai-txt').addClass('mapped-pin');
    var lower = $('.district_item_active').attr('id');
    lower = lower.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
    $('#' + lower).addClass('dist-active');
    $('.' + lower + '-txt').addClass('mapped-pin');
  });
});
$(document).ready(function () {

  $('.seaports,.industries,.cellular,.highways,.airports,.districts').on('click', function () {
    $('.airport-tool-tip,.seaport-tool-tip,.cellular-tool-tip,.industrial-tool-tip').removeClass('district-name-active');
    $('.dist_tn').removeClass('map-pin-hover');

  });


  $('.seaports').on('click', function () {
    $('.seaport-pin').removeClass('display-none');
    $('.seaport-pin').addClass('d-block');
    $('.industrial-pin').removeClass('d-block');
    $('.cellular-pin').removeClass('d-block');
    $('.road-network').removeClass('d-block');
    $('.airport-pin').removeClass('d-block');
  });
});
$(document).ready(function () {
  $('.industries').on('click', function () {
    $('.seaport-pin').removeClass('d-block');
    $('.industrial-pin').removeClass('display-none');
    $('.industrial-pin').addClass('d-block');
    $('.cellular-pin').removeClass('d-block');
    $('.road-network').removeClass('d-block');
    $('.airport-pin').removeClass('d-block');
  });
});
$(document).ready(function () {
  $('.cellular').on('click', function () {
    $('.seaport-pin').removeClass('d-block');
    $('.industrial-pin').removeClass('d-block');
    $('.cellular-pin').removeClass('display-none');
    $('.cellular-pin').addClass('d-block');
    $('.road-network').removeClass('d-block');
    $('.airport-pin').removeClass('d-block');
  });
});
$(document).ready(function () {
  $('.highways').on('click', function () {
    $('.seaport-pin').removeClass('d-block');
    $('.industrial-pin').removeClass('d-block');
    $('.cellular-pin').removeClass('d-block');
    $('.road-network').addClass('d-block');
    $('.airport-pin').removeClass('d-block');
  });
});
$(document).ready(function () {
  $('.airports').on('click', function () {
    $('.seaport-pin').removeClass('d-block');
    $('.industrial-pin').removeClass('d-block');
    $('.cellular-pin').removeClass('d-block');
    $('.road-network').removeClass('d-block');
    $('.airport-pin').removeClass('display-none');
    $('.airport-pin').addClass('d-block');
  });

});



$(document).ready(function () {
  $('.districts').on('click', function () {
    $('.seaport-pin').removeClass('d-block');
    $('.industrial-pin').removeClass('d-block');
    $('.cellular-pin').removeClass('d-block');
    $('.road-network').removeClass('d-block');
    $('.airport-pin').removeClass('d-block');
  });
});


// =============================================

// for world-map modal:
$( document ).ready(function() {
  if($(window).width() < 767)
  {
    $('#world_map_zoomed_out').attr('src','../UI/images/homepage-images/explore-tamil-nadu-images/world-map-mobile.png');
    $("#world_map_zoomed_in").attr("src","../UI/images/homepage-images/explore-tamil-nadu-images/world-map-zoomed-mobile.png");
  } else {
    $('#world_map_zoomed_out').attr('src','../UI/images/homepage-images/explore-tamil-nadu-images/world-map.png');
    $("#world_map_zoomed_in").attr("src","../UI/images/homepage-images/explore-tamil-nadu-images/world-map-zoomed.png");
  }
});
$(document).ready(function () {

  var map_modal = document.getElementById("map_modal");

  var world_map_btn = document.getElementById("world_map_btn");

  var world_map_close_btn = document.getElementsByClassName("world_map_close_btn")[0];

  if ( world_map_btn!= null ){
    world_map_btn.onclick = function () {
      $('#map_modal').fadeIn(500);
    };
  
    world_map_close_btn.onclick = function () {
      $('#map_modal').fadeOut(500);
    }
  }
  

  window.onclick = function (event) {
    if (event.target == map_modal) {
      $('#map_modal').fadeOut(500);
    }
  }
});

function toggleMapZoom() {
  if ($('#world_zoom_btn').hasClass("zoomedOut")) {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn-zoomed.svg');
    $('#world_zoom_btn').removeClass("zoomedOut");
    $('#world_zoom_btn').addClass("zoomedIn");
    $('#world_map_zoomed_out').css('transform', 'scale(3.5)');
    $('#world_map_zoomed_out').css('opacity', '0');
    $('#world_map_zoomed_in').css('transform', 'scale(1,1)');
    $('#world_map_zoomed_in').css('opacity', '1');
  }
  else {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn.svg');
    $('#world_zoom_btn').removeClass("zoomedIn");
    $('#world_zoom_btn').addClass("zoomedOut");
    if($(window).width()>767){
      $('#world_map_zoomed_in').css('transform', 'scale(0.8572,0.807)');
    }
    $('#world_map_zoomed_in').css('opacity', '0');
    $('#world_map_zoomed_out').css('transform', 'scale(1,1)');
    $('#world_map_zoomed_out').css('opacity', '1');
  }

}
function zoomBtnHoverIn() {
  if ($('#world_zoom_btn').hasClass('zoomedOut')) {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn-hover.svg');
  }
  else {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn-zoomed-hover.svg');
  }
}
function zoomBtnHoverOut() {
  if ($('#world_zoom_btn').hasClass('zoomedOut')) {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn.svg');
  }
  else {
    $('#world_zoom_btn').attr('src', '../UI/images/homepage-images/explore-tamil-nadu-images/model-zoom-btn-zoomed.svg');
  }
}
/*=============================================================
        SECTION:  WORLD TOP BUSINESS CALL
============================================================= */

$(document).ready(function(){
  $('#top-busi-slide-margin').scroll(function(){
    var screen_width= $('html').width();
    var top_busi_scroll_left= (289.9/414)*screen_width;  
   if ($(this).scrollLeft() > top_busi_scroll_left) {
       $(this).addClass('busi-margin-slide');
    } else {
       $(this).removeClass('busi-margin-slide');
    }
  });

  if($('html').width() < 767 ){
    $('.ti-caro-item').removeClass('carousel-item');
    $('.ti-caro-item').addClass('active-contents float-none');
    $('.ti-caro-inner').addClass('ti-oflw-scroll');
  }
});


/*=============================================================
			TOP INVESTERS
============================================================= */
$( document ).ready(function() {
  $('.top_invs_slide').scroll(function(){
    var screen_width= $('html').width();
    var top_invs_scroll_left= (150/414)*screen_width;
    if ($(this).scrollLeft() > top_invs_scroll_left) {
       $(this).addClass('invs_scroll_right_margin');
    } else {
       $(this).removeClass('invs_scroll_right_margin');
    }
  });

  if($('html').width() < 767 ){
    $('.caro_item_top_invs').removeClass('carousel-item');
    $('.caro_item_top_invs').addClass('active-contents float-none');
    $('.caro_inner_top_invs').addClass('overflow_scroll');
  }

});

/*=============================================================
			SECTION: LATEST NEWS
============================================================= */
$( document ).ready(function() {
  $('.first_two_cards_container').scroll(function(){
    var screen_width= $('html').width();
    var l_news_scroll_left= (303/414)*screen_width;
    if ($(this).scrollLeft() > l_news_scroll_left) {
       $(this).addClass('l_news_scroll_right_margin');
    } else {
       $(this).removeClass('l_news_scroll_right_margin');
    }
  });

});
