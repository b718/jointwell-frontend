import { Box, Grid, Text, Title, Flex, Center } from "@mantine/core";
import React from "react";
import "./ContactUs.css";
import Form from "./Form/Form";

const ContactUs = () => {
  return (
    <>
      <Grid style={{ maxWidth: "90vw" }}>
        <Grid.Col span={6} className="contact-us-grid-form-left">
          <Title order={2} style={{ color: "#0B4C95" }}>
            Contact Us
          </Title>
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
        <Grid.Col span={6}>
          <Form />
        </Grid.Col>
      </Grid>

      <div className="footer-contact-us" style={{ paddingBottom: "10px" }}>
        <Flex direction="column" className="column-contact-us-footer-flex">
          <Title order={2} className="jw-footer-title">
            JOINT WELL VIETNAM
          </Title>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginTop: "1rem",
              marginLeft: "4rem",
            }}
          />

          <Grid
            className="footer-grid-for-contacts"
            style={{ maxWidth: "90vw" }}
          >
            <Grid.Col span={4} style={{ background: "#0B4C95" }}>
              <section className="text-section-contact-us">
                <Text>Joint Well Head Office:</Text>
                <Text>Room 702, Building No.3,</Text>
                <Text>Guo Zhan Fortune Center, No.18 Qin Ling Road</Text>
                <Text>Qingdao China 266061</Text>
                <Text>Tel: +86 532 81118060 81118058</Text>
                <Text>E-mail: angela@jointwellcaps.com</Text>
              </section>
            </Grid.Col>{" "}
            <Grid.Col
              span={4}
              style={{ background: "#0B4C95" }}
              justify="center"
            >
              <section className="text-section-contact-us">
                <Text>Vietnam Factory:</Text>
                <Text>Jointwell Vietnam Co., Ltd.</Text>
                <Text>Thua Thien Hue City, Vietnam</Text>
                <Text style={{ marginTop: "1rem" }}>China Factory:</Text>
                <Text>Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text>Qingdao, China</Text>
              </section>
            </Grid.Col>
            <Grid.Col
              span={4}
              style={{ background: "#0B4C95" }}
              justify="center"
            >
              {" "}
              <section className="text-section-contact-us">
                <Text>Vietnam Factory:</Text>
                <Text>Jointwell Vietnam Co., Ltd.</Text>
                <Text>Thua Thien Hue City, Vietnam</Text>
                <Text style={{ marginTop: "1rem" }}>China Factory:</Text>
                <Text>Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text>Qingdao, China</Text>
              </section>
            </Grid.Col>
          </Grid>
        </Flex>
      </div>
    </>
  );
};

export default ContactUs;
