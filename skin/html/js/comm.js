$(document).ready(function() {
  
   //search
	$(".is-search,.go-left").click(function() {
        $(".search-page").toggle();
    });	
	  
	
    //nav
    $("nav li a:not(:first)").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.parent().addClass("selected");
        }
    });

    $("nav li a").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.parent().addClass("selected");
        }
    });
	
  //nav
    $("#mnavh").click(function() {
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
    });
	
	//aside
    var Sticky = new hcSticky('aside', {
      stickTo: 'main',
      innerTop: 0,
      followScroll: false,
      queries: {
        480: {
          disable: true,
          stickTo: 'body'
        }
      }
    });
	   //scroll to top
        var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.icon-top');
		
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
	 $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });
	
});

	