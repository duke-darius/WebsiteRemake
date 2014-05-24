document.getElementById("title").innerHTML = "Dj CRU - Home";

var speed = 200;
var delay = 250;

var isSlideBarVisible = false;



function changePage(newPage){
  $('#index').slideUp(speed);
  $('#mixes').slideUp(speed);

  //Add new pages below
  $("#floatMenu").fadeOut(speed);
  $("#"+newPage).delay(delay).slideDown(speed);
  $("#floatMenu").delay(delay).fadeIn(speed);

  switch(newPage){
    case "index":
    document.getElementById("title").innerHTML = "Dj CRU - Home";
    break;

    case "mixes":
    document.getElementById("title").innerHTML = "Dj CRU - Mixes";
    break;
  }
}

  function toggle_visibility(id) {
  var e = document.getElementById(id);
      if(e.style.display != 'none')
      $("#"+id).slideUp();
    else if (e.style.display == 'none'){
      $("#"+id).slideDown();
    }
  }


  var name = "#floatMenu";
  var menuYloc = null;
  
    $(document).ready(function(){
      menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
      $(window).scroll(function () { 
        offset = menuYloc+$(document).scrollTop()+"px";
        $(name).animate({top:offset},{duration:250,queue:false});
      });
    }); 

function slideBar(){
  if (isSlideBarVisible){
    $('#slideBar').animate({ left: "-120px"} , 500);
    $('#slideButton').animate({ left: "0px"} , 500);
    $('#slideButton').removeClass("rotated");
    isSlideBarVisible=false;
  }
  else{
    $('#slideBar').animate({ left: "0px"} , 500);
    $('#slideButton').animate({ left: "120px"} , 500);
    $('#slideButton').addClass("rotated");
    isSlideBarVisible=true;
  }
}

$('#slideButton').on('dragstart', function(event) { event.preventDefault(); });

function getData(url, element){
  $.get(url, function(data) {
  $('#' + element).html(data).slideDown(500);
  }, 'text');
}



function page(page){
	var height = screen.height;
	var targetScroll = height * (page - 1); 
	var curScroll = $(window).scrollTop();
	
	$({someValue: curScroll}).animate({someValue: targetScroll}, {
		duration: 500,
		step: function() { 
			$(window).scrollTop(Math.ceil(this.someValue));
		}
	});
}



