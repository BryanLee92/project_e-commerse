import React from "react";
import Error from "./Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Product({
  filterProducts,
  setIsView,
  handleProductBtn,
  wishlist,
  setWishlist,
}) {
  const isResultSearch = filterProducts.length > 0;
  if (isResultSearch) {
    return (
      <div className="product-container">
        {filterProducts.map((item) => (
          <div key={item.id} className="product-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="product-item__status">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{item.name}</h4>
                <div>
                  {/* chnage the comparison to item.id to item.id */}
                  <div>
                    {!wishlist.includes(item) ? (
                      <button
                        className="icon-btn"
                        onClick={() => {
                          if (!wishlist.includes(item)) {
                            setWishlist([...wishlist, item]);
                            alert("Product added successfully");
                          } else {
                            alert("Product is in wishlist");
                          }
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2xl"
                          style={{ color: "#545f71" }}
                        />
                      </button>
                    ) : (
                      <button
                        className="icon-btn"
                        onClick={() => {
                          if (!wishlist.includes(item)) {
                            setWishlist([...wishlist, item]);
                            alert("Product added successfully");
                          } else {
                            alert("Product is in wishlist");
                          }
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2xl"
                          style={{ color: "red" }}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <br />
              <div className="product-item__flexPrice">
                <h5>{item.price}</h5>
                <button
                  className="product-item__button"
                  onClick={() => {
                    setIsView(true);
                    handleProductBtn(item.id);
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <Error />;
  }
}
