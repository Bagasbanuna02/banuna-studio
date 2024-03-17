"use client";

import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Drawer,
  Flex,
  Grid,
  Group,
  NavLink,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  IconAlbum,
  IconHeartbeat,
  IconHome,
  IconPhone,
} from "@tabler/icons-react";
import ContactMeView from "../contact/contact_me";

export default function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [opened, { toggle }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();

  const listPage = [
    {
      id: 1,
      title: "Home",
      route: 0,
      icon: <IconHome size={35} />,
    },
    {
      id: 2,
      title: "About",
      route: 800,
      icon: <IconHeartbeat size={35} />,
    },
    {
      id: 3,
      title: "Portofolio",
      route: 1400,
      icon: <IconAlbum size={35} />,
    },
    {
      id: 4,
      title: "Contact Me",
      route: 10000,
      icon: <IconPhone size={35} />,
    },
  ];

  const gradient =
    "linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";

  return (
    <>
      <AppShell
      // padding={"md"}
      // header={{ height: 80 }}
      // footer={{ height: 200 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: "sm",
      //   collapsed: { mobile: !opened },
      // }}
      >
        <AppShell.Header style={{ borderStyle: "none" }} bg={"transparent"}>
          {/* Mobile view */}
          {/* <Center>
            <Paper radius={"xl"}>
              <Group
                hiddenFrom="md"
                justify="center"
                align="center"
                h={50}
                px={"md"}
                bg={scroll.y > 700 ? "cyan" : "transparent"}
              >
                <Text
                  variant="gradient"
                  gradient={
                    scroll.y > 700
                      ? { from: "white", to: "white", deg: 180 }
                      : { from: "indigo", to: "cyan", deg: 145 }
                  }
                  // bg={"white"}
                  fw={"bolder"}
                  fz={"xl"}
                >
                  Banuna Studio
                </Text>
              </Group>
            </Paper>
          </Center> */}

          {/* Web view */}
          <Center mt={"xl"}>
            <Paper
              withBorder
              styles={{
                root: {
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: scroll.y > 750 ? "skyblue" : "darkblue",
                  transition: "0.5s",
                  backgroundColor: scroll.y > 750 ? "darkblue" : "white",
                  opacity: "0.9",
                },
              }}
              radius={"xl"}
            >
              <Group
                justify="space-between"
                gap={100}
                visibleFrom="md"
                // align="center"
                h={60}
                px={"xl"}
              >
                <Text
                  styles={{
                    root: {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => scrollTo({ y: 0 })}
                  variant="gradient"
                  gradient={
                    scroll.y > 750
                      ? { from: "skyblue", to: "white", deg: 180 }
                      : { from: "skyblue", to: "darkblue", deg: 180 }
                  }
                  // c={"white"}
                  fw={"bolder"}
                  fz={30}
                >
                  Banuna Studio
                </Text>

                <Group>
                  {listPage.map((e, k) => (
                    <Button
                      bg={
                        scroll.y > 750
                          ? active === k
                            ? "white"
                            : "transparent"
                          : active === k
                          ? "darkblue"
                          : "transparent"
                      }
                      key={e.id}
                      radius={"xl"}
                      variant={active === k ? "outline" : "transparent"}
                      onClick={() => {
                        setActive(k);
                        scrollTo({ y: e.route });
                      }}
                      c={
                        scroll.y > 750
                          ? active === k
                            ? "black"
                            : "white"
                          : active === k
                          ? "white"
                          : "black"
                      }
                      style={{ transition: "0.3s" }}
                    >
                      {e.title}
                    </Button>
                  ))}
                </Group>
              </Group>
            </Paper>
          </Center>
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
