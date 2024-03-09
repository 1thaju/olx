import React, { useContext, useEffect } from 'react';
import { ProductDetails } from '../ProductDetails';
import './View.css';
function View() {
  const {object} = useContext(ProductDetails)
  useEffect(()=>{
    console.log(object)
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={object.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {object.price?.price?.toString()} </p>
          <span>{object.name?.name?.toString()}</span>
          <p>{object.category?.category?.toString()}</p>
          <span>{object.createdat}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>Abc</p>
          <p>+91 xxxxx xxxxx</p>
        </div>
      </div>
    </div>
  );
}
export default View;
