import React from "react";
import ViewBtn from "./viewModel";
import WishList from "./wishlist";
import Modal from "react-modal";

export default function Model({
  setViewModel,
  viewModel,
  productData,
  wishlistBtnIcon,
  setIsWishlistModal,
  isWishlistModal,
  wishlist,
  handleRemoveFromWishlist,
}) {
  return (
    <>
      {/* Preview button */}
      {productData ? (
        <Modal
          isOpen={viewModel}
          ariaHideApp={false}
          onRequestClose={() => setViewModel(false)}
        >
          <div className="model-close">
            <button onClick={() => setViewModel(false)}>&times;</button>
          </div>
          <ViewBtn
            productData={productData}
            wishlistBtnIcon={wishlistBtnIcon}
          />
        </Modal>
      ) : null}

      {/* wishlist */}
      <Modal
        isOpen={isWishlistModal}
        ariaHideApp={false}
        onRequestClose={() => setIsWishlistModal(false)}
      >
        <div className="model-close">
          <button onClick={() => setIsWishlistModal(false)}>&times;</button>
        </div>
        <div>
          {wishlist.length > 0 ? (
            <>
             <h2>Wishlist</h2>
            <hr />
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name:</th>
                  <th>Description:</th>
                  <th>Price:</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id}>
                    <WishList
                      item={item}
                      handleRemoveFromWishlist={handleRemoveFromWishlist}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            </>
          ) : (
            <div className="wishlist-table">
              <h2>Wishlist</h2>
              <hr />
              <p colSpan="5">No items in your wishlist</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
