import Action from "../components/actions";
import { CTA } from "../components/CTA";
import Footer from "../components/footer";
import { Video } from "../components/video";
import { Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}>
    <Suspense fallback={<Spinner />}>
      <Video />
    </Suspense>
    <CTA />
    <Action />
    <Footer />
  </motion.div>
);
export default Home;
