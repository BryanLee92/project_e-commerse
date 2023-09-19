import React from "react";
export default function Product({ toggleViewBtn, wishlistBtnIcon, item }) {
  return (
    <>
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{ width: "100%", height: "100%" }}
      />
      <div className="product-item__status">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>{item.name}</h4>
          <div>
            {wishlistBtnIcon(item)}
          </div>
        </div>
        <br />
        <div className="product-item__flexPrice">
          <h5>{item.price}</h5>
          <button
            className="product-item__button"
            onClick={() => {
              toggleViewBtn(item);
            }}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
}
