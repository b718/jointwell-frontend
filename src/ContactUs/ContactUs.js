import { Box, Grid, Text, Title } from "@mantine/core";
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={6} className="contact-us-grid-form-left">
          <Title order={2}>Contact Us</Title>
          <Text>
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
        <Grid.Col span={6}></Grid.Col>
      </Grid>
      <Box className="footer-contact-us">
        <Title order={2} className="jw-footer-title">
          JOINT WELL VIETNAM
        </Title>
        <Grid>
          <Grid.Col span={4}>Test</Grid.Col>
          <Grid.Col span={4}>Test</Grid.Col>
          <Grid.Col span={4}>Test</Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUs;
