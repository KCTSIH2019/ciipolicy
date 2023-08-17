/*jQuery(function(){
   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#'+$(this).attr('target')).show();
   });
});*/

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
    
    
    /*$(function() {
        $('a[href*=\\#]:not([href=\\#])').on('click', function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    });*/
    
    // ----------Thilak's sections:---------------
    $(document).ready(function(){
        $('.incentive_criteria_cmn').on('click',function(){
            $('.incentive_criteria_cmn').removeClass('fin_incentive_criteria_active_class');
            $(this).addClass('fin_incentive_criteria_active_class');
        });
        $('.incen_cat_cmn').on('click',function(){
            $('.incen_cat_cmn').removeClass('incen_cat_active');
            $(this).addClass('incen_cat_active');
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
    
    $(document).ready(function() {
      $(".back_to_top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, 2000);
          return false;
      });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* mobile view starts */
    
    
    $(document).ready(function () {
    
        var scr_width= $('html').width();
        var extra_top1= (135/1920)*scr_width; 
    
        $("#ele_veh_target_head").click(function() {
            $('html,body').animate({
                scrollTop: $("#ele_veh_target_cont").offset().top - extra_top1},
                1000);
        });
        
        $("#ele_veh_demand_head").click(function() {
            $('html,body').animate({
                scrollTop: $("#ele_veh_demand_cont").offset().top - extra_top1},
                1200);
        });
    
        $("#ele_veh_supply_head").click(function() {
            $('html,body').animate({
                scrollTop: $("#ele_hw_supply_cont").offset().top - extra_top1},
                1200);
        });
        });
        
        
        $(document).ready(function(){
           
            
        
            $('.incentive_criteria').on('click',function(){
                $('.incentive_criteria').removeClass('ele_veh_incentive_criteria_active_class');
                $(this).addClass('ele_veh_incentive_criteria_active_class');
            });
           
           
          
          
            
        });
        
         
        
        
        
    
    
    
        $(document).ready(function(){
          $('.elehw_card_criteria').on("click", function() {
            $(this).siblings().find(".elehw_criteria_card_header").removeClass("criteria_active_header");
            $(this).find(".elehw_criteria_card_header").toggleClass("criteria_active_header");
          });
          $('.card-body').on("click", function(event) {
              event.stopPropagation();
          });
          });
    
          $(document).ready(function() {
            $(".back_to_top_mob").click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, 2000);
                return false;
            });
          });
     
    