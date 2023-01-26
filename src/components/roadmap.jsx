import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Spinner,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { FaCircleNotch } from "react-icons/fa";

function StatsCard(props) {
  const { title, stat1, stat2, stat3, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.500", "gray.500")}
      rounded={"lg"}
      bg={"gray.300"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat1}
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat2}
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat3}
          </StatNumber>
          {props.stat4 && (
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              {props.stat4}
            </StatNumber>
          )}
        </Box>
        <Box my={"auto"} color={"gray.100"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Roadmap() {
  return (
    <Box
      h={"100%"}
      w={"100vw"}
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      bg={"gray.900"}
      py={{ base: 10, md: 40 }}
      justifyContent="center">
      <chakra.h1
        textAlign={"center"}
        fontSize={"3xl"}
        py={10}
        color="gray.200"
        fontWeight={"bold"}>
        Roadmap
      </chakra.h1>
      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 1 }}
          spacing={{ base: 5, lg: 8 }}
          maxW={"550px"}>
          <StatsCard
            title={"Blasphemy"}
            stat1={"Lock + Renounce"}
            stat2={" Open Telegram + Twitter"}
            stat3={"Website v1 Reveal"}
            icon={<Spinner color="green.500" size={"xl"} />}
          />
          <StatsCard
            title={"Rebirth"}
            stat1={"‘Sangre’ Community Blood Drive"}
            stat2={" Buybacks and Competitions"}
            stat3={"Core Team Onboarding "}
            icon={<Spinner color="green.500" size={"xl"} />}
          />
          <StatsCard
            title={"Deliverance"}
            stat1={"Strategic Marketing Initiation"}
            stat2={" Sangre Ecosystem FaaS Launch"}
            stat3={"Web v2 + DApp Release"}
            icon={<Spinner color="green.500" size={"xl"} />}
          />
          <StatsCard
            title={"Sanctification"}
            stat1={"Whitepaper Release "}
            stat2={"Community Treasury and DAO Initiation"}
            stat3={"Multi-Chain Bridging"}
            stat4={"CMC + CG, Trending, Listings"}
            icon={<Spinner color="green.500" size={"xl"} />}
          />
        </SimpleGrid>
      </Center>
      <Flex width={"100vw"} justifyContent={"center"} marginTop={20}>
        <Button
          rounded={"sm"}
          px={9}
          height={"2%"}
          bg={"gray.600"}
          color={"gray.300"}
          _hover={{ bg: "gray.700" }}>
          <Link to="/">Return</Link>
        </Button>
        <Button
          height={"2%"}
          rounded={"sm"}
          px={9}
          colorScheme={"red"}
          bg={"red.700"}
          _hover={{ bg: "red.500" }}
          fontFamily="Ramadan">
          Atone
        </Button>
      </Flex>
    </Box>
  );
}
