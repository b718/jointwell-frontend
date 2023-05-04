import React, { useEffect, useState } from "react";
import "./HatCard.css";
import { Box, Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowDimensions";

const HatCard = ({ path, id, name }) => {
  const { height, width } = useWindowDimensions();
  const [widthHat, setWidthHat] = useState(100);
  const smallerWidthHats = [
    "BH001",
    "BH003",
    "KN001",
    "KN002",
    "KN003",
    "KN004",
    "KN005",
  ];

  const largerWidthHats = [
    "SH001",
    "SH002",
    "SH003",
    "OC004",
    "BH002",
    "BH005",
    "KN006",
  ];
  useEffect(() => {
    if (smallerWidthHats.includes(id)) {
      setWidthHat(90);
    }
  }, []);
  const styles = {
    width: `${widthHat}%`,
    marginLeft: !largerWidthHats.includes(id) ? "1rem" : null,
    marginBottom: id === "BH005" ? "1rem" : null,
  };
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
            <Center>
              <Image
                style={styles}
                width={largerWidthHats.includes(id) ? "100%" : "90%"}
                src={require(`../../Images/${path}`)}
              />
            </Center>
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
