
import React from 'react';
import Link from "next/link";
const cards = [
  { id: 1, title: 'product1', price: 3.5  },
  { id: 2, title: 'product2', price: 4.0 },
  { id: 3, title: 'product3', price: 5.5 },
  { id: 4, title: 'product4', price: 7.5 }
];

export default function Page() {
  return (
    <div>
      {cards.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.price}</p>
          <Link href={`/products/${e.id}`}><button>View Detials</button></Link>
        </div>
      ))}
    </div>
  );
}
