/*=========================================================================
individual sector
==========================================================================*/
$(document).ready(function () {
    $('.policy_list li').hover(function(){
      $(this).addClass('individual_sec_pol_hover');
     },function(){
      $(this).removeClass('individual_sec_pol_hover');
     });

    //  $('.invst_card').click(function() {
    //   $(this).siblings().find(".invst-card-header").removeClass("incen_active_header_accord");
    //   $(this).find(".invst-card-header").toggleClass("incen_active_header_accord");
    // });

});

$(document).ready(function () {
  $("#invst-heading-one").click(function () {
      $(".devep-plus").toggle();
      $(".devep-minus").toggle();
      $(".facilit-minus,.schl-minus,.exist-minus,.fifth-minus,.sixth-minus,.seventh-minus").hide();
      $(".facilit-plus,.schl-plus,.exist-plus,.fifth-plus,.sixth-plus,.seventh-plus").show();
  });
  $("#invst-heading-two").click(function () {
      $(".facilit-plus").toggle();
      $(".facilit-minus").toggle();
      $(".devep-minus,.schl-minus,.exist-minus,.fifth-minus,.sixth-minus,.seventh-minus").hide();
      $(".devep-plus,.schl-plus,.exist-plus,.fifth-plus,.sixth-plus,.seventh-plus").show();
  });
  $("#invst-heading-three").click(function () {
      $(".schl-plus").toggle();
      $(".schl-minus").toggle();
      $(".facilit-minus,.devep-minus,.exist-minus,.fifth-minus,.sixth-minus,.seventh-minus").hide();
      $(".facilit-plus,.devep-plus,.exist-plus,.fifth-plus,.sixth-plus,.seventh-plus").show();
  });
  $("#invst-heading-four").click(function () {
      $(".exist-plus").toggle();
      $(".exist-minus").toggle();
      $(".facilit-minus,.devep-minus,.schl-minus,.fifth-minus,.sixth-minus,.seventh-minus").hide();
      $(".facilit-plus,.devep-plus,.schl-plus,.fifth-plus,.sixth-plus,.seventh-plus").show();
  });
  $("#invst-heading-five").click(function () {
    $(".fifth-plus").toggle();
    $(".fifth-minus").toggle();
    $(".facilit-minus,.devep-minus,.schl-minus,.exist-minus,.sixth-minus,.seventh-minus").hide();
    $(".facilit-plus,.devep-plus,.schl-plus,.exist-plus,.sixth-plus,.seventh-plus").show();
});
$("#invst-heading-six").click(function () {
  $(".sixth-plus").toggle();
  $(".sixth-minus").toggle();
  $(".facilit-minus,.devep-minus,.schl-minus,.exist-minus,.fifth-minus,.seventh-minus").hide();
  $(".facilit-plus,.devep-plus,.schl-plus,.exist-plus,.fifth-plus,.seventh-plus").show();
});
$("#invst-heading-seven").click(function () {
  $(".seventh-plus").toggle();
  $(".seventh-minus").toggle();
  $(".facilit-minus,.devep-minus,.schl-minus,.exist-minus,.fifth-minus,.sixth-minus").hide();
  $(".facilit-plus,.devep-plus,.schl-plus,.exist-plus,.fifth-plus,.sixth-plus").show();
});
  $('.card').on("click", function () {
      $(this).siblings().find(".card-header").removeClass("card-heading-active");
      $(this).find(".card-header").toggleClass("card-heading-active");
  });

});
/* -- Electronic Hardware Mobile -- */
$(document).ready(function(){

  $("#govt-init-electronics-mob").hide();

  $('.elehw_criteria_card_header').on("click", function() {
    $(this).siblings().find(".elehw_criteria_card_header").removeClass("criteria_active_header");
    $(this).find(".elehw_criteria_card_header").toggleClass("criteria_active_header");
  });


  $("#criteria_card_one").click(function(){
      $(".focus_mob_plus_one").toggle();
      $(".focus_mob_minus_one").toggle();
      $(".focus_mob_plus_two,.focus_mob_plus_three").show();
      $(".focus_mob_minus_two,.focus_mob_minus_three").hide();
  })
  $("#criteria_card_two").click(function(){
    $(".focus_mob_plus_two").toggle();
    $(".focus_mob_minus_two").toggle();
    $(".focus_mob_plus_one,.focus_mob_plus_three").show();
    $(".focus_mob_minus_one,.focus_mob_minus_three").hide();
  })
  $("#criteria_card_three").click(function(){
    $(".focus_mob_plus_three").toggle();
    $(".focus_mob_minus_three").toggle();
    $(".focus_mob_plus_one,.focus_mob_plus_two").show();
    $(".focus_mob_minus_one,.focus_mob_minus_two").hide();
  })
  


  $('.incen_cat_cmn').on('click',function(){
      $('.incen_cat_cmn').removeClass('incen_cat_active');
      $(this).addClass('incen_cat_active');
  });
  
});
/* -- End -- */


/* for company logos */

