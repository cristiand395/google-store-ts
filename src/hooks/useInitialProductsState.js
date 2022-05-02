import { useState, useEffect } from "react"

const useInitialProductsState = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("./data/Products.json")
      const data = await response.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  return products
}

export default useInitialProductsState