import { Box, Grid, Text, Title, Flex } from "@mantine/core";
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Grid>
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
        <Grid.Col span={6}></Grid.Col>
      </Grid>

      <div className="footer-contact-us">
        <Flex direction="column" className="column-contact-us-footer-flex">
          <Title order={2} className="jw-footer-title">
            JOINT WELL VIETNAM
          </Title>
          <hr style={{ width: "90%", textAlign: "left", marginTop: "1rem" }} />

          <Grid className="footer-grid-for-contacts">
            <Grid.Col span={4} style={{ background: "#0B4C95" }}>
              <Text style={{ maxWidth: "18rem", color: "white" }}>
                Joint Well Head Office: Room 702, Building No.3, Guo Zhan
                Fortune Center, No.18 Qin Ling Road, Qingdao China 266061 Tel:
                +86 532 81118060 81118058 E-mail: angela@jointwellcaps.com
              </Text>
            </Grid.Col>
            <Grid.Col span={4} style={{ background: "#0B4C95" }}>
              {" "}
              <Text style={{ maxWidth: "18rem", color: "white" }}>
                Joint Well Head Office: Room 702, Building No.3, Guo Zhan
                Fortune Center, No.18 Qin Ling Road, Qingdao China 266061 Tel:
                +86 532 81118060 81118058 E-mail: angela@jointwellcaps.com
              </Text>
            </Grid.Col>
            <Grid.Col span={4} style={{ background: "#0B4C95" }}>
              {" "}
              <Text style={{ maxWidth: "18rem", color: "white" }}>
                Joint Well Head Office: Room 702, Building No.3, Guo Zhan
                Fortune Center, No.18 Qin Ling Road, Qingdao China 266061 Tel:
                +86 532 81118060 81118058 E-mail: angela@jointwellcaps.com
              </Text>
            </Grid.Col>
          </Grid>
        </Flex>
      </div>
      <div style={{ back: "#0B4C95" }}></div>
    </>
  );
};

export default ContactUs;
