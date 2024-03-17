"use client";

import {
  AspectRatio,
  Box,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import HomeView from "../home/home";
import AboutView from "../about/about";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import ContactMeView from "../contact/contact_me";
import PortofolioView from "../portofolio/portofolio";

export default function MainHome() {
  // const [reload, setReload] = useState(true);
  // useShallowEffect(() => {
  //   if (window.document !== undefined) return setReload(false);
  // }, []);

  return (
    <>
      <HomeView />
      <AboutView />
      <PortofolioView/>
      <ContactMeView/>
    </>
  );
}
