import type { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { AnimatedPage } from "@/components/AnimatedPage";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "User View",
  description: "user view application"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
        <AnimatedPage>
          <main className="pt-6">{children}</main>
        </AnimatedPage>
        <Toaster position="bottom-right" richColors />
      </ThemeProvider>
      </body>
    </html>
  );
}
