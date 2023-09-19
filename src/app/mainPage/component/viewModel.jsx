import React from "react";
import Image from "next/image";

const ViewBtn=({
  productData,
  wishlistBtnIcon,
  cartBtnIcon,
})=>{
  return (
    <>
      <div className="Model-div__flex">
        <div className="Model-div__image">
          <Image
            src={productData.imageUrl}
            sizes="100vw, 100vh"
            width={100}
            height={100}
            alt={productData.name}
            className="Model-image"
          />
        </div>
        <div className="Model-div__details">
          <h2 className="Product-title">{productData.name}</h2>
          <hr />
          <div className="Model-div__description">
            <p className="Product-description">"{productData.description}"</p>
            <div className="Product-icon">
              <h2 className="Product-price">{productData.price}</h2>
              {wishlistBtnIcon(productData)}
              {cartBtnIcon(productData)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewBtn;