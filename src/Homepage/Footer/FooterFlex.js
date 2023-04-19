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
          <Flex
            gap="sm"
            justify="flex-start"
            align="center"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            {" "}
            <div>
              <Image
                fit="contain"
                height={65}
                src={require("../../Images/nav-pic.png")}
                style={{ background: "white", borderRadius: "1.2rem" }}
              />
            </div>
            <h1 style={{ color: "white" }}>JOINT WELL</h1>
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
            rowGap="1rem"
          >
            <section
              className="text-section-contact-us"
              style={{ marginTop: "1rem" }}
            >
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="sm" style={{ textDecoration: "underline" }}>
                  Joint Well Head Office:
                </Text>
                <Text fz="sm">Room 702, Building No.3,</Text>
                <Text fz="sm">
                  Guo Zhan Fortune Center, No.18 Qin Ling Road
                </Text>
                <Text fz="sm">Qingdao China 266061</Text>
                <Text fz="sm">Tel: +86 532 81118060 81118058</Text>
                <Text fz="sm">E-mail: angela@jointwellcaps.com</Text>
              </div>
            </section>

            <section
              className="text-section-contact-us"
              style={{ marginTop: "1rem" }}
            >
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="sm" style={{ textDecoration: "underline" }}>
                  Vietnam Factory:
                </Text>
                <Text fz="sm">Jointwell Vietnam Co., Ltd.</Text>
                <Text fz="sm">Thua Thien Hue City, Vietnam</Text>
                <Text
                  fz="sm"
                  style={{ marginTop: "1rem", textDecoration: "underline" }}
                >
                  China Factory:
                </Text>
                <Text fz="sm">Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text fz="sm">Qingdao, China</Text>
              </div>
            </section>

            <section
              className="text-section-contact-us"
              style={{ marginTop: "1rem" }}
            >
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text fz="sm" style={{ textDecoration: "underline" }}>
                  Vietnam Factory:
                </Text>
                <Text fz="sm">Jointwell Vietnam Co., Ltd.</Text>
                <Text fz="sm">Thua Thien Hue City, Vietnam</Text>
                <Text
                  fz="sm"
                  style={{ marginTop: "1rem", textDecoration: "underline" }}
                >
                  China Factory:
                </Text>
                <Text fz="sm">Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text fz="sm">Qingdao, China</Text>
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
