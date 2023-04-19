import React from "react";
import { Center, Grid, Image, Flex, Text, Title, Header } from "@mantine/core";
import Homepagecard from "../Homepage-card";

const HomepageOld = () => {
  return (
    <Grid columns={3} align="center" className="mGridHomePage" fluid>
      <Grid.Col span={1}>
        <Center>
          <Homepagecard image="joint-well-china.png" text="jointwell china" />
        </Center>
      </Grid.Col>
      <Grid.Col span={1}>
        <Center>
          <Image
            fit="contain"
            src={require("../../Images/hat-pic.png")}
            className="homePageMainPicture"
          />
        </Center>
      </Grid.Col>
      <Grid.Col span={1}>
        <Center>
          <Homepagecard
            image="joint-well-vietnam.png"
            text="jointwell vietnam"
          />
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default HomepageOld;
