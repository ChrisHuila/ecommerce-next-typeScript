import ProductsProvaider from "@/context/productsContext";

import "./normalize.css";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Commerce",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ProductsProvaider>
                    {children}
                    <Footer />
                </ProductsProvaider>
            </body>
        </html>
    );
}
