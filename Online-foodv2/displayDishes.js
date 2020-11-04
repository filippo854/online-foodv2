class DisplayDishes{
  constructor(){
    this.burgers = document.getElementById('burgers')
    this.salad =  document.getElementById('salad')
    this.pasta = document.getElementById('pasta')
    this.addons = document.getElementById('addons')
    this.drinks = document.getElementById('drinks')
    this.menuCategories = document.querySelectorAll('.menu-single-category')
  }

 displayDishes(lang, data){
  if(lang == 'eng'){
  const renderDishes = Twig.twig(
         {
        data: document.getElementById('dishesENG').textContent,
        })

        this.menuCategories.forEach((menu)=>{
        menu.children[1].innerHTML =  renderDishes.render({data:data.filter((product)=>{
        return product.category_eng == menu.id
   }) })
   })
      this.burgers.firstElementChild.innerHTML = 'Burgers'
      this.salad.firstElementChild.innerHTML = 'salad'
      this.pasta.firstElementChild.innerHTML = 'pasta'
      this.addons.firstElementChild.innerHTML = 'addons'
      this.drinks.firstElementChild.innerHTML = 'drinks'
 }
 else if(lang == 'pl'){
  const renderDishes = Twig.twig(
    {
    data: document.getElementById('dishesPL').textContent,
   })
   
   this.menuCategories.forEach((menu)=>{
   
     menu.children[1].innerHTML =  renderDishes.render({data:data.filter((product)=>{
     return product.category_eng == menu.id
   }) })
   })
      this.burgers.firstElementChild.innerHTML = 'Burgery'
      this.salad.firstElementChild.innerHTML = 'Sałatki'
      this.pasta.firstElementChild.innerHTML = 'Makaron'
      this.addons.firstElementChild.innerHTML = 'Dodatki'
      this.drinks.firstElementChild.innerHTML = 'Napoje'
 }
 

 }
}

export {DisplayDishes}