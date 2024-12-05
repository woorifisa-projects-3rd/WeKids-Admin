import Header from "./_components/Header";
import "./globals.css";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Wekids 관리자",
  description: "Wekids 관리자 페이지",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="w-full h-full">
      <body className="flex flex-col w-full h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
