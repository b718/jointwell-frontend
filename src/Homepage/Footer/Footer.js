import React from "react";
import { Grid, Text, Title, Flex, Center } from "@mantine/core";

const Footer = () => {
  return (
    <div className="footer-contact-us" style={{ paddingBottom: "10px" }}>
      <Flex direction="column" className="column-contact-us-footer-flex">
        <Title order={2} className="jw-footer-title">
          JOINT WELL
        </Title>
        <hr
          style={{
            width: "90vw",
            textAlign: "left",
            marginTop: "1rem",
            marginLeft: "5rem",
          }}
        />

        <Grid className="footer-grid-for-contacts" style={{ maxWidth: "99vw" }}>
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
          <Grid.Col span={4} style={{ background: "#0B4C95" }} justify="center">
            <section className="text-section-contact-us">
              <Text>Vietnam Factory:</Text>
              <Text>Jointwell Vietnam Co., Ltd.</Text>
              <Text>Thua Thien Hue City, Vietnam</Text>
              <Text style={{ marginTop: "1rem" }}>China Factory:</Text>
              <Text>Qingdao Joint Well Caps Co., Ltd.</Text>
              <Text>Qingdao, China</Text>
            </section>
          </Grid.Col>
          <Grid.Col span={4} style={{ background: "#0B4C95" }} justify="center">
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
      <footer>
        <Center>
          <h1 className="jointWellFooter">©JOINTWELL 2023</h1>
        </Center>
      </footer>
    </div>
  );
};

export default Footer;
