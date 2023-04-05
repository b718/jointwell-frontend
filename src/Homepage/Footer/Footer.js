import React from "react";
import { Grid, Text, Title, Flex, Center } from "@mantine/core";

const Footer = () => {
  return (
    <div className="footer-contact-us" style={{ paddingBottom: "10px" }}>
      <Center>
        <Flex
          direction="column"
          className="column-contact-us-footer-flex"
          style={{ maxWidth: "80vw" }}
        >
          <Title order={2} className="jw-footer-title">
            JOINT WELL
          </Title>
          <Center>
            <hr
              style={{
                width: "90vw",
                marginTop: "1rem",
              }}
            />
          </Center>

          <Center>
            <Grid
              className="footer-grid-for-contacts"
              style={{ maxWidth: "80vw" }}
              grow="true"
              columns={16}
            >
              <Grid.Col span={4} style={{ background: "#0B4C95" }}>
                <section className="text-section-contact-us">
                  <Text fz="md" truncate>
                    Joint Well Head Office:
                  </Text>
                  <Text fz="md" truncate>
                    Room 702, Building No.3,
                  </Text>
                  <Text fz="md" truncate>
                    Guo Zhan Fortune Center, No.18 Qin Ling Road
                  </Text>
                  <Text fz="md" truncate>
                    Qingdao China 266061
                  </Text>
                  <Text fz="md" truncate>
                    Tel: +86 532 81118060 81118058
                  </Text>
                  <Text fz="md" truncate>
                    E-mail: angela@jointwellcaps.com
                  </Text>
                </section>
              </Grid.Col>{" "}
              <Grid.Col
                span={4}
                style={{
                  background: "#0B4C95",
                  marginLeft: "3rem",
                  marginRight: "3rem",
                }}
              >
                <section className="text-section-contact-us">
                  <Text fz="md" truncate>
                    Vietnam Factory:
                  </Text>
                  <Text fz="md" truncate>
                    Jointwell Vietnam Co., Ltd.
                  </Text>
                  <Text fz="md" truncate>
                    Thua Thien Hue City, Vietnam
                  </Text>
                  <Text fz="md" style={{ marginTop: "1rem" }} truncate>
                    China Factory:
                  </Text>
                  <Text fz="md" truncate>
                    Qingdao Joint Well Caps Co., Ltd.
                  </Text>
                  <Text fz="md" truncate>
                    Qingdao, China
                  </Text>
                </section>
              </Grid.Col>
              <Grid.Col span={4} style={{ background: "#0B4C95" }}>
                {" "}
                <section className="text-section-contact-us">
                  <Text fz="md" truncate>
                    Vietnam Factory:
                  </Text>
                  <Text fz="md" truncate>
                    Jointwell Vietnam Co., Ltd.
                  </Text>
                  <Text fz="md" truncate>
                    Thua Thien Hue City, Vietnam
                  </Text>
                  <Text fz="md" style={{ marginTop: "1rem" }} truncate>
                    China Factory:
                  </Text>
                  <Text fz="md" truncate>
                    Qingdao Joint Well Caps Co., Ltd.
                  </Text>
                  <Text fz="md" truncate>
                    Qingdao, China
                  </Text>
                </section>
              </Grid.Col>
            </Grid>
          </Center>
        </Flex>
      </Center>

      <footer>
        <Center>
          <h1 className="jointWellFooter">©JOINTWELL 2023</h1>
        </Center>
      </footer>
    </div>
  );
};

export default Footer;
