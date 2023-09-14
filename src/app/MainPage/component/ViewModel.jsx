import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function ViewBtn({ setIsView, isView, wishlist, setWishlist, productId }) {
  return (
    <Modal
      isOpen={isView}
      ariaHideApp={false}
      onRequestClose={() => setIsView(false)}
    >
      {productId ? (
        <div className="model-close">
          <button onClick={() => setIsView(false)}>&times;</button>
        </div>
      ) : null}
      {productId && (
        <div className="Model-div__flex">
          <div className="Model-div__image">
            <Image
              src={productId.imageUrl}
              sizes="100vw, 100vh"
              width={100}
              height={100}
              alt={productId.name}
              className="Model-image"
            />
          </div>
          <div className="Model-div__details">
            <h2 className="Product-title">{productId.name}</h2>
            <hr />
            <div className="Model-div__description">
              <p className="Product-description">"{productId.description}"</p>
              <div className="Product-icon">
                <h2 className="Product-price">{productId.price}</h2>
                {!wishlist.includes(productId) ?
                <button className="icon-btn" onClick={() => {
                  if (!wishlist.includes(productId)) {
                    setWishlist([...wishlist, productId]);
                    alert("Product added successfully");
                  } else {
                    alert("Product is in wishlist");
                  }
                }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="2xl"
                    style={{ color: "#545f71" }}
                  />
                </button>
                : 
                <button className="icon-btn" onClick={() => {
                  if (!wishlist.includes(productId)) {
                    setWishlist([...wishlist, productId]);
                    alert("Product added successfully");
                  } else {
                    alert("Product is in wishlist");
                  }
                }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="2xl"
                    style={{ color: "red" }}
                  />
                </button>
                }
                <button className="icon-btn">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="2xl"
                    style={{ color: "#545f71" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
