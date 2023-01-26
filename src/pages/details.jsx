import Roadmap from "../components/roadmap";
import Footer from "../components/footer";
import Action from "../components/actions";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <Roadmap />
      <Footer />
    </motion.div>
  );
};

export default Details;