/*=============================================================
      TOP INVESTERS
============================================================= */
$(document).ready(function () {
  $('.top_invs_slide').scroll(function () {
    var screen_width = $('html').width();
    var top_invs_scroll_left = (150 / 414) * screen_width;
    if ($(this).scrollLeft() > top_invs_scroll_left) {
      $(this).addClass('invs_scroll_right_margin');
    } else {
      $(this).removeClass('invs_scroll_right_margin');
    }
  });

  //$(".top_invs_slide:eq(4)").hide();
  $(".top_invs_slide:eq(5)").hide();
  $(".top_invs_slide:eq(6)").hide();
  //$(".img-section:eq(4)").removeClass("carousel-item");
  $(".img-section:eq(5)").removeClass("carousel-item");
  $(".img-section:eq(6)").removeClass("carousel-item");
  $(".img-section:eq(7)").removeClass("carousel-item");
  $(".img-section:eq(8)").removeClass("carousel-item");


  if($('html').width() < 767 ){
    $('.caro_item_top_invs').removeClass('carousel-item');
    $('.caro_item_top_invs').addClass('active-contents float-none');
    $('.caro_inner_top_invs').addClass('overflow_scroll');
  }

});

/* end */
$(document).ready(function(){
  $('.govt-ie-cmn').on('click',function(){
    
      $('.govt-ie-cmn').removeClass('govt-ie-active-class');
      $(this).addClass('govt-ie-active-class');

  });

  if($('html').width() < 767 ){
    //alert($('html').width());
    $('.ti-caro-item').removeClass('carousel-item');
    $('.ti-caro-item').addClass('active-contents float-none');
    $('.ti-caro-inner').addClass('ti-oflw-scroll');
  }

});



function openCriteria(tabname) {
  var i;
  var x = document.getElementsByClassName("criteriacommontab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabname).style.display = "block";  
}









fetch('../themes/tnswp/libs/json_data/individual_sector.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                append_individual_sector_data(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function append_individual_sector_data(data) {
            $(document).ready(function () {

                var url = new URL(window.location.href);
                var url_param = url.searchParams.get("sector");
                // console.log(url_param);
                for (var i = 0; i < data.length; i++) {

                    if (data[i].key_name == url_param) {
                      $("#sector_path_name").text(data[i].sector_name);
                      $(".sector_title").text(data[i].sector_name);
                      $("#first_policy").text(data[i].first_policy_name);
                      $("#first_policy").attr("href",contextPath+data[i].first_policy_url);
                      $("#second_policy").text(data[i].second_policy_name);
                      $("#second_policy").attr("href",contextPath+data[i].second_policy_url);
                      $("#third_policy").text(data[i].third_policy_name);
                      $("#third_policy").attr("href",contextPath+data[i].third_policy_url);
                      $("#fourth_policy").text(data[i].fourth_policy_name);
                      $("#fourth_policy").attr("href",contextPath+data[i].fourth_policy_url);
                      $(".sector_desc").text(data[i].sector_desc);
                      $("#sector_banner_img").attr("src",data[i].sector_banner_img);
                      $("#sector_details").text(data[i].sector_details);
                      $("#first-div-no").html(data[i].first_div_no);
                      $("#first-div-detail").text(data[i].first_div_detail);
                      $("#second-div-no").html(data[i].second_div_no);
                      $("#second-div-detail").text(data[i].second_div_detail);
                      $("#third-div-no").html(data[i].third_div_no);
                      $("#third-div-detail").text(data[i].third_div_detail);
                      $("#fourth-div-no").html(data[i].fourth_div_no);
                      $("#fourth-div-detail").text(data[i].fourth_div_detail);
                      $("#sector_high").attr("src",data[i].sector_high);
                      $(".sect_high_point").html(data[i].sector_high_point);

                      //Added by Arjit
                      $(".as_experts_title").text(data[i].experts_title);

                      //first expert 
                      $(".as_expert_image:eq(0)").attr("src",data[i].expert_image_first);
                      $(".as_expert_name:eq(0)").text(data[i].experts_name_first);
                      $("#mail_id_first").text(data[i].experts_mail_id_first);
                      $("#mail_id_first").attr("href",data[i].experts_mail_to_first);

                      //second expert
                      $(".as_expert_image:eq(1)").attr("src",data[i].expert_image_second);
                      $(".as_expert_name:eq(1)").text(data[i].experts_name_second);
                      $("#mail_id_second").text(data[i].experts_mail_id_second);
                      $("#mail_id_second").attr("href",data[i].experts_mail_to_second);

                      $(".img-icon:eq(0)").attr("src",data[i].first_icon);
                      $(".card-txt:eq(0)").text(data[i].first_card);

                      $(".img-icon:eq(1)").attr("src",data[i].second_icon);
                      $(".card-txt:eq(1)").text(data[i].second_card);

                      $(".img-icon:eq(2)").attr("src",data[i].third_icon);
                      $(".card-txt:eq(2)").text(data[i].third_card);
                      $(".img-left").attr("src",data[i].invest_img);

                      $(".img-icon:eq(3)").attr("src",data[i].fourth_icon);
                      $(".card-txt:eq(3)").text(data[i].fourth_card);

                      $(".img-icon:eq(4)").attr("src",data[i].fifth_icon);
                      $(".card-txt:eq(4)").text(data[i].fifth_card);

                      //invest oppor
                      $(".invst-txt:eq(0)").text(data[i].invst_txt_zero);
                      $(".invst_body:eq(0)").text(data[i].invst_body_zero);
                      $(".first_invst_list:eq(0)").text(data[i].first_invst_list0);
                      $(".second_invst_list:eq(0)").text(data[i].second_invst_list0);
                      $(".third_invst_list:eq(0)").text(data[i].third_invst_list0);
                      $(".fourth_invst_list:eq(0)").text(data[i].fourth_invst_list0);
                      $(".fifth_invst_list:eq(0)").text(data[i].fifth_invst_list0);
                      $(".sixth_invst_list:eq(0)").text(data[i].sixth_invst_list0);


                      $(".invst-txt:eq(1)").text(data[i].invst_txt_first);
                      $(".invst_body:eq(1)").text(data[i].invst_body_first);
                      $(".first_invst_list:eq(1)").text(data[i].first_invst_list1);
                      $(".second_invst_list:eq(1)").text(data[i].second_invst_list1);
                      $(".third_invst_list:eq(1)").text(data[i].third_invst_list1);
                      $(".fourth_invst_list:eq(1)").text(data[i].fourth_invst_list1);
                      $(".fifth_invst_list:eq(1)").text(data[i].fifth_invst_list1);
                      $(".sixth_invst_list:eq(1)").text(data[i].sixth_invst_list1);



                      $(".invst-txt:eq(2)").text(data[i].invst_txt_second);
                      $(".invst_body:eq(2)").text(data[i].invst_body_second);
                      $(".first_invst_list:eq(2)").text(data[i].first_invst_list2);
                      $(".second_invst_list:eq(2)").text(data[i].second_invst_list2);
                      $(".third_invst_list:eq(2)").text(data[i].third_invst_list2);
                      $(".fourth_invst_list:eq(2)").text(data[i].fourth_invst_list2);
                      $(".fifth_invst_list:eq(2)").text(data[i].fifth_invst_list2);
                      $(".sixth_invst_list:eq(2)").text(data[i].sixth_invst_list2);


                      $(".invst-txt:eq(3)").text(data[i].invst_txt_third);
                      $(".invst_body:eq(3)").text(data[i].invst_body_third);
                      $(".first_invst_list:eq(3)").text(data[i].first_invst_list3);
                      $(".second_invst_list:eq(3)").text(data[i].second_invst_list3);
                      $(".third_invst_list:eq(3)").text(data[i].third_invst_list3);
                      $(".fourth_invst_list:eq(3)").text(data[i].fourth_invst_list3);
                      $(".fifth_invst_list:eq(3)").text(data[i].fifth_invst_list3);
                      $(".sixth_invst_list:eq(3)").text(data[i].sixth_invst_list3);



                      $(".invst-txt:eq(4)").text(data[i].invst_txt_fourth);
                      $(".invst_body:eq(4)").text(data[i].invst_body_fourth);
                      $(".first_invst_list:eq(4)").text(data[i].first_invst_list4);
                      $(".second_invst_list:eq(4)").text(data[i].second_invst_list4);
                      $(".third_invst_list:eq(4)").text(data[i].third_invst_list4);
                      $(".fourth_invst_list:eq(4)").text(data[i].fourth_invst_list4);
                      $(".fifth_invst_list:eq(4)").text(data[i].fifth_invst_list4);
                      $(".sixth_invst_list:eq(4)").text(data[i].sixth_invst_list4);


                      $(".invst-txt:eq(5)").text(data[i].invst_txt_fifth);
                      $(".invst_body:eq(5)").text(data[i].invst_body_fifth);
                      $(".first_invst_list:eq(5)").text(data[i].first_invst_list5);
                      $(".second_invst_list:eq(5)").text(data[i].second_invst_list5);
                      $(".third_invst_list:eq(5)").text(data[i].third_invst_list5);
                      $(".fourth_invst_list:eq(5)").text(data[i].fourth_invst_list5);
                      $(".fifth_invst_list:eq(5)").text(data[i].fifth_invst_list5);
                      $(".sixth_invst_list:eq(5)").text(data[i].sixth_invst_list5);

                      $(".invst-txt:eq(6)").text(data[i].invst_txt_sixth);
                      $(".invst_body:eq(6)").text(data[i].invst_body_sixth);
                      $(".first_invst_list:eq(6)").text(data[i].first_invst_list6);
                      $(".second_invst_list:eq(6)").text(data[i].second_invst_list6);
                      $(".third_invst_list:eq(6)").text(data[i].third_invst_list6);
                      $(".fourth_invst_list:eq(6)").text(data[i].fourth_invst_list6);
                      $(".fifth_invst_list:eq(6)").text(data[i].fifth_invst_list6);
                      $(".sixth_invst_list:eq(6)").text(data[i].sixth_invst_list6);

                      $(".invst_card:eq(6)").hide();

                      //for electronics hardware
                      $("#govt-init-electronics").hide();
                      //end

                      // company logos
                      $(".major_companies").text(data[i].major_companies);
                      $(".img_card:eq(0)").attr("src",data[i].img_card0);
                      $(".img_card:eq(1)").attr("src",data[i].img_card1);
                      $(".img_card:eq(2)").attr("src",data[i].img_card2);
                      $(".img_card:eq(3)").attr("src",data[i].img_card3);
                      $(".img_card:eq(4)").attr("src",data[i].img_card4);

                      $(".img_card:eq(5)").attr("src",data[i].img_card5);
                      $(".img_card:eq(6)").attr("src",data[i].img_card6);
                      $(".img_card:eq(7)").attr("src",data[i].img_card7);
                      $(".img_card:eq(8)").attr("src",data[i].img_card8);
                      $(".img_card:eq(9)").attr("src",data[i].img_card9);
                      $(".img_card:eq(10)").attr("src",data[i].img_card10);
                      $(".img_card:eq(11)").attr("src",data[i].img_card11);
                      $(".img_card:eq(12)").attr("src",data[i].img_card12);
                      $(".img_card:eq(13)").attr("src",data[i].img_card13);
                      $(".img_card:eq(14)").attr("src",data[i].img_card14);
                      $(".img_card:eq(15)").attr("src",data[i].img_card15);
                      $(".img_card:eq(16)").attr("src",data[i].img_card16);
                      $(".img_card:eq(17)").attr("src",data[i].img_card17);
                      $(".img_card:eq(18)").attr("src",data[i].img_card18);
                      $(".img_card:eq(19)").attr("src",data[i].img_card19);

                      $(".img_card:eq(20)").attr("src",data[i].img_card20);

                      $(".img_card:eq(21)").attr("src",data[i].img_card21);
                      $(".img_card:eq(22)").attr("src",data[i].img_card22);
                      $(".img_card:eq(23)").attr("src",data[i].img_card23);
                      $(".img_card:eq(24)").attr("src",data[i].img_card24);
                      $(".img_card:eq(25)").attr("src",data[i].img_card25);
                      $(".img_card:eq(26)").attr("src",data[i].img_card26);
                      $(".img_card:eq(27)").attr("src",data[i].img_card27);
                      $(".img_card:eq(28)").attr("src",data[i].img_card28);
                      $(".img_card:eq(29)").attr("src",data[i].img_card29);
                      $(".img_card:eq(30)").attr("src",data[i].img_card30);
                      $(".img_card:eq(31)").attr("src",data[i].img_card31);
                      $(".img_card:eq(32)").attr("src",data[i].img_card32);

                      $(".img_card:eq(33)").attr("src",data[i].img_card33);

                      $(".profile-image:eq(0)").attr("src",data[i].first_testimony);
                      $(".bc-profile-name:eq(0)").text(data[i].first_testimony_name);
                      $(".bc-content:eq(0)").text(data[i].first_testimony_desgn);
                      $(".bc-description:eq(0)").html(data[i].first_testimony_desc);

                      $(".profile-image:eq(1)").attr("src",data[i].second_testimony);
                      $(".bc-profile-name:eq(1)").text(data[i].second_testimony_name);
                      $(".bc-content:eq(1)").text(data[i].second_testimony_desgn);
                      $(".bc-description:eq(1)").text(data[i].second_testimony_desc);

                      $(".profile-image:eq(2)").attr("src",data[i].third_testimony);
                      $(".bc-profile-name:eq(2)").text(data[i].third_testimony_name);
                      $(".bc-content:eq(2)").text(data[i].third_testimony_desgn);
                      $(".bc-description:eq(2)").text(data[i].third_testimony_desc);

                      $(".profile-image:eq(3)").attr("src",data[i].fourth_testimony);
                      $(".bc-profile-name:eq(3)").text(data[i].fourth_testimony_name);
                      $(".bc-content:eq(3)").text(data[i].fourth_testimony_desgn);
                      $(".bc-description:eq(3)").text(data[i].fourth_testimony_desc);

                      $(".profile-image:eq(4)").attr("src",data[i].fifth_testimony);
                      $(".bc-profile-name:eq(4)").text(data[i].fifth_testimony_name);
                      $(".bc-content:eq(4)").text(data[i].fifth_testimony_desgn);
                      $(".bc-description:eq(4)").text(data[i].fifth_testimony_desc);

                      $(".profile-image:eq(5)").attr("src",data[i].sixth_testimony);
                      $(".bc-profile-name:eq(5)").text(data[i].sixth_testimony_name);
                      $(".bc-content:eq(5)").text(data[i].sixth_testimony_desgn);
                      $(".bc-description:eq(5)").text(data[i].sixth_testimony_desc);
                      
                      //end
                      document.title = data[i].sector_name;
                    }

                    //state : for every 2
                    if(url_param == "focus_chemicals_petrochemicals" || url_param =="focus_IT" || url_param =="focus_electronics_hardware" || url_param == "focus_aerospace" ||
                      url_param == "focus_renewable_energy" || url_param =="focus_heavy_engineering" || url_param =="focus_machine_tools" ||
                      url_param == "sunrise_aerospace_defense" || url_param == "sunrise_renewable_energy" || url_param =="sunrise_electronics" ||
                      url_param == "sunrise_electric_vehicles" || url_param == "sunrise_petrochemicals")
                      {
                      $(".third-ach-cont,.fourth-ach-cont").hide();
                    }

                    //state : for every 3
                    if(url_param =="focus_pharma_biotech" || url_param == "sunrise_medical" || url_param == "sunrise_biotechnology" ||
                      url_param == "sunrise_pharmaceuticals" || url_param =="sunrise_footwear" || url_param == "sunrise_fintech"){
                      $(".fourth-ach-cont").hide();
                    }

                    //state : for every 1
                    if(url_param == "focus_iron_steel" || url_param == "focus_glass_ceramics" ){
                      $(".second-ach-cont,.third-ach-cont,.fourth-ach-cont").hide();
                      $(".sector-ach").addClass("single-ach-div");
                    }

                    //Latest Policies:for every 2
                    if(
                      url_param == "focus_textile_apparel" ||
                      url_param == "focus_industrial_parks" ||
                      url_param == "sunrise_textiles" || url_param == "sunrise_fintech"
                      ){
                      $("#third_policy_list,#fourth_policy_list").hide();
                    }
                    //Latest Policies:for every 1
                    if(url_param == "focus_iron_steel" || 
                      url_param =="focus_glass_ceramics" || url_param =="focus_chemicals_petrochemicals" 
                      ||url_param == "sunrise_petrochemicals" || url_param == "sunrise_footwear"){
                      $("#second_policy_list,#third_policy_list,#fourth_policy_list").hide();
                    }

                    //Latest Policies:for every 3,4 hide
                    if(url_param == "focus_agro_food_processing" || url_param == "sunrise_agro_food"){
                      $("#third_policy_list,#fourth_policy_list").hide();
                    }
                   
                    //Latest Policies: hide 4th policy
                    if(url_param == "focus_pharma_biotech" || url_param == "focus_heavy_engineering" || url_param == "focus_machine_tools" || url_param == "sunrise_medical" || url_param == "sunrise_biotechnology" || url_param == "sunrise_pharmaceuticals"){
                      $("#fourth_policy_list").hide();
                    }

                    //Increase hight of highlights div according to their content
                    if(url_param =="sunrise_electric_vehicles"){
                      $(".sect-high-img").addClass("ev-high-img");
                    }
                    if(url_param == "sunrise_aerospace_defense"||url_param == "focus_aerospace"){
                      $(".sect-high-img").addClass("aerospace-high-img");
                    }
                    if(url_param == "focus_iron_steel"||url_param == "focus_industrial_parks"){
                      $(".sect-high-img").addClass("iron-indu-high-img");
                    }
                    if(url_param == "focus_automobile"){
                              $(".as_expert_image:eq(1)").hide();
                              $(".as_expert_name:eq(1)").hide();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();
                              $(".invest_list:eq(0)").hide();
                              $(".fourth_invst_list:eq(1)").hide();
                              $(".fifth_invst_list:eq(1)").hide();
                              $(".sixth_invst_list:eq(1)").hide();

                              $(".third_invst_list:eq(2)").hide();
                              $(".fourth_invst_list:eq(2)").hide();
                              $(".fifth_invst_list:eq(2)").hide();
                              $(".sixth_invst_list:eq(2)").hide();

                              $(".fourth_invst_list:eq(4)").hide();
                              $(".fifth_invst_list:eq(4)").hide();
                              $(".sixth_invst_list:eq(4)").hide();

                              $(".first_invst_list:eq(5)").hide();
                              $(".second_invst_list:eq(5)").hide();
                              $(".third_invst_list:eq(5)").hide();
                              $(".fourth_invst_list:eq(5)").hide();
                              $(".fifth_invst_list:eq(5)").hide();
                              $(".sixth_invst_list:eq(5)").hide();

                              $(".div-line:eq(5)").hide();

                              // added to increase image height 
                              $(".img-left").addClass("img-left-automobile");

                              //$(".sector_caro_test_three").removeClass("carousel-item");
                              //$(".sector_caro_test_two").removeClass("carousel-item");
                              //$(".sector_caro_test_three").hide();
                              //$(".sector_caro_test_two").hide();

                              
                              $(".top_invs_img_container:eq(18)").hide();
                              $(".top_invs_img_container:eq(19)").hide();
                              $(".top_invs_img_container:eq(20)").hide();
                              $(".top_invs_img_container:eq(21)").hide();

                              $(".top_business_slide").addClass("automobile_testi");

                              $(".top_invs_slide:eq(8)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(5)").hide();

                              for(var j=6;j<9;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }
                    }
                    if(url_param == "focus_chemicals_petrochemicals" || url_param == "sunrise_petrochemicals"){
                              $(".card_potential:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $(".invest_list").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").hide();
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              $(".top_invs_img_container:eq(16)").hide();
                              $(".top_invs_img_container:eq(17)").hide();
                              $(".top_invs_img_container:eq(18)").hide();
                              $(".top_invs_img_container:eq(19)").hide();

                              $(".top_business_slide").addClass("chemicals_petrochemicals_testi");
                              $(".img-section:eq(4)").removeClass("carousel-item");

                              $(".top_invs_slide:eq(8)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(4)").show();

                              for(var j=4;j<9;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }
                        
                    }
                    if(url_param == "focus_agro_food_processing" || url_param == "sunrise_agro_food"){
                             
                            $(".as_expert_image:eq(1)").show();
                            $(".as_expert_name:eq(1)").show();
                            
                              $("#third_policy_list").hide();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();

                              $(".fifth_invst_list:eq(0)").hide();
                              $(".sixth_invst_list:eq(0)").hide();

                              $(".fourth_invst_list:eq(2)").hide();
                              $(".fifth_invst_list:eq(2)").hide();
                              $(".sixth_invst_list:eq(2)").hide();

                              $(".third_invst_list:eq(3)").hide();
                              $(".fourth_invst_list:eq(3)").hide();
                              $(".fifth_invst_list:eq(3)").hide();
                              $(".sixth_invst_list:eq(3)").hide();

                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();
                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").hide();
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              $(".top_business_slide").addClass("agro_food_processing_testi");

                              $(".top_invs_slide:eq(8)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(4)").show();

                    }
                    if(url_param == "focus_IT"){
                              $(".as_expert_image:eq(0)").hide();
                              $(".as_expert_details:eq(0)").hide();

                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();
                              $(".invest_list").hide();
                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();

                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".business-card:eq(3)").hide();
                              $(".business-card:eq(2)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(1)").addClass("testi_align_center");

                              // companies
                              $(".top_invs_img_container:eq(6)").hide();
                              $(".top_invs_img_container:eq(7)").hide();
                              $(".top_invs_img_container:eq(8)").hide();
                              $(".top_invs_img_container:eq(9)").hide();

                              for(var j=6;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<9;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }

                              $(".top_business_slide").addClass("IT_testi");
                              $(".top_invs_slide:eq(8)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(2)").hide();
                              

                    }
                    if(url_param =="focus_pharma_biotech"){

                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_name:eq(0)").show();

                              //$(".invst_card").hide();
                              $(".invst_card:eq(6)").show();
                              $(".invest_list:eq(3)").hide();
                              $(".invest_list:eq(4)").hide();
                              $(".invest_list:eq(5)").hide();
                              $(".third_invst_list:eq(1)").hide();

                              for(var j=0;j<3;j++){
                                $(".fourth_invst_list:eq("+j+")").hide();
                                $(".fifth_invst_list:eq("+j+")").hide();
                                $(".sixth_invst_list:eq("+j+")").hide();
                               }

                               $("#testimonials-section").hide();
                               for(var j=9;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=3;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }
                              $(".top_invs_slide:eq(8)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                    }
                    if(url_param == "focus_textile_apparel" || url_param == "sunrise_textiles"){

                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_name:eq(0)").show();

                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();
                              $(".first_invst_list:eq(1)").hide();
                              $(".second_invst_list:eq(1)").hide();
                            
                              $(".first_invst_list:eq(2)").hide();
                              $(".second_invst_list:eq(2)").hide();

                              $(".div-line:eq(5)").hide();

                              for(var j=0;j<6;j++){
                                $(".third_invst_list:eq("+j+")").hide();
                                $(".fourth_invst_list:eq("+j+")").hide();
                                $(".fifth_invst_list:eq("+j+")").hide();
                                $(".sixth_invst_list:eq("+j+")").hide();
                                
                                
                              }
                              $("#testimonials-section").hide();
                              $(".top_invs_slide:eq(4)").show();
                              $(".top_invs_slide:eq(5)").show();
                              $(".top_invs_slide:eq(6)").show();

                              
                              for(var j=5;j<9;j++){
                                $(".img-section:eq("+j+")").addClass("carousel-item");                        
                              }
                    }

                    if(url_param == "focus_electronics_hardware" || url_param == "sunrise_electronics"){
                              $("#invst-opputnty").hide();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();
                              $("#govt-init-electronics").show();
                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_details:eq(0)").show();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              for(var j=11;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=3;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }

                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              $(".top_business_slide").addClass("electronics_hardware_testi");
                              if($('html').width() < 767 ){
                                $("#govt-init-electronics-mob").show();
                                $("#govt-init-electronics").hide();
                                $(".ti-caro-inner").addClass("testi-justify-center");
                              }

                      
                    }

                    if(url_param == "focus_aerospace" || url_param == "sunrise_aerospace_defense"){
                              $(".as_expert_image:eq(0)").hide();
                              $(".as_expert_details:eq(0)").hide();
                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();
                              $(".invst_body:eq(0)").hide();

                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();
                              
                              for(var j=0;j<6;j++){
                                $(".third_invst_list:eq("+j+")").hide();
                                $(".fourth_invst_list:eq("+j+")").hide();
                                $(".fifth_invst_list:eq("+j+")").hide();
                                $(".sixth_invst_list:eq("+j+")").hide();
                                
                              }
                              for(var j=1;j<4;j++){
                                $(".first_invst_list:eq("+j+")").hide();
                                $(".second_invst_list:eq("+j+")").hide();
                              }


                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              for(var j=4;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=1;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                        
                              }

                              $(".top_invs_slide:eq(1)").hide();
                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();
                              $(".carousel-control-prev:eq(0)").hide();
                              $(".carousel-control-next:eq(0)").hide();

                              $(".top_business_slide").addClass("aerospace_testi");
                              if($("html").width() < 767){
                                $(".ti-caro-inner").addClass("testi-justify-center");
                              }

                    }
                    if(url_param == "focus_renewable_energy"  ||  url_param == "sunrise_renewable_energy"){
                              $(".as_expert_image:eq(0)").hide();
                              $(".as_expert_details:eq(0)").hide();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();

                              $(".third_invst_list:eq(0)").hide();
                              $(".fourth_invst_list:eq(0)").hide();
                              $(".fifth_invst_list:eq(0)").hide();
                              $(".sixth_invst_list:eq(0)").hide();

                              $(".invst_body:eq(0)").hide();
                              $(".invst_body:eq(1)").hide();
                              $(".fourth_invst_list:eq(1)").hide();
                              $(".fifth_invst_list:eq(1)").hide();
                              $(".sixth_invst_list:eq(1)").hide();

                              $(".first_invst_list:eq(2)").hide();
                              $(".second_invst_list:eq(2)").hide();
                              $(".third_invst_list:eq(2)").hide();
                              $(".fourth_invst_list:eq(2)").hide();
                              $(".fifth_invst_list:eq(2)").hide();
                              $(".sixth_invst_list:eq(2)").hide();

                              $(".invst_card:eq(3)").hide();
                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();

                              $(".div-line:eq(2)").hide();
                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              for(var j=9;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=3;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();


                              $(".top_business_slide").addClass("renewable_energy_testi");
                              if($("html").width() < 767){
                                $(".ti-caro-inner").addClass("testi-justify-center");
                              }
                    }

                    if(url_param == "focus_heavy_engineering"){
                              $(".invest_list").hide();
                              $(".card_potential:eq(4)").hide();
                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();

                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $(".business-card:eq(5)").hide();
                              $(".business-card:eq(4)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(2)").addClass("testi_align_center");

                              for(var j=6;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }

                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              $(".top_business_slide").addClass("heavy_engineering_testi");

                    }
                    if(url_param == "focus_iron_steel"){
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();

                              $("#invst-opputnty").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              for(var j=7;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }

                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              $(".top_business_slide").addClass("iron_steel_testi");
                              if($("html").width() < 767){
                                $(".ti-caro-inner").addClass("testi-justify-center");
                              }
                    }
                    if(url_param == "focus_glass_ceramics"){
                              $(".card_potential:eq(4)").hide();

                              $("#invst-opputnty").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();

                              for(var j=5;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }

                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              $(".top_business_slide").addClass("glass_ceramics_testi");
                              if($("html").width() < 767){
                                $(".ti-caro-inner").addClass("testi-justify-center");
                              }
                    }
                    if(url_param == "focus_machine_tools"){
                              $(".card_potential:eq(4)").hide();

                              $("#invst-opputnty").hide();
                              $("#testimonials-section").hide();

                              for(var j=6;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                    }
                    if(url_param == "focus_industrial_parks"){

                              $(".invst_card:eq(6)").show();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();
                              $(".invest_list").hide();

                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".business-card:eq(3)").hide();
                              $(".business-card:eq(2)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(1)").addClass("testi_align_center");

                              for(var j=5;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }

                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              $(".top_business_slide").addClass("industrial_parks_testi");
                    }

                   if(url_param == "sunrise_medical"){
                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_name:eq(0)").show();

                              $(".invst_card:eq(5)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();
                              $(".invest_list").hide();
                              $("#testimonials-section").hide();

                              for(var j=6;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();
                   }
                   if(url_param == "sunrise_electric_vehicles"){
                              $(".card_potential:eq(4)").hide();
                              $(".as_expert_image:eq(0)").hide();
                              $(".as_expert_name:eq(0)").hide();

                              $(".invst_card:eq(5)").hide();
                              $(".invest_list").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              $("#testimonials-section").hide();

                              for(var j=14;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=4;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();
                   }
                   if(url_param == "sunrise_footwear"){
                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_name:eq(0)").show();

                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();
                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();
                              $(".invest_list").hide();
                              $(".invest_list:eq(3)").show();
                              $(".card_potential:eq(3)").hide();
                              $(".card_potential:eq(4)").hide();


                              $(".sector_caro_test_three").removeClass("carousel-item");
                              $(".sector_caro_test_two").removeClass("carousel-item");
                              $(".sector_caro_test_three").hide();
                              $(".sector_caro_test_two").hide();
                              $(".business-card:eq(1)").hide();
                              $(".business-card:eq(0)").addClass("testi_width_dec");
                              $(".top_business_slide:eq(0)").addClass("testi_align_center");
                              $(".carousel-control-prev:eq(1)").hide();
                              $(".carousel-control-next:eq(1)").hide();
                              // $("#testimonials-section").hide();

                              for(var j=8;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=2;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              // $(".carousel-control-prev").hide();
                              // $(".carousel-control-next").hide();

                              // $(".top_invs_slide:eq(1)").hide();
                              $(".top_invs_slide:eq(2)").hide();
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();

                              for(var j=5;j<9;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                         
                              }

                          }
                   if(url_param == "sunrise_biotechnology"){

                              $(".as_expert_image:eq(0)").show();
                              $(".as_expert_name:eq(0)").show();

                              $(".invst_card:eq(3)").hide();
                              $(".invst_card:eq(4)").hide();
                              $(".invst_card:eq(5)").hide();
                              $(".div-line:eq(2)").hide();
                              $(".div-line:eq(3)").hide();
                              $(".div-line:eq(4)").hide();
                              $(".div-line:eq(5)").hide();

                              for(var j=0;j<6;j++){
                                $(".first_invst_list:eq("+j+")").hide();
                                $(".second_invst_list:eq("+j+")").hide();
                                $(".third_invst_list:eq("+j+")").hide();
                                $(".fourth_invst_list:eq("+j+")").hide();
                                $(".fifth_invst_list:eq("+j+")").hide();
                                $(".sixth_invst_list:eq("+j+")").hide();
                              }
                              $("#testimonials-section").hide();

                              for(var j=9;j<20;j++){
                                $(".top_invs_img_container:eq("+j+")").hide();
                              }
                              for(var j=3;j<7;j++){
                                $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                              }
                              $(".top_invs_slide:eq(3)").hide();
                              $(".top_invs_slide:eq(4)").hide();
                              $(".top_invs_slide:eq(5)").hide();
                              $(".top_invs_slide:eq(6)").hide();
                              $(".top_invs_slide:eq(7)").hide();
                              $(".top_invs_slide:eq(8)").hide();
                   }
                   if(url_param == "sunrise_pharmaceuticals"){
                                $(".invst_card:eq(3)").hide();
                                $(".invst_card:eq(4)").hide();
                                $(".invst_card:eq(5)").hide();
                                $(".div-line:eq(2)").hide();
                                $(".div-line:eq(3)").hide();
                                $(".div-line:eq(4)").hide();
                                $(".div-line:eq(5)").hide();
                                
                                $(".as_expert_image:eq(0)").show();
                                $(".as_expert_name:eq(0)").show();
                                
                                for(var j=0;j<6;j++){
                                  $(".third_invst_list:eq("+j+")").hide();
                                  $(".fourth_invst_list:eq("+j+")").hide();
                                  $(".fifth_invst_list:eq("+j+")").hide();
                                  $(".sixth_invst_list:eq("+j+")").hide();
                                  
                                }
                                $("#testimonials-section").hide();

                                for(var j=9;j<20;j++){
                                  $(".top_invs_img_container:eq("+j+")").hide();
                                }
                                for(var j=3;j<7;j++){
                                  $(".img-section:eq("+j+")").removeClass("carousel-item");                     
                                }
                                $(".top_invs_slide:eq(3)").hide();
                                $(".top_invs_slide:eq(4)").hide();
                                $(".top_invs_slide:eq(5)").hide();
                                $(".top_invs_slide:eq(6)").hide();
                                $(".top_invs_slide:eq(7)").hide();
                                $(".top_invs_slide:eq(8)").hide();
                   }
                   if(url_param == "sunrise_fintech"){
                    $(".card_potential:eq(3)").hide();
                    $(".card_potential:eq(4)").hide();
                   
                    $(".div-line:eq(4)").hide();
                    $(".div-line:eq(5)").hide();

                    $(".sector_caro_test_three").removeClass("carousel-item");
                    $(".sector_caro_test_two").removeClass("carousel-item");
                    $(".sector_caro_test_three").hide();
                    $(".sector_caro_test_two").hide();
                    $(".carousel-control-prev:eq(1)").hide();
                    $(".carousel-control-next:eq(1)").hide();
                    $(".img-section:eq(4)").removeClass("carousel-item");
                    $(".invst_card:eq(5)").hide();

                    $(".top_invs_img_container:eq(16)").hide();
                    $(".top_invs_img_container:eq(17)").hide();
                    $(".top_invs_img_container:eq(18)").hide();
                    $(".top_invs_img_container:eq(19)").hide();

                    $(".business-card:eq(1)").hide();
                    $(".business-card:eq(0)").addClass("testi_width_dec");
                    $(".top_business_slide:eq(0)").addClass("testi_align_center");
                    
                    for(var j=8;j<20;j++){
                      $(".top_invs_img_container:eq("+j+")").hide();

                    }  

                    for(var j=2;j<7;j++){
                      $(".img-section:eq("+j+")").removeClass("carousel-item"); 
                    } 
                    $(".top_invs_slide:eq(2)").hide();
                    $(".top_invs_slide:eq(3)").hide();
                    $(".top_invs_slide:eq(4)").hide();
                    $(".top_invs_slide:eq(5)").hide();
                    $(".top_invs_slide:eq(6)").hide();
                    $(".top_invs_slide:eq(7)").hide();
                    $(".top_invs_slide:eq(8)").hide();


                    $(".invest_list").hide();

                  


                    for(var j=5;j<9;j++){
                      $(".img-section:eq("+j+")").removeClass("carousel-item");                         
                    }
                   }
                   
                    
            }
        });
}

       
