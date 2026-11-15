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
  title: "Phase 02 · VAD + STT · Scaling Local AI · UbuCon India 2026",
  description:
    "Silero VAD + Whisper speech-to-text for the Scaling Local AI workshop at UbuCon India 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UbuconBar phase="02" sparkChecks={["/api/transcribe"]} />
        {children}
      </body>
    </html>
  );
}
