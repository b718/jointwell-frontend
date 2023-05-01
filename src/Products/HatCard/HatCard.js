import React, { useEffect, useState } from "react";
import "./HatCard.css";
import { Box, Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowDimensions";

const HatCard = ({ path, id, name }) => {
  const [hatSize, setHatSize] = useState(260);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 730) {
      setHatSize(260);
    }

    if (width >= 800) {
      setHatSize(180);
    }

    if (width >= 900) {
      setHatSize(160);
    }

    if (width >= 1000) {
      setHatSize(200);
    }
    if (width >= 1435) {
      setHatSize(260);
    }
  }, [width]);

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
            <Image
              width={hatSize}
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
