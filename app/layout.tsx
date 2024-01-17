import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ActiveContextProvider } from "@/context/ActiveSectionContext";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "this is my simple portfolio application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ActiveContextProvider>
        <div className="container">
          <Navbar />
          {children}
        </div>
        </ActiveContextProvider>
      </body>
    </html>
  );
}
