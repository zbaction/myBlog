var posts=["2025/08/11/hello-world/","2025/08/11/这是第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };