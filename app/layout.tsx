/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "MajorBio AI Assistant",
  description: "Your personal ChatGPT AI Assistant.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
    { media: "(prefers-color-scheme: amour)", color: "#fafafa" },
    { media: "(prefers-color-scheme: hubspot)", color: "#151515" },
    { media: "(prefers-color-scheme: authentic)", color: "#fafafa" },
    { media: "(prefers-color-scheme: tiktok)", color: "#151515" },
  ],
  appleWebApp: {
    title: "MajorBio AI Assistant",
    statusBarStyle: "default",
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
