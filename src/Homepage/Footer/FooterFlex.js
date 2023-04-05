import React from "react";
import { Text, Title, Flex, Center, Image } from "@mantine/core";

const FooterFlex = () => {
  return (
    <div className="footer-contact-us">
      <Center>
        <Flex
          direction="column"
          className="column-contact-us-footer-flex"
          style={{ maxWidth: "80vw" }}
        >
          <Flex gap="md" justify="flex-start" align="center" direction="row">
            <div>
              <Image
                fit="contain"
                height={65}
                src={require("../../Images/nav-pic.png")}
                style={{
                  background: "white",
                  borderRadius: "1.2rem",
                  maxWidth: "4rem",
                }}
              />
            </div>
            {
              <Title order={2} className="jw-footer-title">
                JOINT WELL
              </Title>
            }
          </Flex>
          <Center>
            <hr
              style={{
                width: "90vw",
                marginTop: "1rem",
              }}
            />
          </Center>

          <Flex
            className="footer-grid-for-contacts"
            wrap="wrap"
            justify="center"
            columnGap="8rem"
          >
            <section className="text-section-contact-us">
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="md" truncate style={{ textDecoration: "underline" }}>
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
              </div>
            </section>

            <section className="text-section-contact-us">
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="md" truncate style={{ textDecoration: "underline" }}>
                  Vietnam Factory:
                </Text>
                <Text fz="md" truncate>
                  Jointwell Vietnam Co., Ltd.
                </Text>
                <Text fz="md" truncate>
                  Thua Thien Hue City, Vietnam
                </Text>
                <Text
                  fz="md"
                  style={{ marginTop: "1rem", textDecoration: "underline" }}
                  truncate
                >
                  China Factory:
                </Text>
                <Text fz="md" truncate>
                  Qingdao Joint Well Caps Co., Ltd.
                </Text>
                <Text fz="md" truncate>
                  Qingdao, China
                </Text>
              </div>
            </section>

            <section className="text-section-contact-us">
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="md" truncate style={{ textDecoration: "underline" }}>
                  Vietnam Factory:
                </Text>
                <Text fz="md" truncate>
                  Jointwell Vietnam Co., Ltd.
                </Text>
                <Text fz="md" truncate>
                  Thua Thien Hue City, Vietnam
                </Text>
                <Text
                  fz="md"
                  style={{ marginTop: "1rem", textDecoration: "underline" }}
                  truncate
                >
                  China Factory:
                </Text>
                <Text fz="md" truncate>
                  Qingdao Joint Well Caps Co., Ltd.
                </Text>
                <Text fz="md" truncate>
                  Qingdao, China
                </Text>
              </div>
            </section>
          </Flex>
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

export default FooterFlex;
