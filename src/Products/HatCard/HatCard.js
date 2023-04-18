import React from "react";
import "./HatCard.css";
import { Box, Center, Flex, Grid, Image, Text } from "@mantine/core";

const HatCard = ({ path, id, name }) => {
  return (
    <Flex
      direction="column"
      style={{ marginLeft: "6rem" }}
      className="hat-card-drop-down"
    >
      {" "}
      <Box style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}>
        <Center>
          <a href={require(`../../Images/${path}`)} target="_blank">
            <Image
              width={260}
              fit="contain"
              src={require(`../../Images/${path}`)}
            />
          </a>
        </Center>
        <Grid direction="row">
          {" "}
          <Grid.Col span={8}>
            <Text fz="sm" className="text-hat-card">
              {
                //name
              }
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            {" "}
            <Text fz="sm" align="right" className="text-hat-card">
              {id}
            </Text>
          </Grid.Col>
        </Grid>
      </Box>
    </Flex>
  );
};

export default HatCard;
