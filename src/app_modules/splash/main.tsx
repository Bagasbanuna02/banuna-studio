"use client";

import { RouterHome } from "@/app/lib/router_home";
import { Stack, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function SplashMain() {
    const router = useRouter();
    useShallowEffect(() => {
      setTimeout(() => router.push(RouterHome.home_main), 1000);
    }, []);
  return (
    <>
      <Stack align="center" justify="center" h={"100vh"}>
        <Title order={2}>Welcome to</Title>
        <Title order={1}>Banuna Studio</Title>
      </Stack>
    </>
  );
}
