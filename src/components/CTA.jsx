import { Container, Stack, Heading, Text } from "@chakra-ui/react";
export const CTA = () => (
  <Container maxW={"5xl"} zIndex={1} position="relative">
    <Stack
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 8 }}>
      <Text
        style={{
          color: "#fff",
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #DC143C, 0 0 40px #DC143C, 0 0 50px #DC143C, 0 0 60px #DC143C, 0 0 70px #DC143C",
        }}
        position={"relative"}
        fontFamily="Ramadan"
        as={"span"}
        color={"red.700"}
        fontSize={"5xl"}>
        $SANGRE
      </Text>
      <Heading
        style={{
          color: "#fff",
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #9400D3, 0 0 40px #9400D3, 0 0 50px #9400D3, 0 0 60px #9400D3, 0 0 70px #9400D3",
        }}
        color={"red.800"}
        fontFamily="Ramadan"
        fontWeight={300}
        fontSize={{ base: "3xl", sm: "4xl", md: "9xl" }}
        lineHeight={"110%"}>
        BLOOD MONEY{" "}
      </Heading>
    </Stack>
  </Container>
);
