import { Grid, Text, Title, Flex } from "@mantine/core";
import React from "react";
import Footer from "../Homepage/Footer/Footer";
import "./ContactUs.css";
import Form from "./Form/Form";

const ContactUs = () => {
  return (
    <>
      <Grid style={{ maxWidth: "99vw" }} grow="true">
        <Grid.Col span={5} className="contact-us-grid-form-left">
          <Title order={2} style={{ color: "#0B4C95" }}>
            Contact Us
          </Title>
          <Text style={{ marginTop: "0.4rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel
            pretium lectus quam id leo. Molestie at elementum eu facilisis. Sit
            amet facilisis magna etiam. Convallis a cras semper auctor neque
            vitae. Faucibus purus in massa tempor. Vulputate mi sit amet mauris
            commodo quis. Vitae justo eget magna fermentum. Arcu odio ut sem
            nulla pharetra diam sit amet. In pellentesque massa placerat duis
            ultricies lacus sed turpis.
          </Text>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={5}>
          <Form />
        </Grid.Col>
      </Grid>

      <Footer />
    </>
  );
};

export default ContactUs;
