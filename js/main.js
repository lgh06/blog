jQuery(document).ready(function($) {
  //open image in new tab
  $(document).click(function(e){
    var $t = $(e.target),
        t = e.target;
    if( $t.is('img') && $t.parent().is('p')){
      var a = document.createElement('a');
      if(String(t.src).endsWith("!1") || String(t.src).includes("/blog1024")){
        // 缩略图 点击时, 去cf worker 请求原图
        a.href = String(t.src).replace('!1','').replace("/blog1024","/blog").replace("https://pub.ahuan.tech","https://cf2.ahuan.tech");
      }else{
        a.href = t.src ;
      }
      a.target = '_blank';
      a.click();
    }
  });

  // add disqus
  var $article = $('article');
  $article.length &&
  (function(){
    $article.after('<div id="disqus_thread"></div>');
    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };
    window.disqus_config = disqus_config;
    (function() {
      var d = document, s = d.createElement('script');
      s.src = '//hapleo.disqus.com/embed.js';
      s.setAttribute('defer','defer');
      s.setAttribute('data-timestamp', +new Date());
      d.body.appendChild(s);
    })();
  })();

  $('head').append('<meta name="theme-color" content="#12247a">');

  $('code').length && (function(){
    $('code').each((i,e)=>{
      var $e = $(e);
      var html = $e.html();
      if(html.indexOf('\n')>=0){
        $e.replaceWith(html);
      }
    })
  })();


  Array.from(document.querySelectorAll("img")).forEach(v => {
    console.log(v.src)
    v.loading = "lazy";
    let vsrc = v.src.replace(window.location.origin, "");
    function errorHandler() {
      v.src = "https://cf2.ahuan.tech" + vsrc;
      v.removeEventListener("error", errorHandler);
    }
    if (String(v.src).startsWith("/blog") || String(v.src).startsWith(window.location.origin+"/blog")) {
      if (vsrc.endsWith("!1")) {
        v.src = "https://pub.ahuan.tech" + vsrc.replace("!1", "").replace(`/${vsrc.split("/")[1]}`, `/${vsrc.split("/")[1] + "1024"}`)
        v.addEventListener("error", errorHandler)
      } else {
        v.src = "https://pub.ahuan.tech" + vsrc
        v.addEventListener("error", errorHandler)
      }
    }
  });
});


// baidu tongji
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?078d7a93e651e6cd9e6382e3edb37fa4";
  hm.defer = true;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
