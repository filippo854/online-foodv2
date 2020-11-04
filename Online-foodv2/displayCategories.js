class DisplayCategories{

 constructor(){
  this.categories = document.querySelector('.categories')
 }

 displayCategories(lang, data){
   
    const uniqueCategories = [...new Set(
     this.getSingleLanguageCategories(lang, data))]

    const ENGcategories = data.map((product)=>{
      return product.category_eng
    })
    const ENGCategories = [...new Set(ENGcategories)]

    const renderCategories = Twig.twig(
       {
        data: document.getElementById('navCategories').textContent,
        
       })

       const navCategoriesHtml = renderCategories.render({uniqueCategories: uniqueCategories, EngCategory: ENGCategories})

       this.categories.innerHTML = navCategoriesHtml

}
   getSingleLanguageCategories(lang, data)
    {
    let categories;
    if(lang == 'pl'){
    categories = data.map((product)=>{
      return product.category_pl
    })}
    else if(lang == 'eng'){
     categories = data.map((product)=>{
      return product.category_eng
    })
    }
     return categories
   }

}

export{DisplayCategories}