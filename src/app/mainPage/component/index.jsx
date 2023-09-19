import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// main Content only
import Navigate from "./navigation";
import PreviewScreen from "./previewScreen";
import Sidebar from "./sidebar";
import Product from "./product";
import Model from "./model";
import Error from "./error";

export default function Index({
  isNavigateVisible,
  imageData,
  searchText,
  setIsWishlistModal,
  isWishlistModal,
  ...pageProps
}) {
  //sidebar content
  const [isActive, setActive] = useState("Casual Shirts");
  const [tag, setTag] = useState("casual shirts");

  //filttering main product content
  const [filteredProducts, setFilteredProducts] = useState([]);

  //model
  const [viewModel, setViewModel] = useState(false);
  const [productData, setProductData] = useState();

  const [wishlist, setWishlist] = useState([]);

  // keen slider plugins
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  //tags for product and sidebar content
  const handleItemClick = (tags) => {
    setTag(tags.toLowerCase());
    setActive(tags);
  };

  // toggle view model popup
  const toggleViewBtn = (data) => {
    setProductData(data);
    setViewModel(!viewModel);
  };

  // wishlist icon button
  const wishlistBtnIcon = (data) => {
    const isInWishlist = wishlist.some((wishes) => wishes.id === data.id);
    return (
      <button
        className="icon-btn"
        onClick={() => {
          if (isInWishlist) {
            alert("Product is in the wishlist");
          } else {
            setWishlist([...wishlist, data]);
            alert("Product added successfully");
          }
        }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          size="2xl"
          style={{ color: isInWishlist ? "red" : "#545f7f" }}
        />
      </button>
    );
  };

  // remove item from wishlist
  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  //filter product from searchtext and tag
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

  //filter products by isActive attribute or searchtext attribute
  useEffect(() => {
    filterProducts();
  }, [isActive, searchText]);

  //update slider values with tags
  useEffect(() => {
    slider?.current?.update();
  }, [handleItemClick]);

  return (
    <>
      {/* mobile navigation */}
      {isNavigateVisible && <Navigate />}

      {/* PreviewScreen */}
      {searchText ? null : filteredProducts.length > 0 ? (
        <div ref={sliderRef} className="keen-slider">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <PreviewScreen
                {...pageProps}
                image={item}
                toggleViewBtn={toggleViewBtn}
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="main-content__container">
        {/* sidebar */}
        <Sidebar {...pageProps} tag={handleItemClick} isActive={isActive} />

        {/* Product page */}
        <div className=" product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="product-item">
                <Product
                  {...pageProps}
                  toggleViewBtn={toggleViewBtn}
                  item={item}
                  wishlistBtnIcon={wishlistBtnIcon}
                />
              </div>
            ))
          ) : (
            <div className="center-error">
              <Error />
            </div>
          )}
        </div>
      </div>
      <Model
        {...pageProps}
        setViewModel={setViewModel}
        viewModel={viewModel}
        productData={productData}
        wishlistBtnIcon={wishlistBtnIcon}
        setIsWishlistModal={setIsWishlistModal}
        isWishlistModal={isWishlistModal}
        wishlist={wishlist}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </>
  );
}
