import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하세요.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#fdf8f1] via-[#fbeee3] to-[#f7dccb] bg-fixed font-sans text-stone-800 antialiased dark:from-stone-950 dark:via-stone-900 dark:to-[#2a1d17] dark:text-stone-100">
        {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/10" />
          <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/10" />
          <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/10" />
        </div>
        {children}
      </body>
    </html>
  );
}
