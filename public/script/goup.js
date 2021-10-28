//* =====Goup=====
window.onscroll = function(){
  if(document.documentElement.scrollTop > 40){
      document.querySelector('.goup')
      .classList.add('show');
  }else{
      document.querySelector('.goup')
      .classList.remove('show');
  }
}

document.querySelector('.goup').addEventListener('click', () =>{
  window.scrollTo({
      top:0,
      behavior:"smooth"
  });
});