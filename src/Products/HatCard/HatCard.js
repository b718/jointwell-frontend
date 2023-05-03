import React, { useEffect, useState } from "react";
import "./HatCard.css";
import { Box, Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowDimensions";

const HatCard = ({ path, id, name }) => {
  const { height, width } = useWindowDimensions();

  return (
    <Flex
      direction="column"
      style={{ marginLeft: "0rem" }}
      className="hat-card-drop-down"
    >
      {" "}
      <Box style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}>
        <Center>
          <a href={require(`../../Images/${path}`)} target="_blank">
            <Image fit="contain" src={require(`../../Images/${path}`)} />
          </a>
        </Center>
        <Grid direction="row" columns={4}>
          {" "}
          <Grid.Col span={4}>
            {" "}
            <Text fz="sm" align="center" className="text-hat-card">
              {id}
            </Text>
          </Grid.Col>
        </Grid>
      </Box>
    </Flex>
  );
};

export default HatCard;
