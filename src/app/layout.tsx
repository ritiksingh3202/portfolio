import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { MotionShell } from "@/components/motion/MotionShell";

export const metadata: Metadata = {
  title: "Portfolio | Premium Full Stack Developer",
  description: "Modern Full Stack Developer and Mobile App Specialist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <MotionProvider>
          <MotionShell>{children}</MotionShell>
        </MotionProvider>
      </body>
    </html>
  );
}
