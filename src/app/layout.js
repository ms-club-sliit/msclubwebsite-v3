import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MS CLUB OF SLIIT",
  description:
    "A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.",
};

export default function RootLayout({ children }) {
  const themeScript = `
    (function () {
      try {
        var savedTheme = localStorage.getItem("theme");
        var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = savedTheme || (systemPrefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}