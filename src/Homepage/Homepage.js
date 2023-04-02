import React from "react";
import "./Homepage.css";
import { Center, Grid, Image } from "@mantine/core";
import Homepagecard from "./Homepage-card";

const Homepage = () => {
  return (
    <div>
      <article>
        <Center>
          {" "}
          <section className="homePageText">
            {" "}
            Joint Well Caps specializes in manufacturing caps and hats for
            import customers over the world. Our China factory was set up in
            1995, making 10 million caps each year. Our Vietnam factory was set
            up in 2019, making 12 million caps each year. Our people make the
            products speak for themselves.{" "}
          </section>
        </Center>
      </article>

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
              src={require("../Images/hat-pic.png")}
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

      <footer>
        <Center>
          <h1 className="jointWellFooter">©JOINTWELL 2023</h1>
        </Center>
      </footer>
    </div>
  );
};

export default Homepage;
