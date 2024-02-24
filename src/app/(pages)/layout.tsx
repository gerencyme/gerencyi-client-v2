import "../../global/globals.css";
import { Main, Toast } from "@shared/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="scroll-smooth">
        <Main>
          {children}
          <Toast />
        </Main>
      </body>
    </html>
  );
}
