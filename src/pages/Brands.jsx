import React from "react";

function Brands({ name }) {
  return (
    <>
      <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
      <label htmlFor="Categories-1">{name}</label>
    </>
  );
}

export default Brands;
