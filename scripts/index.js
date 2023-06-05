/* Scrolling header */
$(window).on("scroll resize",function(){
  
    console.log( $(window).scrollTop() );
    
    if( $(window).scrollTop() > 200 ) {
      $(".root").addClass("scrolled");
    } else {
      $(".root").removeClass("scrolled");
    }
    
  });
  
  
  $(".user-menu .has-submenu").on("click", function(){
    
    var submenu = $(this).find(".submenu");
    
    if( submenu.hasClass("d-none") ) {
      submenu.removeClass("d-none");
    }  else {
      submenu.addClass("d-none");
    }
  });
  
  /* Mobile header */
  $(window).on("load resize",function(){
    
    if( $(window).width() < 990 ) {
      
      $("#main-header").addClass("mobile-header");
      
    } else {
      
      $("#main-header").removeClass("mobile-header");
      
    }
    
  });
  
  /* Tootips */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
      html: true
    })
  })