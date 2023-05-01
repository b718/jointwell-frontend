import React, { useState } from "react";
import "./Homepage.css";
import { Center, Grid, Image, Text, Box } from "@mantine/core";
import FooterFlex from "./Footer/FooterFlex";
import JointWellChinaIntro from "./JointWellChinaIntro";
import JointWellVietnamIntro from "./JointWellVietnamIntro";
import JointWellPictureHat from "../Images/hat-pic.png";

export const BranchNameProvider = React.createContext();
const Homepage = () => {
  const [branchName, setBranchName] = useState("");

  return (
    <BranchNameProvider.Provider value={setBranchName}>
      <div>
        <div style={{ maxWidth: "10rem" }}></div>
        <article>
          <Center>
            {" "}
            <section className="homePageText">
              {" "}
              <Text
                style={{
                  marginTop: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                {" "}
                Joint Well Caps specializes in manufacturing caps and hats for
                import customers over the world.
              </Text>
              <Text
                style={{
                  marginTop: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                {" "}
                Our China factory was set up in 1995, making 10 million caps
                each year.
              </Text>
              <Text
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                Our Vietnam factory was set up in 2019, making 12 million caps
                each year. Our people make the products speak for themselves.
              </Text>
            </section>
          </Center>
        </article>

        <Center>
          <Grid
            style={{ maxWidth: "80vw", marginTop: "3.5rem" }}
            className="joint-well-china-paragraph"
            justify="center"
          >
            <Grid.Col
              md={4}
              lg={4}
              xl={4}
              onClick={() => setBranchName("china")}
              className="home-page-grid-col-each"
            >
              <Center>
                <Box
                  // className="home-page-box-introduction-c-v"
                  className="home-page-box-for-enter"
                >
                  <Center>
                    <Text
                      style={{
                        marginTop: "1rem",
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                      className="home-page-text-header-c-v"
                    >
                      JW China
                    </Text>
                  </Center>

                  <Center>
                    <Text
                      style={{ marginTop: "0rem" }}
                      className="home-page-text-header-c-v"
                    >
                      Factory
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      style={{ marginTop: "1rem" }}
                      className="home-page-text-header-c-v-2"
                    >
                      ENTER
                    </Text>
                  </Center>
                </Box>
              </Center>
            </Grid.Col>
            <Grid.Col
              md={4}
              lg={4}
              xl={4}

              // className="home-page-grid-col-each"
            >
              <Center style={{ paddingBottom: "1rem" }}>
                <Image
                  width={260}
                  height={160}
                  fit="contain"
                  src={JointWellPictureHat}
                />
              </Center>
            </Grid.Col>
            <Grid.Col
              md={4}
              lg={4}
              xl={4}
              onClick={() => setBranchName("vietnam")}
              className="home-page-grid-col-each"
            >
              {" "}
              <Center>
                <Box
                  // className="home-page-box-introduction-c-v"
                  className="home-page-box-for-enter"
                >
                  <Center>
                    <Text
                      style={{ marginTop: "1rem" }}
                      className="home-page-text-header-c-v"
                    >
                      JW Vietnam
                    </Text>
                  </Center>

                  <Center>
                    <Text
                      style={{ marginTop: "0rem" }}
                      className="home-page-text-header-c-v"
                    >
                      Factory
                    </Text>
                  </Center>

                  <Center>
                    <Text
                      style={{ marginTop: "1rem" }}
                      className="home-page-text-header-c-v-2"
                    >
                      ENTER
                    </Text>
                  </Center>
                </Box>
              </Center>
            </Grid.Col>
          </Grid>
        </Center>
        {branchName === "vietnam" ? (
          <JointWellVietnamIntro />
        ) : branchName === "china" ? (
          <JointWellChinaIntro />
        ) : (
          <div> </div>
        )}
        <FooterFlex />
      </div>
    </BranchNameProvider.Provider>
  );
};

export default Homepage;
