function openSUBab(btnname,tabname) {
    var i;
    var x = document.getElementsByClassName("sub_tab");
    var y = document.getElementsByClassName("sub_tab_btn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
        y[i].className = y[i].className.replace("act_sub_tab_btn", "");
    }
    document.getElementById(tabname).style.display = "block"; 
    document.getElementById(btnname).classList.add('act_sub_tab_btn');
}


function openIETab(btnname,tabname) {
    var i;
    var x = document.getElementsByClassName("inc_entity_inner_tab");
    var y = document.getElementsByClassName("inc_entity_tab_btn");
    for (i = 0; i < y.length; i++) {
      x[i].style.display = "none"; 
        y[i].className = y[i].className.replace("act_inc_entity_btn", "");
    }
    document.getElementById(tabname).style.display = "block"; 
    document.getElementById(btnname).classList.add('act_inc_entity_btn');
}

