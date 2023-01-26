import Hero from "../components/hero";
import Footer from "../components/footer";
import Action from "../components/actions";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box width={"100vw"} height={"100vh"} bg={"gray.900"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <Hero />
        <Footer />
      </motion.div>
    </Box>
  );
};

export default About;
