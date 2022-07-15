import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>CELEBRATE </p>
          <p>MUSIC WITH</p>
          <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Lobster"></link>
          <h3>DECIBEL</h3>
          <h3></h3>
          <p></p>
        </div>
        <div className="right">
          <p>Get heavy discounts and cashbacks on your purchases</p>
          <h3>UPTO 40% OFF</h3>
          <p></p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner