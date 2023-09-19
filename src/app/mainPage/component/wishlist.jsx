import React from "react";
import Image from "next/image";

export default function wishlist({
  item,
  handleRemoveFromWishlist,
}) {
  return (
    <>
      <td>
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
        <button onClick={() => handleRemoveFromWishlist(item.id)}>
          &times;
        </button>
      </td>
    </>
  );
}
