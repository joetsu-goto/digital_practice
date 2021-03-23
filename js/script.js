// ページのロードが終わったタイミング
window.addEventListener("load", function(){
    const element = document.querySelectorAll('.mask_animation');
    element.forEach((items) => {
     items.querySelector('.mask_inner').classList.add('start');
    });
});
   
   // スクロールで要素がウィンドウ内に入ったタイミング
   window.addEventListener("scroll", function(){
    const element = document.querySelectorAll('.mask_animation');
    const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const threshold = 100;
    element.forEach((items) => {
     const elementOffsetTop = items.getBoundingClientRect().top;
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     const offsetPosition = elementOffsetTop + scrollTop;
     if(scrollCount > offsetPosition - windowHeight + threshold) {
      items.querySelector('.mask_inner').classList.add('start');
     }
    });
    });