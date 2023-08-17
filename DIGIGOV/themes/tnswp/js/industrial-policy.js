/*=============================================================
				             INDUSTRIAL POLICY     
============================================================= */

$(document).ready(function () {


    /*-----------------------------------click-on-scroll-----------------------------*/
    
    var scr_width= $('html').width();
    var extra_top1= (135/1920)*scr_width; 
    var extra_top2= (115/1920)*scr_width;
    
    $("#policy-target-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#policy-div").offset().top - extra_top1},
            1000);
    });
    
    $("#infrastructure-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#infrastructure-div").offset().top - extra_top1},
            1200);
    });
    
    $("#focus-sunrise-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#focus-sunrise-div").offset().top -  extra_top1},
            1200);
    });
    
    $("#incentives-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#policy_incentives").offset().top - extra_top2},
            1200);
    });
    
    $("#highlights-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#other_policy").offset().top - extra_top2},
            1200);
    });
    
    $("#business-sec").click(function() {
        $('html,body').animate({
            scrollTop: $("#ease_of_doing_busi").offset().top - extra_top1},
            1200);
    });
        /*------------------------Infrastructure---------------------------------------*/
      $('.showSingle').click(function(){
            $('.targetDiv').hide();
            $('#'+$(this).attr('target')).show();
            $('#'+$(this).attr('target')).css("display","flex");
      });
      $(".trans-div").on("click", function () {
          $(".trans-click,.indu-hover,.energy-img,.infra-hover").show();
          $('.trans-img,.indu-img,.enerrgy-click,.infra-click').hide();
      });
      
      $(".indu-div").on("click", function () {
          $('.indu-img,.trans-img,.energy-img,.infra-hover').show();
          $(".indu-hover,.trans-click,.enerrgy-click,.infra-click").hide();
      });
      $(".energy-div").on("click", function () {
        $('.enerrgy-click,.trans-img,.indu-hover,.infra-hover').show();
        $(".energy-img,.trans-click,.infra-click,.indu-img").hide();
    });
    $(".infra-div").on("click", function () {
        $('.infra-click,.indu-hover,.trans-img,.energy-img').show();
        $(".infra-hover,.trans-click,.indu-img,.enerrgy-click").hide();
    });
    
    });
    
    // ----------Thilak's sections:---------------
    $(document).ready(function(){
      var screen_width= $('html').width();
      $('.incentive_criteria_cmn').on('click',function(){
          $('.incentive_criteria_cmn').removeClass('incentive_criteria_active_class');
          $(this).addClass('incentive_criteria_active_class');
      });
    $('.incen_cat_cmn').on('click',function(){
          $('.incen_cat_cmn').removeClass('incen_cat_active');
          $(this).addClass('incen_cat_active');
      });
      $('.card_incen').on("click", function() {
          $(this).siblings().find(".incen-card-header").removeClass("incen_active_header_accord");
          $(this).find(".incen-card-header").toggleClass("incen_active_header_accord");
        });
        $('.incen_card_body').on("click", function(event) {
            event.stopPropagation();
        });
    
        $('.card_criteria').on("click", function() {
          $(this).siblings().find(".criteria-card-header").removeClass("criteria_active_header");
          $(this).find(".criteria-card-header").toggleClass("criteria_active_header");
        });
        $('.criteria_card_body').on("click", function(event) {
            event.stopPropagation();
        });
    
    
           if(screen_width < 767){
            $(".incentives_selection").addClass('dropdown-menu');
        }
        else{
            $(".incentives_selection").removeClass('dropdown-menu');
        }
        $(window).resize(function() {
        var screen_width= $('html').width();
        if(screen_width < 767){
            $(".incentives_selection").addClass('dropdown-menu');
        }
        else{
            $(".incentives_selection").removeClass('dropdown-menu');
        }
        });
        $('.incentives_selection div').click(function(){
          $('.selected-incen').text($(this).text());
          });
    });
    function openCriteria(tabname) {
      var i;
      var x = document.getElementsByClassName("criteriacommontab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(tabname).style.display = "block";  
    }
    function openCategory(tabname) {
      var i;
      var x = document.getElementsByClassName("category_cmn_tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(tabname).style.display = "block";  
    }