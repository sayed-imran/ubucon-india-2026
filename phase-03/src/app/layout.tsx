import type { Metadata } from "next";
// Self-hosted Ubuntu Sans / Ubuntu Sans Mono / Ubuntu: bundled by npm install, no font CDN,
// so the UI looks the same with the internet unplugged.
import "@fontsource-variable/ubuntu-sans";
import "@fontsource-variable/ubuntu-sans-mono";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "./globals.css";
import UbuconBar from "@/components/UbuconBar";

export const metadata: Metadata = {
  title: "Phase 03 · Chat · Scaling Local AI · UbuCon India 2026",
  description:
    "Speak to Gemma 4 on a DGX Spark in the room and read its reply: Silero VAD, Whisper STT, text-only answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UbuconBar phase="03" sparkChecks={["/api/transcribe", "/api/chat"]} />
        {children}
      </body>
    </html>
  );
}
