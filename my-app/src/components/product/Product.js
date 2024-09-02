import React from 'react'
import h1 from '../assets/H1.webp'
import r1 from '../assets/R1.webp'
import f1 from '../assets/F1.jpg'
import e1 from '../assets/E1.jpg'
import ecomm from '../assets/e-comm.avif'
import t1 from '../assets/T1.jpg'
import t2 from '../assets/T2.jpg'
import b1 from '../assets/B1.jpg'
import './product.css'

function Product() {
    const products = [
        {
          image: h1,
          title: 'Primelife 18 Inches Foldable Stool, Folding Step..',
          oldPrice: 699,
          newPrice: 249,
          discount: -64
        },
        {
          image: r1,
          title: 'Primelife Stainless Steel Foldable Cloth Drying...',
          oldPrice: 5999,
          newPrice: 1199,
          discount: -80
        },
        {
          image: f1,
          title: 'Primelife Gas Cylinder Trolley With Wheels For...',
          oldPrice: 699,
          newPrice: 219,
          discount: -68
        },
        {
          image: e1,
          title: 'Primelife Stainless Steel Kitchen Press With 15...',
          oldPrice: 449,
          newPrice: 219,
          discount: -68
        },
        {
          image: ecomm,
          title: 'Primelife Stainless Steel Kitchen Press With 15...',
          oldPrice: 799,
          newPrice: 219,
          discount: -68
        },
        {
          image: t1,
          title: 'Primelife Stainless Steel Kitchen Press With 15...',
          oldPrice: 199,
          newPrice: 219,
          discount: -68
        },
        {
          image: t2,
          title: 'Primelife Stainless Steel Kitchen Press With 15...',
          oldPrice: 299,
          newPrice: 219,
          discount: -68
        },
        {
          image: b1,
          title: 'Primelife Stainless Steel Kitchen Press With 15...',
          oldPrice: 599,
          newPrice: 219,
          discount: -68
        },
      ];

  return (
    

<div className="product-grid1">

{products.map((product, index) => (
 <div className="product-card">
 <div className="discount-tag">{product.discount}%</div>
 <img src={product.image} alt={product.title} className="product-image" />
 <h3 className="product-title">{product.title}</h3>
 <div className="product-prices">
   <span className="new-price">Rs. {product.newPrice}</span>
   <span className="old-price">Rs. {product.oldPrice}</span>
 </div>
</div>

))}
</div>
  )
}

export default Product