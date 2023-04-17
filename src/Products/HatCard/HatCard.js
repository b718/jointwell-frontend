import React from "react";
import "./HatCard.css";
import { Center, Flex, Grid, Image, Text } from "@mantine/core";

const HatCard = ({ path, id, name }) => {
  return (
    <Flex
      direction="column"
      style={{ marginLeft: "6rem" }}
      className="hat-card-drop-down"
    >
      {" "}
      <Center>
        <Image
          width={260}
          fit="contain"
          src={require(`../../Images/${path}`)}
        />
      </Center>
      <Grid direction="row">
        {" "}
        <Grid.Col span={6}>
          <Text fz="sm" className="text-hat-card">
            {name}
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          {" "}
          <Text fz="sm" align="right" className="text-hat-card">
            ID: {id}
          </Text>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default HatCard;
