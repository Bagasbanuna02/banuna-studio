"use client"
import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";

export default function Coba (){
    return (
      <>
        <Carousel
          withIndicators
          height={200}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          <Carousel.Slide>
            <Box h={200} w={200} p={"lg"} bg={"blue"}>
              1
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box h={200} w={200} p={"lg"} bg={"blue"}>
              2
            </Box>
          </Carousel.Slide>{" "}
          <Carousel.Slide>
            <Box h={200} w={200} p={"lg"} bg={"blue"}>
              3
            </Box>
          </Carousel.Slide>
        </Carousel>
      </>
    );
}