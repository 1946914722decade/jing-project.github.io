var posts=["2026/06/15/hello-world/","2026/06/15/hexo-blog-setup/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };