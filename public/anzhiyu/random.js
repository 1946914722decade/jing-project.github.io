var posts=["2026/06/15/hexo-blog-setup/","2026/06/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };