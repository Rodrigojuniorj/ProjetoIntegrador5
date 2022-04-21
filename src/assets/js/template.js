$( document ).ready(function() {


  conta = '';
  add = 0;
  $('.header_toggle').on('click', function(e){
    conta = e;
    if(e == conta){
      add = add + 1
    }
    if(add % 2 == 1){
      $('#nav-bar').css('width','180px');
      $('.header_toggle').animate({'margin-left':"100px"}, 420);
    }else{
      $('#nav-bar').css('width','65px');
      $('.header_toggle').animate({'margin-left':"0"}, 420);
    }

  });

});
