import { Inter } from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MS CLUB OF SLIIT",
  description: "A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <ToastContainer />
      </body>
    </html>
  );
}
