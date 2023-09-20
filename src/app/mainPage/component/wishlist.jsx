import React from "react";
import Image from "next/image";

const wishlist=({
  item,
  index,
  handleRemoveFromWishlist,
  toggleViewBtn,
  cartBtnIcon,
})=>{
  return (
    <>
      <td>{index + 1}</td>
      <td style={{ cursor: "pointer" }} onClick={() => toggleViewBtn(item)}>
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={200}
          height={150}
          quality={100}
          className="wishlist-table__image"
        />
      </td>
      <td>
        <strong>{item.name}</strong>
      </td>
      <td>"{item.description}"</td>
      <td>RM {item.price}</td>
      <td>
        <div className="wishlist-table__flexCart">
          {cartBtnIcon(item)}
          <button
            className="RemoveFromWishlist"
            onClick={() => handleRemoveFromWishlist(item.id)}
          >
            &times;
          </button>
        </div>
      </td>
    </>
  );
}
export default wishlist;