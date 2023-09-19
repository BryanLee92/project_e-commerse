import React, { useState, useEffect } from "react";
// main Content only
import Navigate from "./navigation";
import PreviewScreen from "./PreviewScreen";
import Sidebar from "./sidebar";
import Product from "./product";
import Model from "./Model";

export default function Index({
  isNavigateVisible,
  imageData,
  searchText,
  setIsWishlist,
  isWishlist,
  ...pageProps
}) {
  //sidebar content
  const [isActive, setActive] = useState("Casual Shirts");
  const [tag, setTag] = useState("casual shirts");

  //filttering main product content
  const [filteredProducts, setFilteredProducts] = useState([]);

  //model
  const [isView, setIsView] = useState(false);
  const [productId, setProductId] = useState();

  const [wishlist, setWishlist] = useState([]);
  
  const handleItemClick = (tags) => {
    setTag(tags.toLowerCase());
    setActive(tags);
  };

  const handleProductBtn = (id) => {
    setProductId(imageData[id - 1]);
  };

  const handleRemoveFromWishlist =(id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  const filterProducts = () => {
    const filtered = searchText
      ? imageData.filter((item) => {
          const itemName = item.name.toLowerCase();
          const itemPrice = item.price.toLowerCase();
          const itemTag = item.tag.toLowerCase();
          return (
            itemName.includes(searchText) ||
            itemPrice.includes(searchText) ||
            itemTag.includes(searchText)
          );
        })
      : imageData.filter((item) => {
          const itemTag = item.tag.toLowerCase();
          return itemTag.includes(tag);
        });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [isActive, searchText]);

  return (
    <>
      {isNavigateVisible && <Navigate />}
      {searchText ? null : (
        <PreviewScreen
          {...pageProps}
          images={imageData}
          setIsView={setIsView}
          handleProductBtn={handleProductBtn}
        />
      )}
      <div className="main-content__container">
        <Sidebar {...pageProps} tag={handleItemClick} isActive={isActive} />
        <Product
          {...pageProps}
          filterProducts={filteredProducts}
          setIsView={setIsView}
          handleProductBtn={handleProductBtn}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      </div>
      <Model
        {...pageProps}
        setIsView={setIsView}
        isView={isView}
        productId={productId}
        isWishlist={isWishlist}
        setIsWishlist={setIsWishlist}
        wishlist={wishlist}
        handleProductBtn={handleProductBtn}
        setWishlist={setWishlist}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </>
  );
}
