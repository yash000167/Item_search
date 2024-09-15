import React from 'react';
const Item = React.memo(({ item }) => {
  return (
    <li>
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating} stars</p>
    </li>
  );
});

export default Item;
