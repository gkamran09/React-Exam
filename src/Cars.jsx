import React from "react";

export default function Cars() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW"},
    { id: 3, brand: "Audi"},
  ];

  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            I am a {car.brand}
          </li>
        ))}
      </ul>
    </div>
  );
}