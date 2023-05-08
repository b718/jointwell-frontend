import React, { useEffect, useState } from "react";
import "./Products.css";
import { Grid, Box, Flex, Center, Text, Loader } from "@mantine/core";
import DropDown from "./DropDown/DropDownHats/DropDownHatsBase";
import DropDownDecorationBase from "./DropDown/DropDownDecorations/DropDownDecorationBase";
import HatCard from "./HatCard/HatCard";
import useWindowDimensions from "../Components/useWindowDimensions";

export const ProductsContext = React.createContext();
export const SetProductsContext = React.createContext();
export const SetDecorationContext = React.createContext();
export const CurrentActiveTab = React.createContext();
export const SetCurrentActiveTab = React.createContext();

//Recall that with context API we can now avoid prop drilling!

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedDecoration, setSelectedDecoration] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const { height, width } = useWindowDimensions();

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
            <CurrentActiveTab.Provider value={activeTab}>
              <SetCurrentActiveTab.Provider value={setActiveTab}>
                <Grid
                  columns={12}
                  grow={true}
                  style={{
                    maxWidth: "95vw",
                    marginTop: "3rem",
                  }}
                >
                  <Grid.Col span={2}>
                    <Flex
                      justify="center"
                      direction="column"
                      align="flex-start"
                    >
                      <Box style={{ paddingLeft: "1rem" }}>
                        <Box>
                          <DropDown dropDownName={"STYLE"} />
                        </Box>

                        <Box style={{ marginTop: "0.2rem" }}>
                          {" "}
                          <DropDownDecorationBase dropDownName={"DECORATION"} />
                        </Box>
                      </Box>
                    </Flex>
                  </Grid.Col>

                  <Grid.Col
                    span={10}
                    style={{
                      marginTop: "1rem",
                    }}
                    className="hat-column-right-products"
                  >
                    <Flex
                      gap="md"
                      align="flex-end"
                      justify={
                        !(products.length > 0) || width < 600
                          ? "center"
                          : "flex-start"
                      }
                      direction="row"
                      wrap="wrap"
                      className="flex-hat-products-right-column"
                    >
                      {products
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
                        })}
                    </Flex>
                    <Center>
                      {!(products.length > 0) ? (
                        <div className="loading-div-products">
                          <Loader color="gray" />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </Center>
                    <Center>
                      <Text
                        size="0.5rem"
                        // style={
                        //   !(products.length > 0) && width > 992
                        //     ? { marginLeft: "10rem" }
                        //     : {}
                        // }
                        className="bottom-text-products-logos"
                      >
                        The logos on the products displayed here are not for
                        sell. They are just to exhibit our development and
                        production capabilities.
                      </Text>
                    </Center>
                  </Grid.Col>
                </Grid>
              </SetCurrentActiveTab.Provider>
            </CurrentActiveTab.Provider>
          </SetDecorationContext.Provider>
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default Products;
