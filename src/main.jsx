import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./style.css";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.900", "gray.900")(props),
    },
  }),
};

const theme = extendTheme({
  fonts: {
    heading: "Ramadan",
  },
  styles,
});

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
