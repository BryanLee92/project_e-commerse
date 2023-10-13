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
        <h5>{item.name}</h5>
        <h5>RM {item.price.toFixed(2)}</h5>
        <div className="product-item__flexPrice">
          <button
            className="product-item__button"
            onClick={() => {
              toggleViewBtn(item);
            }}
          >
            View More
          </button>
          <div className="product-item__flexButton">
            {wishlistBtnIcon(item)}
            {cartBtnIcon(item)}
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;