import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/libs/Provider/Provider";
import { Toaster } from "sonner";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood-Donation",
  description:
    "The primary purpose of our website is to facilitate life-saving blood donations by providing a reliable and user-centric platform. We aim to bridge the gap between donors and recipients, ensuring that blood is available when and where it&rsquos needed most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            {children}
            <Toaster />
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
