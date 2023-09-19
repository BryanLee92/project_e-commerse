import React from "react";
import ViewBtn from "./ViewModel";
import WishList from "./wishlist";

export default function Model({
  setIsView,
  isView,
  setIsWishlist,
  isWishlist,
  setWishlist,
  wishlist,
  handleProductBtn,
  handleRemoveFromWishlist,
  productId,
}) {
  return (
    <>
      <ViewBtn
        setIsView={setIsView}
        isView={isView}
        productId={productId}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <WishList
        setIsWishlist={setIsWishlist}
        isWishlist={isWishlist}
        wishlist={wishlist}
        setIsView={setIsView}
        handleProductBtn={handleProductBtn}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </>
  );
}
