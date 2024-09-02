import React from 'react';
import './web.css'; // Import the CSS file
import h1 from '../assets/H1.webp'
import r1 from '../assets/R1.webp'
import f1 from '../assets/F1.jpg'
import e1 from '../assets/E1.jpg'
import ecomm from '../assets/e-comm.avif'
import t1 from '../assets/T1.jpg'
import t2 from '../assets/T2.jpg'
import b1 from '../assets/B1.jpg'
import { useNavigate } from 'react-router-dom';

const Web = () => {
const Navigate = useNavigate()
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

      const banners = [
        {
          image: 'https://imgs.search.brave.com/4dLqLAPFDTAMtuKtoFTTdHXcN51JqkhXzaNHVh7BNc0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/Mi8xNi8xNC8xOS9z/aG9wcGluZy00MDAw/NDE0XzY0MC5qcGc',
          altText: 'Product 1'
        },
        {
          image: 'https://imgs.search.brave.com/WlnzEXCwRBTVCVmuXG5tgtrIA1bX6MVQJrmjTg226Lg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/Ny8yNi8wOS81Ni9l/Y29tbWVyY2UtMzU2/MzE4M182NDAuanBn',
          altText: 'Product 2'
        },
       
      ];
 
    return (
    <div className='tophome'>
      
      <div id="carouselExampleCaptions"    className="carousel slide" data-bs-ride="carousel">
  <div    className="carousel-indicators">
    <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"    className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div    className="carousel-inner">
    <div    className="carousel-item active" >
      <img src="https://primelife.in/cdn/shop/files/banner-steel_1920x700.jpg?v=1613557343"    className="d-block w-100" alt="..."/>
      {/* <div    className="carousel-caption d-none d-md-block " id='textcolor'>
        <h5 >First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div    className="carousel-item">
      <img src="https://primelife.in/cdn/shop/files/b2b-top-banner-new_1920x700.jpg?v=1689306454"    className="d-block w-100" alt="..."/>
      {/* <div    className="carousel-caption d-none d-md-block" id='textcolor'>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div    className="carousel-item">
      <img src="https://primelife.in/cdn/shop/files/banner-steel_1920x700.jpg?v=1613557343"    className="d-block w-100" alt="..."/>
      {/* <div    className="carousel-caption d-none d-md-block" id='textcolor'>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
      </div>
    <div    className="carousel-item">
      <img src="https://primelife.in/cdn/shop/files/banner-1920x700_1920x700.jpg?v=1613557052"    className="d-block w-100" alt="..."/>
      {/* <div    className="carousel-caption d-none d-md-block" id='textcolor'>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
      </div>
    <div    className="carousel-item">
      <img src="https://primelife.in/cdn/shop/files/banner-1920x700_1920x700.jpg?v=1613557052"    className="d-block w-100" alt="..."/>
      {/* <div    className="carousel-caption d-none d-md-block" id='textcolor'>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
      </div>
    
  </div>

</div>



<div className="banners-grid">
      {banners.map((banner, index) => (
         <div className="product-banner">
         <img src={banner.image} alt={banner.altText} className="banners-image" />
         <button onClick={()=>Navigate('/products')} className="shop-now-btn">SHOP NOW</button>
       </div>
      ))}
    </div>




<div className='title'><h1>Best Seller</h1>


<div className="product-grid">

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
    </div>








       
       

        </div>
    );
}

export default Web
