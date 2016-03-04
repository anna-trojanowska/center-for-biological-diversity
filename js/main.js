// ----- Push Nav 

$(function () {
    $('body').removeClass('noscript');
    
    $('.toggle-btn, .close-btn').click(function(){
        toggleNav();
    });
    $('.nav-link a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-sidebar-id');
        $('#' + id).click();
        $('.site-wrapper').attr('data-state','slide-open');
    });
});

function toggleNav() {
    if($('.site-wrapper').attr('data-state') == 'slide-closed'){
        // Show Nav when closed 
        $('.site-wrapper').attr('data-state','slide-open');
    }else{
        // Hide Nav when open 
        $('.site-wrapper').attr('data-state','slide-closed');
    }
}

// ------- Nav


$(document).ready(function() {

  $('.sidebar-menu').mouseenter(function() {
    $(this).children('.expand').addClass('turn');
  });

  $('.sidebar-menu').mouseleave(function() {
    if ($(this).hasClass('open')) {} else {
      $(this).children('.expand').removeClass('turn');
    }
  });

  $('.sub-menu').stop(true).slideUp("fast");
    
  $('.sidebar-menu').click(function() {
    var $this = $(this);
    if ($this.hasClass('open')) {
      $('.sidebar-menu').removeClass('open');
      $('.sub-menu').stop(true).slideUp("fast");
      $('.expand').removeClass('turn');
      $this.removeClass('open');
      $this.children('.expand').removeClass('turn');
      $this.next().stop(true).slideUp("fast");
    } else {
      $('.sidebar-menu').removeClass('open');
      $('.sub-menu').stop(true).slideUp("fast");
      $('.expand').removeClass('turn');

      $this.addClass('open');
      $this.children('.expand').addClass('turn');
      $this.next().stop(true).slideDown("fast");
    }
  });

});