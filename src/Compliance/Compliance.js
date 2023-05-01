import React, { useEffect } from "react";
import { Grid, Center, Image, Text, Flex } from "@mantine/core";
import "./Compliance.css";
import { clamp } from "@mantine/hooks";

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

      {/* <Center>
        <Grid style={{ maxWidth: "70vw", marginTop: "4rem" }} grow="true">
          <Grid.Col span={6}>
            <Image
              width={200}
              src={require("../Images/compliance-new-1.jpg")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            {" "}
            <Image
              width={200}
              src={require("../Images/compliance-new-2.jpg")}
            />
          </Grid.Col>
        </Grid>
      </Center>

      <Center>
        <Grid style={{ maxWidth: "70vw", marginTop: "4rem" }} grow="true">
          <Grid.Col span={6}>
            <Image
              width={200}
              src={require("../Images/compliance-new-3.jpg")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              width={200}
              src={require("../Images/compliance-new-4.jpg")}
            />
          </Grid.Col>
        </Grid>
      </Center> */}

      <Center>
        <Flex
          gap="md"
          justify="center"
          align="flex-end"
          direction="row"
          wrap="wrap"
          style={{ maxWidth: "60rem", marginTop: "1rem" }}
          className="compliance-flex-center"
        >
          <a href={require("../Images/compliance-new-1.jpg")} target="_blank">
            <Image
              width={"15rem"}
              src={require("../Images/compliance-new-1.jpg")}
            />
          </a>
          <a href={require("../Images/compliance-new-2.jpg")} target="_blank">
            <Image
              width={"15rem"}
              src={require("../Images/compliance-new-2.jpg")}
            />
          </a>
          <a href={require("../Images/compliance-new-3.jpg")} target="_blank">
            <Image
              width={"15rem"}
              src={require("../Images/compliance-new-4.jpg")}
            />
          </a>
          <a href={require("../Images/compliance-new-4.jpg")} target="_blank">
            <Image
              width={"9rem"}
              src={require("../Images/compliance-new-3.jpg")}
            />
          </a>
        </Flex>
      </Center>
    </>
  );
};

export default Compliance;
