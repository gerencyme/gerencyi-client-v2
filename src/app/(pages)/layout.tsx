import { Providers } from 'src/app/providers'
import '../../global/globals.css'
import { Main, Toast } from '@shared/components'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="scroll-smooth antialiased">
        <Providers>
          <Main>
            {children}
            <Toast />
          </Main>
        </Providers>
      </body>
    </html>
  )
}
