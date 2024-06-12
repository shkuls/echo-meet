import "@/styles/globals.css";
import { SocketProvider } from "@/context/socket";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>

      <Component {...pageProps} />
    </SocketProvider>
  )
  ;
}
