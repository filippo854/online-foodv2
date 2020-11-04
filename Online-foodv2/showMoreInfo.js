class ShowMoreInfo{
  constructor(){
    this.menu = document.getElementById('menu')
    this.background = document.querySelector('.more-info-black')
  }

 showMoreInfo(id, lang, data){
   const item = data.find((product)=>{
      return product.id == id;
    })
    
    let newDiv = document.createElement("div")
    newDiv.classList.add('more-info')

   if (lang=='pl'){
    newDiv.innerHTML = `<div class="more-info">
      <div class="more-info-img" style="background-image: url(${item.image});"><div class="more-info-exit"><i class="fa fa-times"></i></div></div>
      <div class="more-info-text">
        <h1>${item.name_pl}</h1>
        <h2>${item.description_pl}</h2>
        <p>${item.price} zł</p>
      </div>
    </div>`}
    else if(lang == 'eng'){
      newDiv.innerHTML = `<div class="more-info">
      <div class="more-info-img" style="background-image: url(${item.image});"><div class="more-info-exit"><i class="fa fa-times"></i></div></div>
      <div class="more-info-text">
        <h1>${item.name_eng}</h1>
        <h2>${item.description_eng}</h2>
        <p>${item.price} zł</p>
      </div>
    </div>`
    }

    this.menu.appendChild(newDiv)
    this.background.style.display = 'block'
    document.querySelector('.more-info-exit').addEventListener('click', ()=>{
     this.background.style.display = 'none'
     this.menu.removeChild(newDiv)
    })


 }
}

export {ShowMoreInfo}