import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#0F60AD", // color principal
      // brand colors
      background: "#1d1d1d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
