import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTelegram, FaTwitter, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "blackAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"blackAlpha.800"}
      border={"0.5px solid"}
      borderColor={"red.500"}
      position="fixed"
      bottom={0}
      width={"100%"}
      height={"4%"}
      zIndex={2}>
      <Container
        fontFamily="Ramadan"
        as={Stack}
        maxW={"6xl"}
        py={1}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}>
        <Text color="gray.200">
          © 2022 <Link to="/">Blood Money</Link>. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter fontSize={"25px"} color="red" />
          </SocialButton>
          <SocialButton label={"Medium"} href={"#"}>
            <FaMedium fontSize={"25px"} color="red" />
          </SocialButton>
          <SocialButton label={"Telegram"} href={"#"}>
            <FaTelegram fontSize={"25px"} color="red" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
