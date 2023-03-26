import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/home.css";

import Records from "./records.json";

const Home = () => {
  const [productList, setProduct] = useState([]);

  async function getProductData() {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    )
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="mainhomediv">
      <div className="home">
        {Records.map((i, index) => (
          <ProductCard
            index={i.id}
            imgSrc={i.image}
            name={i.title}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ index, imgSrc, name, price, id, handler }) => (
  <div className="productCard" key={index}>
    <img className="homepageitemimages" src={imgSrc} />
    <p>{name}</p>
    <h4>${price}</h4>
    <Button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </Button>
  </div>
);

export default Home;
