import React, { useEffect, useState } from "react";
import "./Products.css";
import { Grid, Box, Center, Button } from "@mantine/core";
import DropDown from "./DropDown/DropDown";
import HatCard from "./HatCard/HatCard";

export const ProductsContext = React.createContext();
export const SetProductsContext = React.createContext();
//Recall that with context API we can now avoid prop drilling!

const Products = () => {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

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
      <ProductsContext.Provider value={products}>
        <SetProductsContext.Provider value={setSelectedCategory}>
          <Grid
            columns={12}
            gutter={40}
            grow={true}
            style={{ maxWidth: "97vw", marginTop: "3rem", marginLeft: "2rem" }}
          >
            <Grid.Col span={2} style={{ maxWidth: "10rem" }}>
              <Box onClick={() => setClick(!click)}>
                <DropDown dropDownName={"STYLE"} />
              </Box>
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
                  {products
                    .filter((product) => {
                      console.log(product);
                      if (!selectedCategory) {
                        return true;
                      } else {
                        return product.style.includes(selectedCategory);
                      }
                    })
                    .map((product) => {
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
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default Products;
