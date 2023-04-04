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
            <h2 className="compliace-second-header">
              {" "}
              Certifications for Vietnam
            </h2>
          </header>
        </article>
      </Center>
      <Grid
        style={{ maxWidth: "97vw", marginTop: "4rem", marginLeft: "1rem" }}
        grow="true"
      >
        <Grid.Col span={4}>
          <Image fit="contain" src={require("../Images/compliance-1.png")} />
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          <Image fit="contain" src={require("../Images/compliance3.png")} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image fit="contain" src={require("../Images/compliance-2.png")} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Compliance;
