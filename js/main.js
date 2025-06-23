jQuery(document).ready(function ($) {
  //open image in new tab
  $(document).click(function (e) {
    var $t = $(e.target),
      t = e.target;
    if ($t.is('img') && $t.parent().is('p')) {
      var a = document.createElement('a');
      if (String(t.src).endsWith("!1") || String(t.src).includes("/blog1024")) {
        // 缩略图 点击时, 去cf worker 请求原图
        a.href = String(t.src).replace('!1', '').replace("/blog1024", "/blog").replace("https://pub.ahuan.tech", "https://cf2.ahuan.tech");
      } else {
        a.href = t.src;
      }
      a.target = '_blank';
      a.click();
    }
  });

  // add disqus
  var $article = $('article');
  $article.length &&
    (function () {
      $article.after('<div id="disqus_thread"></div>');
      var disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      };
      window.disqus_config = disqus_config;
      (function () {
        var d = document, s = d.createElement('script');
        s.src = '//hapleo.disqus.com/embed.js';
        s.setAttribute('defer', 'defer');
        s.setAttribute('data-timestamp', +new Date());
        d.body.appendChild(s);
      })();
    })();

  $('head').append('<meta name="theme-color" content="#12247a">');

  $('code').length && (function () {
    $('code').each((i, e) => {
      var $e = $(e);
      var html = $e.html();
      if (html.indexOf('\n') >= 0) {
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
    if (String(v.src).startsWith("/blog") || String(v.src).startsWith(window.location.origin + "/blog")) {
      if (vsrc.endsWith("!1")) {
        v.src = "https://pub.ahuan.tech" + vsrc.replace("!1", "").replace(`/${vsrc.split("/")[1]}`, `/${vsrc.split("/")[1] + "1024"}`)
        v.addEventListener("error", errorHandler)
      } else {
        v.src = "https://pub.ahuan.tech" + vsrc
        v.addEventListener("error", errorHandler)
      }
    }
  });

  (function () {

    try {
      let t = localStorage.getItem("acceptedCnPopupTime")
      // 七天内只提示一次
      if( t !== null && ( Date.now() - t < 1000 * 60 * 60 * 24 * 7) ){
        return;
      }
    } catch (error) {
      
    }

    let insideMainland = true;
    // 获取当前时区 操作系统级时区
    let timezone = "";
    try {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error) { }


    if (
      timezone.match(/shanghai|chongqing|chungking|harbin|urumqi|kashgar/i)) {
      insideMainland = true;
    } else {
      insideMainland = false;
    }
    if (insideMainland) {
      // 在body内创建一个id为cnPopup的div
      // div的CSS设置：宽高设置为90vw 90vh，居中；边框2px solid 深蓝色； 背景色设置为白色，透明度80%；border-radius设置为10px。
      // div内含有多行文字，最后有两个button，分别为继续阅读和关闭。
      // 继续阅读button的CSS设置：背景色设置为蓝色；文字颜色设置为白色；border-radius设置为5px。
      // 关闭button的CSS设置：背景色设置为白，透明度80%；文字颜色设置为黑色；border-radius设置为5px。
      // 并为两个button设置点击事件，点击继续阅读，则隐藏此cnPopup的div，点击关闭，则关闭此页面。
      // 将此div添加到body内。      
      const cnPopup = document.createElement('div');
      cnPopup.id = 'cnPopup';
      cnPopup.style.cssText = `
        width: 90vw;
        height: 90vh;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #00008B;
        background-color: rgba(255, 255, 255, 0.95);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        z-index: 1000;
      `;

      cnPopup.innerHTML = `
        <h2>不面向中国大陆提供服务的声明</h2>
        <p>本博客托管于Github上，仅为了记录个人感悟与想法，不面向中国大陆提供服务。</p>
        <p>本博客识别到了您可能处于中国大陆，但受技术限制，无法100%确定您处在中国大陆。因此特询问您是否要继续浏览。 <br>
          如果您继续浏览，则您确认您不处于中国大陆。 <br>
          如果您处于中国大陆，请您关闭此页面，不要继续浏览。         
        </p>
        <p> 您是否要继续浏览此博客？</p>
        <div style="margin-top: 20px;">
          <button id="continueReading" style="
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
          ">继续浏览</button>
          <button id="closePage" style="
            background-color: rgba(80, 212, 36, 0.8);
            color: black;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          ">离开</button>
        </div>
      `;

      document.body.appendChild(cnPopup);

      document.getElementById('continueReading').addEventListener('click', () => {
        cnPopup.style.display = 'none';
        try {
          localStorage.setItem("acceptedCnPopupTime", Date.now()+"");
        } catch (error) {
          
        }
      });

      document.getElementById('closePage').addEventListener('click', () => {
        window.history.back();
        window.close();
        window.location.href = "https://example.com";
      });
    }
  })();
});


// baidu tongji
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?078d7a93e651e6cd9e6382e3edb37fa4";
  hm.defer = true;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
