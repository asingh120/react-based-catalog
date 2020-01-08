import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayCard from "./DisplayCard";
import { fetchCatalogItems } from "./mocks/catalog";

// const catalogData = require('./mocks/catalog.json');

export interface Product {
  id: number;
  description: string;
  retailPrice: number;
  manufacturerName: string;
  thumbnail: string;
  image: string;
  distributor: string;
  height: number;
  width: number;
  depth: number;
  weight: number;
}

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("In useEffect");
    setLoading(true);
    fetchCatalogItems().then(data => {
      setProducts(data.body);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("Loading state is", loading);
  }, [loading]);

  const onClick = (e: React.MouseEvent) => {
    console.log("in onClick");
    setLoading(true);
    fetchCatalogItems().then(data => {
      setProducts(data.body);
      setLoading(false);
    });
  };

  return (
    <>
      <button onClick={onClick}>Click Me to Load Stuff</button>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "10px"
        }}
      >
        {loading ? (
          <div className="loadingIcon" />
        ) : products.length > 0 ? (
          products.map(product => (
            <DisplayCard product={product} key={product.id} />
          ))
        ) : (
          <h3>Found no products</h3>
        )}
      </div>
    </>
  );
};
export default Cards;
