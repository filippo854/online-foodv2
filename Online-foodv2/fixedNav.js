class FixedNav{
  setFixedNav(){
  window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const headerHeight = document.querySelector('header').getBoundingClientRect().height
  const infoHeight = document.querySelector('.info').getBoundingClientRect().height
  const langHeight = document.querySelector('.languages').getBoundingClientRect().height 
  if (scrollHeight > (headerHeight+infoHeight+langHeight)) {
    document.querySelector('.categories').classList.add('sticky')
  } 
  else {
    document.querySelector('.categories').classList.remove('sticky')
  }
  
})
 }
}

export {FixedNav}