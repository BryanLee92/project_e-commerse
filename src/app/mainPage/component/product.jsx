import React from "react";
const Product=({
  toggleViewBtn,
  wishlistBtnIcon,
  cartBtnIcon,
  item,
})=>{
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
          <div className="product-item__flexButton">
            {wishlistBtnIcon(item)}
            {cartBtnIcon(item)}
          </div>
        </div>
        <br />
        <div className="product-item__flexPrice">
          <h5>RM {item.price.toFixed(2)}</h5>
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
export default Product;