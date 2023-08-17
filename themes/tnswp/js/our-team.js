/*=============================================================
				                  OUR TEAM PAGE
============================================================= */
// function slide(direction,id){
//     var container = document.getElementById(''+id);
//     scrollCompleted = 0;
//     var slideVar = setInterval(function(){
//         if(direction == 'left'){
//             container.scrollLeft -= 80;
//         } else {
//             container.scrollLeft += 80;
//         }
//         scrollCompleted += 80;
//         if(scrollCompleted >= 100){
//             window.clearInterval(slideVar);
//         }
//     }, 50);
//   }
  
//    $(window).scroll(function() {
  
//       if ($(this).scrollTop()>0)
//        {
//           $('.ourteam-header').fadeOut();
//           $('.ourteam-img').addClass( "ourteam-imgnew");
//        }
//       else
//        {
//         $('.ourteam-header').fadeIn();
//         $('.ourteam-img').removeClass( "ourteam-imgnew");
//        }
//    });
function slide(direction){
    var container = document.getElementById('ourteamlist');
    scrollCompleted = 0;
    var slideVar = setInterval(function(){
    if(direction == 'left'){
    container.scrollLeft -= 80;
    } else {
    container.scrollLeft += 80;
    }
    scrollCompleted += 80;
    if(scrollCompleted >= 100){
    window.clearInterval(slideVar);
    }
    }, 50);
    }
    // $(window).scroll(function() {
    // if ($(this).scrollTop()>0)
    // {
    // $('.ourteam-header').fadeOut();
    // $('.ourteam-img').addClass( "ourteam-imgnew");
    // }
    // else
    // {
    // $('.ourteam-header').fadeIn();
    // $('.ourteam-img').removeClass( "ourteam-imgnew");
    // }
    // });
  
  
  
   fetch('../themes/tnswp/libs/json_data/ourteam.json')
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       OurteamAppend(data);
   })
   .catch(function (err) {
       console.log('error: ' + err);
   });
  function OurteamAppend(data) {
   $(document).ready(function () {
       $('.nav-link').on('click', function () {
  
           var txt;
           txt = ($(this).attr('id'));
          
        
           $('#leadership-cards-div').empty(div);
           for (var i = 0; i < data.length; i++) {
               if (data[i].teamid == txt) {
  
  
                   var card_div = "<div class='leadercards-div'>";
                   var card_div2 = "<div class='leadership-cards'>";
                   var card_linkedin="<a class='linkedin-img linedCardCount_"+i+ "' target='_blank' href="+data[i].linkedin+"></a>";
                   var card_fieldset = "<fieldset class='leadership-cardfield'>";
                   var legend = "<legend class='leadership-image adjusted_img'>"
                   var img = "<img src="+ data[i].image + " class='Takashi-Haga-profile-image'>";
                   var div_name = " <div class='leader-name'>";
                   var div_role = "<div class='leader-role'>";
                   var div_unit = "	<div class='leader-unit'>";
                   var div_country = " <div class='leader-country'>";
                   var div_mail = "	<div class='leader-mail'>";
                   var ahref_mail="<a class='leader-mail' href='mailto:'"+ data[i].mail+">"+data[i].mail+"</a>";
                   var close_fieldset = "</fieldset>"
                   var close_legend = "</legend>"
                   var close_div = "</div>";
                   var div = card_div2 +
                   card_linkedin+
                               card_fieldset +
                               legend+
                               img+
                               close_legend+  
                               div_name+
                               data[i].name+
                               close_div+
                               div_role+
                               data[i].description+
                               close_div+
                               div_unit+
                               data[i].unit+
                               close_div+
                               div_country+
                               data[i].country+
                               close_div+
                               div_mail+
                               ahref_mail+
                               close_div+
                               close_fieldset+
                               close_div;
                           
                   $('#leadership-cards-div').append(div); 

                  if(data[i].linkedin === "" || data[i].linkedin === " " || data[i].linkedin === undefined || data[i].linkedin === null ){
                      $('.linkedin-img.linedCardCount_'+i).hide();
                  }
                 
                  
                  
  
               }
               if(txt=="leadership-tab"){
                $('#leadership-cards-div').addClass("leadership-class");
              }
              else{
                $('#leadership-cards-div').removeClass("leadership-class");
              }
              
           }
       });
  
   });
  }
  