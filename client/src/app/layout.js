import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Providers from "@/providers/ThemeProvider";
import { UserProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider>
            <Providers>
              <div className="container">
                <div className="wrapper">
                  <NavBar />
                  <ToastContainer />
                  {children}
                  <Footer />
                </div>
              </div>
            </Providers>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
