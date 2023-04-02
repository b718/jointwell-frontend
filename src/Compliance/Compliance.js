import React, { useEffect } from "react";
import { Grid, Center, Image, Text } from "@mantine/core";
import "./Compliance.css";

const Compliance = (props) => {
  return (
    <Grid style={{ maxWidth: "90vw" }}>
      <Grid.Col span={4}>
        <div style={{ marginLeft: "3rem", marginTop: "2rem" }}>
          <Image fit="contain" src={require("../Images/compliance-1.png")} />
          <Image fit="contain" src={require("../Images/compliance3.png")} />
          <Image fit="contain" src={require("../Images/compliance-2.png")} />
        </div>
      </Grid.Col>
      <Grid.Col span={6}>
        <Center>
          <article className="compliace-article">
            <header>
              <h1 className="compliace-main-header">JOINT WELL COMPLIANCE</h1>
              <h2 className="compliace-second-header">
                {" "}
                Certifications for Vietnam
              </h2>
            </header>
            <section className="complianceParagraph">
              <Text style={{ fontSize: "1rem" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                vel pretium lectus quam id leo. Molestie at elementum eu
                facilisis. Sit amet facilisis magna etiam. Convallis a cras
                semper auctor neque vitae. Faucibus purus in massa tempor.
                Vulputate mi sit amet mauris commodo quis. Vitae justo eget
                magna fermentum. Arcu odio ut sem nulla pharetra diam sit amet.
                In pellentesque massa placerat duis ultricies lacus sed turpis.
              </Text>
            </section>
          </article>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default Compliance;
