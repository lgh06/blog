jQuery(document).ready(function($) {
  //open image in new tab
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

  // add disqus
  var $article = $('article');
  $article.length &&
  (function(){
    var d = document;

    function loadComment(){
      loaddq((s)=>{
        s && $(s).off('error').remove();
        localStorage.setItem('useduoshuo','1'); //use duoshuo
        loadds();
      });
    }
    //load duoshuo js
    function loadds(){
      $article.length && $article.find('#disqus_thread').remove();
      var duoshuoQuery = {short_name:"hapleo"};
      window.duoshuoQuery = duoshuoQuery;
      $article.after(`<div class="ds-thread" data-thread-key="${window.location.pathname}" data-title="${document.title}" data-url="${window.location.href}"></div>`);
      var s = d.createElement('script');
      s.src = '//static.duoshuo.com/embed.js';
      s.setAttribute('async','async');
      (d.head || d.body).appendChild(s);
    }
    //load disqus js
    function loaddq(error_callback){
      var ds = localStorage.getItem('useduoshuo');
      if(ds && error_callback){
        error_callback();
        return;
      }
      $article.length && $article.after('<div id="disqus_thread"></div>');

      var disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      };
      window.disqus_config = disqus_config;

      var s = d.createElement('script');
      s.src = '//hapleo.disqus.com/embed.js';
      s.setAttribute('async','async');
      s.setAttribute('data-timestamp', +new Date());

      var t =
      setTimeout(()=>{
        console.log('enter timeout 5000');
        error_callback(s);
      },5000);

      $(s).on('load',()=>( clearTimeout(t) ) );
      $(s).on('error',()=>{
        error_callback(s);
      });

      (d.head || d.body).appendChild(s);

    }
    loadComment();
  })();

  $('head').append('<meta name="theme-color" content="#12247a">');

  $('code').length && (function(){
    $('code').each((i,e)=>{
      var $e = $(e);
      var html = $e.html();
      if(html.indexOf('\n')>=0){
        $e.replaceWith('<pre>'+html+'</pre>');
      }
    })
  })();
});
