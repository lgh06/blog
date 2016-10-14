jQuery(document).ready(function($) {
  $(document).click(function(e){
    var $t = $(e.target),
        t = e.target;
    if( $t.is('img') && $t.parent().is('p')){
      var a = document.createElement('a');
      a.href = t.src ;
      a.target = '_blank';
      a.click();
    }
  });
});