import React, { useState } from "react";

import CoursesList from "../CoursesList";
import ProductCard from "../ProductCard";

export default function HomeScreen() {
  const [product, setProduct] = useState(CoursesList);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: 20,
        padding: 25,
        marginTop: 20,
      }}
    >
      {product.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
