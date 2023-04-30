import React, { useEffect, useState } from "react";
import "./Products.css";
import { Grid, Box, Flex, Header, Center, Text } from "@mantine/core";
import DropDown from "./DropDown/DropDownHats/DropDownHatsBase";
import DropDownDecorationBase from "./DropDown/DropDownDecorations/DropDownDecorationBase";
import HatCard from "./HatCard/HatCard";

export const ProductsContext = React.createContext();
export const SetProductsContext = React.createContext();
export const SetDecorationContext = React.createContext();

//Recall that with context API we can now avoid prop drilling!

const Products = () => {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedDecoration, setSelectedDecoration] = useState("");

  useEffect(() => {
    //we need to do async await since its an api fetch
    //One thing to note is that the keys that are unique, do
    //get re-rendered which can make it faster!
    async function fetchProducts() {
      const response = await fetch("https://joint-well-api.onrender.com/hats");
      const currentProducts = await response.json();
      setProducts(currentProducts);
    }
    fetchProducts();
    //console.log(products);
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>
        <SetProductsContext.Provider value={setSelectedStyle}>
          <SetDecorationContext.Provider value={setSelectedDecoration}>
            <Grid
              columns={12}
              gutter={40}
              grow={true}
              style={{
                maxWidth: "95vw",
                marginTop: "3rem",
              }}
            >
              <Grid.Col
                span={2}
                style={{ maxWidth: "10rem", marginLeft: "1rem" }}
              >
                <Box onClick={() => setClick(!click)}>
                  <DropDown dropDownName={"STYLE"} />
                </Box>

                <Box style={{ marginTop: "0.2rem", maxWidth: "10rem" }}>
                  {" "}
                  <DropDownDecorationBase dropDownName={"DECORATION"} />
                </Box>
              </Grid.Col>

              <Grid.Col
                span={10}
                style={{
                  marginTop: "1rem",
                }}
                className="hat-column-right-products"
              >
                <Flex gap="md" align="flex-end" direction="row" wrap="wrap">
                  {products.length > 0 ? (
                    products
                      .filter((product) => {
                        //console.log(product);
                        if (!selectedStyle) {
                          return true;
                        } else {
                          return product.style.includes(selectedStyle);
                        }
                      })
                      .filter((product) => {
                        if (!selectedDecoration) {
                          return true;
                        } else {
                          return product.decoration.includes(
                            selectedDecoration
                          );
                        }
                      })
                      .map((product) => {
                        return (
                          <HatCard
                            key={product._id}
                            path={product.path}
                            id={product.id}
                            name={product.name}
                          />
                        );
                      })
                  ) : (
                    <Text style={{ display: "block", margin: "0 auto" }}>
                      Loading ...{" "}
                    </Text>
                  )}
                </Flex>
                <Center>
                  <Text
                    size="0.5rem"
                    style={{
                      display: "block",
                      marginTop: "2rem",
                      maxWidth: "fit-content",
                    }}
                  >
                    The logos on the products displayed here are not for sell.
                    They are just to exhibit our development and production
                    capabilities.
                  </Text>
                </Center>
              </Grid.Col>
            </Grid>
          </SetDecorationContext.Provider>
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default Products;
