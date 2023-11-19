import React, { useEffect, useState } from 'react'

const ProductList = ({category}: {category: string}) => {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log("Fetching Product in ", category)
        setProducts(['Clothing', 'Househoold'])
    }, [category])


  return (
    <div>
      ProductList
    </div>
  )
}

export default ProductList
