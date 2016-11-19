function scroll_nav_header(e) {
  var curScrollTop = $(this).scrollTop();
  if (curScrollTop > lastScrollTop) {
    $('header').slideUp(300);
  } else {
    $('header').slideDown(300);
  }
  lastScrollTop = curScrollTop; 
}


function check_if_in_window(element) {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  var element_height = element.outerHeight();
  var element_top_position = element.offset().top;
  var element_bottom_position = (element_top_position + element_height);
    
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
    return true
  } else {
    return false
  }
}


function max_file_size_check() {
  var size_in_megabytes = this.files[0].size/1024/1024;
  if (size_in_megabytes > 5) {
    alert('Maximum file size is 5MB. Please choose a smaller file.');
    document.getElementById("micropost_picture").value = "";
  }
}





$(document).ready(function() {

  lastScrollTop = 0;
  $(window).scroll(function(e){
    scroll_nav_header(e);
  });

  $('#micropost_picture').bind('change', max_file_size_check);

})





$(document).on('turbolinks:load ready', function() {

  $(".micropost").each(function(index, element) {
    if (check_if_in_window($(element))) {
      $(element).addClass("in_place"); 
    } 
  });

  $(window).scroll(function(event) {
    $(".micropost").each(function(index, element) {
      if (check_if_in_window($(element))) {
        $(element).addClass("slide_left"); 
      } 
    });
  });

})