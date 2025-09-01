import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Frafol",
  description: "FRAFOL - FRAFOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <NextTopLoader
          color="#273D62"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease-in-out"
          speed={200}
          shadow="0 0 10px #273D62,0 0 5px #273D62"
          template='<div className="bar" role="bar"><div className="peg"></div></div> 
  <div className="spinner" role="spinner"><div className="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Toaster position="top-center" richColors />
        <AntdRegistry>
          <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
