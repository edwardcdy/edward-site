var cb = function(index, nextIndex, direction){
  if (nextIndex==2){
    blog.classList.add('gray');
    resume.classList.add('gray');
    contact.classList.add('gray');
  } else {
    blog.classList.remove('gray');
    resume.classList.remove('gray');
    contact.classList.remove('gray');
  } 
}

$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollingSpeed: 600,
    anchors: ['info','projects','reach'],
    recordHistory: false,
    onLeave: cb,
    allowPageScroll: true,
    loopHorizontal: false,
    controlArrows: false,
  });
});

$(document).on('click', '#down', function(){
  $.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#right', function(){
  $.fn.fullpage.moveSlideRight();
});

$(document).on('click', '#left', function(){
  $.fn.fullpage.moveSlideLeft();
});

$(document).on('click', '#contact', function(){
  $.fn.fullpage.moveTo('reach', 2);
});

$(document).on('click', '#facebook', function(){
  window.location = "https://www.facebook.com/edward.cd.yao";
});

$(document).on('click', '#github', function(){
  window.location = "https://github.com/edwardcdy";
});

$(document).on('click', '#linkedin', function(){
  window.location = "https://www.linkedin.com/in/edward-yao-677b3465/";
});




