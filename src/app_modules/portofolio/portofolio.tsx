"use client";

import {
  BackgroundImage,
  Box,
  Card,
  Center,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function PortofolioView() {
  return (
    <>
      {/* <BackgroundImage src="/aset/portofolio/background.png" h={800}>
      </BackgroundImage> */}
      <Box bg={"gray.2"}>
        <Stack
          m={{ base: 20, sm: 30, md: 40, lg: 50 }}
          gap={"xl"}
          // py={{ base: 30, sm: 30, md: 100, lg: 120 }}
        >
          <Stack align="center" gap={0} mt={"lg"}>
            <Text
              variant="gradient"
              gradient={{ from: "darkblue", to: "skyblue", deg: 180 }}
              fw={"bolder"}
              fz={{ base: 30, sm: 40, md: 50 }}
            >
              My Portofolio
            </Text>
            <Text
              fz={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
              ff={"sans-serif"}
              fs={"italic"}
            >
              From my experience, there are several websites that I have
              created.
            </Text>
          </Stack>

          <SimpleGrid
            m={"xl"}
            px={"xl"}
            cols={{ base: 1, xs: 2, sm: 3, md: 3, lg: 4 }}
            spacing={{ base: "md", sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "lg", md: "lg", lg: "xl" }}
          >
            <Card withBorder shadow="lg" radius={"sm"} p={"lg"}>
              <Card.Section>
                <Image alt="porto 1" src={"/aset/portofolio/porto1.png"} />
              </Card.Section>
              <Card.Section p={"sm"}>
                <Stack gap={"xs"}>
                  <Group justify="center">
                    <Text fw={"bold"}>DARIBALIMICE</Text>
                  </Group>
                  {/* <Text fz={"xs"} lineClamp={4}>
                  Daribalimice is a company that specializes in planning MICE
                  (Meeting, Incentives, Conference Exhibition) and Event
                  Production
                </Text> */}
                </Stack>
              </Card.Section>
            </Card>

            {Array(3)
              .fill(0)
              .map((e, i) => (
                <Card key={i} withBorder shadow="lg" w={"100%"}>
                  <Stack align="center" justify="center" h={"100%"}>
                    <Image
                      alt="porto 1"
                      src={"/aset/portofolio/cooming_soon.jpg"}
                    />
                  </Stack>
                </Card>
              ))}
          </SimpleGrid>
          {/* <Divider
            mt={"lg"}
            color="cyan"
            size={"xl"}
            style={{
              borderRadius: "10px",
            }}
          /> */}
        </Stack>
      </Box>
    </>
  );
}
