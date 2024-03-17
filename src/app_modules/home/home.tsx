import {
  Stack,
  Box,
  Title,
  Image,
  Text,
  BackgroundImage,
  AspectRatio,
  rem,
  Flex,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export default function HomeView() {
  return (
    <>
      <BackgroundImage src="https://raw.githubusercontent.com/Bagasbanuna02/assets/main/banuna-studio/background_home.jpg">
        <>
          <Stack gap={20} py={{ base: 100, md: 150 }}>
            <Flex justify={"center"}>
              <AspectRatio ratio={1} style={{ flex: `0 0 ${rem(400)}` }}>
                <Image
                  alt=""
                  src={
                    "https://github.com/Bagasbanuna02/assets/blob/main/banuna-studio/logo.png?raw=true"
                  }
                />
              </AspectRatio>
            </Flex>
            <Stack align="center">
              <Stack
                gap={3}
                style={{ alignContent: "center" }}
                px={{ base: 50, sm: 60, xl: 80 }}
              >
                <Text
                  fw={"bold"}
                  fz={{ base: 30, sm: 40, md: 50 }}
                  c={"white"}
                >{`Hi, I'm Bagasbanuna`}</Text>
                <Text fw={"bold"} c={"white"} fz={{ base: 15, sm: 20, md: 20 }}>
                  {`I'm a Creative Web Developer and UI/UX Designer based in Indonesia. I've worked with growing startups`}{" "}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </>
      </BackgroundImage>
    </>
  );
}
