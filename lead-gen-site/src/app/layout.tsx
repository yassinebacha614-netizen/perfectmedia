import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PipelinePro — Lead Generation Agency",
  description:
    "We help B2B companies generate qualified leads through SEO, paid ads, and email marketing. Get your free audit today.",
  keywords: ["lead generation", "SEO", "paid ads", "email marketing", "B2B leads"],
  openGraph: {
    title: "PipelinePro — Lead Generation Agency",
    description:
      "We help B2B companies generate qualified leads through SEO, paid ads, and email marketing.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
