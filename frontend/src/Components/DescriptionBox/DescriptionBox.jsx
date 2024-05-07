import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An E-commerce website is an online platform that facilitates that buying
                and selling of products or services over the inyernet it serves as a virtual
                marketplace where businesses and individuals can showcase that products interact with customers and
                conduct transactions without the need for a physical presence.E-commerce websites have gained immense
                popularity due to their convinience , accessability and the global reach they offer.
                E-commerce websites typically display products or services along with detailed
                descriptions , images ,prices and any available variation.
                Each product has his own dedicated pages with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox