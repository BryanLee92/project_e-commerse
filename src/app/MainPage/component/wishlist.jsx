import React from "react";
import Image from "next/image";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function wishlist({
  setIsWishlist,
  isWishlist,
  wishlist,
  setIsView,
  handleProductBtn,
  handleRemoveFromWishlist
}) {
  return (
    <Modal
      isOpen={isWishlist}
      ariaHideApp={false}
      onRequestClose={() => setIsWishlist(false)}
    >
      <div className="model-close">
        <button onClick={() => setIsWishlist(false)}>&times;</button>
      </div>
      <div>
        {wishlist.length > 0 ? (
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
                  <td
                    onClick={() => {
                      setIsView(true);
                      handleProductBtn(item.id);
                      setIsWishlist(false);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={150}
                      height={150}
                      quality={100}
                      className="wishlist-table__image"
                    />
                  </td>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>"{item.description}"</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="icon-btn">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="2xl"
                        style={{ color: "#545f71" }}
                      />
                    </button>
                    <button onClick={() => handleRemoveFromWishlist(item.id)}>&times;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>Wishlist</h3>
            <hr />
            <p colSpan="5">No items in your wishlist</p>
          </div>
        )}
      </div>
    </Modal>
  );
}
