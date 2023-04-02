import React, { useEffect, useState } from "react";
import "./Products.css";
import { Grid, Box, Center } from "@mantine/core";
import DropDown from "./DropDown/DropDown";
import HatCard from "./HatCard/HatCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //we need to do async await since its an api fetch
    async function fetchProducts() {
      const response = await fetch("http://localhost:3001/hats");
      const currentProducts = await response.json();
      setProducts(currentProducts);
    }
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <>
      <Grid
        columns={12}
        gutter={40}
        grow={true}
        style={{ maxWidth: "97vw", marginTop: "3rem", marginLeft: "2rem" }}
      >
        <Grid.Col span={2} style={{ maxWidth: "10rem" }}>
          <DropDown dropDownName={"STYLE"} />
          <Box style={{ marginTop: "0.2rem", maxWidth: "5rem" }}>
            {" "}
            <DropDown dropDownName={"MATERIAL"} />
          </Box>
          <Box style={{ marginTop: "0.2rem", maxWidth: "5rem" }}>
            {" "}
            <DropDown dropDownName={"DECORATION"} />
          </Box>
        </Grid.Col>

        <Grid.Col span={10} style={{ maxWidth: "90vw", marginTop: "1rem" }}>
          {" "}
          <Center>
            <Grid>
              {products.map((product) => {
                return (
                  <HatCard
                    path={product.path}
                    id={product.id}
                    name={product.name}
                  />
                );
              })}
            </Grid>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Products;
