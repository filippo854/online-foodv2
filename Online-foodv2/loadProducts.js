class LoadProducts{
 
 async loadProducts() {
    try {
      const result = await fetch('./products.json')
      const data = await result.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export {LoadProducts}