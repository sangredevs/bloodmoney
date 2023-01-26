import {
  Container,
  Heading,
  Center,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Center width={"100vw"} bg={"gray.900"}>
      <Container>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontFamily="Ramadan"
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            style={{
              color: "#fff",
              textShadow:
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #DC143C, 0 0 40px #DC143C, 0 0 50px #DC143C, 0 0 60px #DC143C, 0 0 70px #DC143C",
            }}>
            HUDUD{" "}
            <Text as={"span"} color={"red.700"}>
              5:38
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"} fontSize={"xl"}>
            As to the thief, male or female, cut off his or her hands: a
            punishment by way of example, from{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan"></Text>,
            for their crime: and{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan"></Text> is
            Exalted in power.
          </Text>
          <Text color={"gray.400"}>
            And it shall be so,{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              if:
            </Text>
          </Text>
          <Text color={"gray.500"} maxW={"3xl"}>
            it had not been procured as spoils of war{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (mughannam)
            </Text>{" "}
            <br />
            nor from the public treasury <br />
            and it was taken by his own hand <br />
            not by some tool or mechanism{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (āla)
            </Text>{" "}
            <br />
            on his own <br />
            solely <br />
            while he was of sound mind <br />
            and of age <br />
            and a Muslim <br />
            and free <br />
            not in the Haram <br />
            in Mecca <br />
            and not in the Abode of War <br />
            and he is not one who is granted access to it from time to time{" "}
            <br />
            and he stole from someone other than his wife <br />
            and not from a uterine relative <br />
            and not from her husband if it is a woman <br />
            when he was not drunk <br />
            and not compelled by hunger <br />
            or under duress <br />
            and he stole some property that was owned <br />
            and would be permissible to sell to Muslims <br />
            and he stole it from someone who had not wrongfully appropriated it{" "}
            <br />
            and the value of what he stole reached three dirhams <br />
            of pure silver <br />
            by the Meccan weight <br />
            and it was not meat <br />
            or any slaughtered animal <br />
            nor anything edible <br />
            or potable <br />
            or some fowl <br />
            or game <br />
            or a dog <br />
            or a cat <br />
            or animal dung <br />
            or feces{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (ʿadhira)
            </Text>{" "}
            <br />
            or dirt <br />
            or red ochre{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (maghara)
            </Text>{" "}
            <br />
            or arsenic{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (zirnīkh)
            </Text>{" "}
            <br />
            or pebbles <br />
            or stones <br />
            or glass <br />
            or coals <br />
            or firewood <br />
            or reeds{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (qaṣab)
            </Text>{" "}
            <br />
            or wood <br />
            or fruit <br />
            or a donkey <br />
            or a grazing animal <br />
            or a copy of the Quran <br />
            or a plant pulled up from its roots{" "}
            <Text as={"span"} color={"red.700"} fontFamily="Ramadan">
              (min badā’ihi)
            </Text>{" "}
            <br />
            or produce from a walled garden <br />
            or a tree <br />
            or a free person <br />
            or a slave <br />
            if they are able to speak and are of sound mind <br />
            and he had committed no offense against him <br />
            before he removed him from a place where he had not been permitted
            to enter <br />
            from his secure location <br />
            by his own hand <br />
            and witness is born <br />
            to all of the above <br />
            by two witnesses <br />
            who are men <br />
            according to [the requirements and procedure] that we already
            presented in the chapter on testimony <br />
            and they did not disagree <br />
            or retract their testimony <br />
            and the thief did not claim that he was the rightful owner of what
            he stole <br />
            and his left hand is healthy <br />
            and his foot is healthy <br />
            and neither body part is missing anything <br />
            and the person he stole from does not give him what he had stolen as
            a gift <br />
            and he did not become the owner of what he stole after he stole it{" "}
            <br />
            and the thief did not return the stolen item to the person he stole
            it from <br />
            and the thief did not claim it <br />
            and the thief was not owed a debt by the person he stole from equal
            to the value of what he stole <br />
            and the person stolen from is present [in court] <br />
            and he made a claim for the stolen property <br />
            and requested that amputation occur <br />
            before the thief could repent
            <br />
            and the witnesses to the theft are present
            <br />
            and a month had not passed since the theft occurred.
            <br />
          </Text>
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
        </Stack>
      </Container>
    </Center>
  );
}
