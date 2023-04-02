import React, { useEffect, useState } from "react";
import "./Products.css";
import { Grid, Box } from "@mantine/core";
import DropDown from "./DropDown/DropDown";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //we need to do async await since its an api fetch
    async function fetchProducts() {
      const response = await fetch("http://localhost:3001/products");
      const currentProducts = await response.json();
      setProducts(currentProducts);
    }
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <>
      <Grid style={{ maxWidth: "90vw", marginTop: "6rem", marginLeft: "4rem" }}>
        <Grid.Col span={1}>
          <DropDown dropDownName={"STYLE"} />
          <Box style={{ marginTop: "0.2rem" }}>
            {" "}
            <DropDown dropDownName={"MATERIAL"} />
          </Box>
          <Box style={{ marginTop: "0.2rem" }}>
            {" "}
            <DropDown dropDownName={"DECORATION"} />
          </Box>
        </Grid.Col>
        <Grid.Col span={11}>
          {" "}
          {products.map((product) => {
            return <h1>{product.email}</h1>;
          })}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Products;
