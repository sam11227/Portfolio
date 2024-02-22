import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
const poppins = Poppins({
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  subsets: [],
});
export const metadata: Metadata = {
  title: "Salman Rasool",
  description: "Generated by Salman Rasool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}, antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}