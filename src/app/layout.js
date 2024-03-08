import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "./sections";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "John Doe Portfolio",
  desciption: "A showcase Portfolio Website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
