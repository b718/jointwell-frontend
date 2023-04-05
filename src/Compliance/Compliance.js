import React, { useEffect } from "react";
import { Grid, Center, Image, Text } from "@mantine/core";
import "./Compliance.css";

const Compliance = (props) => {
  return (
    <>
      <Center>
        <article className="compliace-article">
          <header>
            <h1 className="compliace-main-header">JOINT WELL COMPLIANCE</h1>
          </header>
        </article>
      </Center>
      <Center>
        <Grid style={{ maxWidth: "70vw", marginTop: "4rem" }} grow="true">
          <Grid.Col span={6}>
            <Image
              fit="contain"
              src={require("../Images/compliance-new-1.jpg")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            {" "}
            <Image
              fit="contain"
              src={require("../Images/compliance-new-2.jpg")}
            />
          </Grid.Col>
        </Grid>
      </Center>

      <Center>
        <Grid style={{ maxWidth: "70vw", marginTop: "4rem" }} grow="true">
          <Grid.Col span={6}>
            <Image
              fit="contain"
              src={require("../Images/compliance-new-3.jpg")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              fit="contain"
              src={require("../Images/compliance-new-4.jpg")}
            />
          </Grid.Col>
        </Grid>
      </Center>
    </>
  );
};

export default Compliance;
