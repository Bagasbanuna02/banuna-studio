"use client";

import {
  BackgroundImage,
  Button,
  Center,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandGmail, IconBrandInstagram } from "@tabler/icons-react";

export default function ContactMeView() {
  return (
    <>
      <Stack
        m={{ base: 30, sm: 30, md: 80, lg: 100 }}
        pb={{ base: 30, sm: 30, md: 50, lg: 50 }}
        gap={"xs"}
      >
        <Stack gap={0}>
          <Text
            variant="gradient"
            gradient={{ from: "darkblue", to: "skyblue", deg: 180 }}
            fw={"bolder"}
            fz={{ base: 30, sm: 40, md: 50 }}
          >
            Contact Me
          </Text>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: 10, sm: "xl" }}
            //   verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <div>
              <Stack>
                <Text
                  fz={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                  ff={"sans-serif"}
                  fs={"italic"}
                >
                  If you need discuss about your dream website, can contact me
                  on sosial media or send email directly on here !
                </Text>
              </Stack>
            </div>
            <div>
              <Group justify="right">
                <Stack gap={0} align="flex-start">
                  <Button
                    variant="transparent"
                    leftSection={<IconBrandGmail color="red" />}
                    c={"black"}
                    //   fz={"lg"}
                  >
                    bagasbanuna12@gmail.com
                  </Button>
                  <Button
                    variant="transparent"
                    leftSection={<IconBrandInstagram color="orange" />}
                    c={"black"}
                    //   fz={"lg"}
                  >
                    bagasbanuna
                  </Button>
                </Stack>
              </Group>
            </div>
          </SimpleGrid>
        </Stack>
        <Center mt={100}>
          <Text>Website by BanunaStudio © 2024</Text>
        </Center>
      </Stack>
    </>
  );
}
