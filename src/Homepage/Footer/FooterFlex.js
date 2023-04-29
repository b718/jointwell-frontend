import React from "react";
import { Text, Flex, Center, Image } from "@mantine/core";
import "./Footer.css";

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
                width={65}
                height={65}
                src={require("../../Images/nav-pic.png")}
                style={{
                  background: "white",
                  borderRadius: "1.2rem",
                  paddingTop: "0.5rem",
                  paddingLeft: "0.3rem",
                  paddingRight: "0.3rem",
                  paddingBottom: "0.5rem",
                }}
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
                <Text
                  fz="sm"
                  style={{ marginTop: "1rem", textDecoration: "underline" }}
                  className="footer-flex-text-font"
                >
                  China Factory:
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Qingdao Joint Well Caps Co., Ltd.
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Qingdao, China
                </Text>
              </div>
            </section>
            <section
              className="text-section-contact-us"
              style={{ marginTop: "1rem" }}
            >
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text
                  fz="sm"
                  style={{ textDecoration: "underline" }}
                  className="footer-flex-text-font"
                >
                  Joint Well Head Office:
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Room 702, Building No.3,
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Guo Zhan Fortune Center
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  No.18 Qin Ling Road, Qingdao China 266061
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Tel: +86 532 81118060, 81118058
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  E-mail: angela@jointwellcaps.com
                </Text>
              </div>
            </section>

            <section
              className="text-section-contact-us"
              style={{ marginTop: "1rem" }}
            >
              <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
                <Text
                  fz="sm"
                  style={{ textDecoration: "underline" }}
                  className="footer-flex-text-font"
                >
                  Vietnam Factory:
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Jointwell Vietnam Co., Ltd.
                </Text>
                <Text fz="sm" className="footer-flex-text-font">
                  Thua Thien Hue City, Vietnam
                </Text>
              </div>
            </section>
          </Flex>
        </Flex>
      </Center>

      <footer>
        <Center>
          <h1 className="jointWellFooter" style={{ marginBottom: "2rem" }}>
            ©JOINTWELL 2023
          </h1>
        </Center>
      </footer>
    </div>
  );
};

export default FooterFlex;
