import {
  Box,
  Center,
  Divider,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import classes from "./about.module.css";
import {
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandMantine,
} from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

const responsive = {
  // superLargeDesktop: {
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5,
  // },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3,
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  // },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function AboutView() {
  return (
    <>
      <Stack mt={{ base: 30, md: 50 }} gap={"xl"}>
        <Center>
          <Text
            variant="gradient"
            gradient={{ from: "darkblue", to: "skyblue", deg: 180 }}
            fw={"bolder"}
            fz={{ base: 30, sm: 40, md: 50 }}
          >
            About Me !
          </Text>
        </Center>

        {/* Web View */}
        <Stack visibleFrom="sm" gap={"xl"}>
          <Grid mt={"lg"} px={"xl"}>
            <Grid.Col span={{ base: 3, sm: 3, md: 4, lg: 4 }}>
              <Center h={"100%"}>
                <Text
                  variant="gradient"
                  gradient={{ from: "black", to: "skyblue", deg: 180 }}
                  fw={"bolder"}
                  fz={30}
                >
                  Basic Languages
                </Text>
              </Center>
            </Grid.Col>
            <Grid.Col span={"auto"}>
              <SimpleGrid
                cols={{ base: 2, sm: 3, md: 3, lg: 5 }}
                spacing={{ base: 10 }}
                verticalSpacing={{ base: "md", sm: "xl" }}
              >
                <Stack className={classes.icon_html}>
                  <AiOutlineHtml5 size={100} />
                  <Text fw={"bold"}>HTML</Text>
                </Stack>
                <Stack className={classes.icon_css}>
                  <TbBrandCss3 size={100} />
                  <Text fw={"bold"}>CSS</Text>
                </Stack>
                <Stack className={classes.icon_js}>
                  <TbBrandJavascript size={100} />
                  <Text fw={"bold"}>JAVASCRIPT</Text>
                </Stack>
                <Stack className={classes.icon_ts}>
                  <TbBrandTypescript size={100} />
                  <Text fw={"bold"}>TYPESCRIPT</Text>
                </Stack>
                <Stack className={classes.icon_react}>
                  <RiReactjsLine size={100} />
                  <Text fw={"bold"}>REACT</Text>
                </Stack>
              </SimpleGrid>
            </Grid.Col>
          </Grid>
          <Divider mx={300} size={"lg"} color="cyan" />
          <Grid mt={"lg"} px={"xl"}>
            <Grid.Col span={"auto"}>
              <SimpleGrid
                cols={{ base: 2, sm: 3, md: 3, lg: 5 }}
                spacing={{ base: 10 }}
                verticalSpacing={{ base: "md", sm: "xl" }}
              >
                <Stack className={classes.icon_prisma}>
                  <SiPrisma size={100} />
                  <Text fw={"bold"}>PRISMA</Text>
                </Stack>
                <Stack className={classes.icon_next}>
                  <TbBrandNextjs size={100} />
                  <Text fw={"bold"}>NEXT JS</Text>
                </Stack>
                <Stack className={classes.icon_mantine}>
                  <TbBrandMantine size={100} />
                  <Text fw={"bold"}>MANTINE</Text>
                </Stack>
                <Stack className={classes.icon_node}>
                  <FaNode size={100} />
                  <Text fw={"bold"}>NODE JS</Text>
                </Stack>
                <Stack className={classes.icon_figma}>
                  <TbBrandFigma size={100} />
                  <Text fw={"bold"}>FIGMA</Text>
                </Stack>
              </SimpleGrid>
            </Grid.Col>
            <Grid.Col span={{ base: 3, sm: 3, md: 3, lg: 4 }}>
              <Center h={"100%"}>
                <Text
                  variant="gradient"
                  gradient={{ from: "black", to: "skyblue", deg: 180 }}
                  fw={"bolder"}
                  fz={30}
                >
                  Value Added
                </Text>
              </Center>
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Mobile View */}
        <Stack px={"lg"} hiddenFrom="sm" gap={"xl"}>
          {/* <Stack>
            <Text
              variant="gradient"
              gradient={{ from: "black", to: "skyblue", deg: 180 }}
              fw={"bolder"}
              fz={"xl"}
            >
              Basic Languages
            </Text>

            <Carousel
              autoPlaySpeed={2000}
              responsive={responsive}
              autoPlay
              showDots={false}
              centerMode={true}
              infinite={true}
              arrows={false}
            >
              <div>
                <Stack className={classes.icon_html}>
                  <AiOutlineHtml5 size={100} />
                  <Text fw={"bold"}>HTML</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_css}>
                  <TbBrandCss3 size={100} />
                  <Text fw={"bold"}>CSS</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_js}>
                  <TbBrandJavascript size={100} />
                  <Text fw={"bold"}>JAVASCRIPT</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_ts}>
                  <TbBrandTypescript size={100} />
                  <Text fw={"bold"}>TYPESCRIPT</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_react}>
                  <RiReactjsLine size={100} />
                  <Text fw={"bold"}>REACT</Text>
                </Stack>
              </div>
            </Carousel>
          </Stack>

          <Stack>
            <Group justify="right">
              <Text
                variant="gradient"
                gradient={{ from: "black", to: "skyblue", deg: 180 }}
                fw={"bolder"}
                fz={"xl"}
              >
                Value Added
              </Text>
            </Group>
            <Carousel
              autoPlaySpeed={2200}
              responsive={responsive}
              autoPlay
              showDots={false}
              centerMode={true}
              infinite={true}
              arrows={false}
            >
              <div>
                <Stack className={classes.icon_prisma}>
                  <SiPrisma size={100} />
                  <Text fw={"bold"}>PRISMA</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_next}>
                  <TbBrandNextjs size={100} />
                  <Text fw={"bold"}>NEXT JS</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_mantine}>
                  <TbBrandMantine size={100} />
                  <Text fw={"bold"}>MANTINE</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_node}>
                  <FaNode size={100} />
                  <Text fw={"bold"}>NODE JS</Text>
                </Stack>
              </div>
              <div>
                <Stack className={classes.icon_figma}>
                  <TbBrandFigma size={100} />
                  <Text fw={"bold"}>FIGMA</Text>
                </Stack>
              </div>
            </Carousel>
          </Stack> */}
            <SimpleGrid
              cols={{ base: 2, sm: 3, md: 3, lg: 5 }}
              spacing={{ base: 10 }}
              verticalSpacing={{ base: "md", sm: "xl" }}
            >
          <Marquee speed={60}>
              <Stack className={classes.icon_html}>
                <AiOutlineHtml5 size={100} />
                <Text fw={"bold"}>HTML</Text>
              </Stack>
              <Stack className={classes.icon_css}>
                <TbBrandCss3 size={100} />
                <Text fw={"bold"}>CSS</Text>
              </Stack>
              <Stack className={classes.icon_js}>
                <TbBrandJavascript size={100} />
                <Text fw={"bold"}>JAVASCRIPT</Text>
              </Stack>
              <Stack className={classes.icon_ts}>
                <TbBrandTypescript size={100} />
                <Text fw={"bold"}>TYPESCRIPT</Text>
              </Stack>
              <Stack className={classes.icon_react}>
                <RiReactjsLine size={100} />
                <Text fw={"bold"}>REACT</Text>
              </Stack>
          </Marquee>
            </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
}
