import {LoadProducts} from './loadProducts.js'
import {DisplayCategories} from './displayCategories.js'
import {DisplayDishes} from './displayDishes.js'
import {FixedNav} from './fixedNav.js'
import {ShowMoreInfo} from './showMoreInfo.js'



document.addEventListener("DOMContentLoaded", ()=>{

  let activeLanguage = 'pl'
  const loadProducts = new LoadProducts()
  const displayCategories = new DisplayCategories()
  const displayDishes = new DisplayDishes()
  const fixedNav = new FixedNav()
  const showMoreInfo = new ShowMoreInfo()

  loadProducts.loadProducts().then((data)=>{
    displayCategories.displayCategories('pl', data)
    displayDishes.displayDishes('pl', data)
    
    document.querySelectorAll('.single-language').forEach((language)=>{
    language.addEventListener('click', (e)=>{
    if(e.target.classList.contains('english-language')){
    displayCategories.displayCategories('eng', data)
    displayDishes.displayDishes('eng', data)
    activeLanguage = 'eng'
    }
    else{
    displayCategories.displayCategories('pl', data)
    displayDishes.displayDishes('pl', data)
    activeLanguage = 'pl'
  }
 })
})
  document.getElementById('menu').addEventListener('click', (e)=>{
    if(e.target.parentElement.classList.contains('menu-single-item')){
      showMoreInfo.showMoreInfo(e.target.parentElement.id, activeLanguage, data)
      
    }
    else if(e.target.parentElement.parentElement.classList.contains('menu-single-item')){
      showMoreInfo.showMoreInfo(e.target.parentElement.parentElement.id, activeLanguage, data)
    }
    
  })
    
  })
  fixedNav.setFixedNav()
  
 
})

