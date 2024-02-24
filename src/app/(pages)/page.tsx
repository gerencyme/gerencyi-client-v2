import { AuthCard } from "@features/AuthCard";
import { AnimatedLogo } from "@features/AnimatedLogo";

export default function Home() {
  return (
    <>
      <AnimatedLogo.g />
      <AnimatedLogo.title slug="Conectando Empresas, Maximizando Economias: Sua Solução Centralizada para Pedidos, Preços e Eficiência." />
      <div className="flex gap-2 w-fit m-auto py-5 md:py-11">
        <AuthCard.root>
          <AuthCard.label text="Entre na rede da GerencyI" />
          <AuthCard.logo />
          <AuthCard.form.auth />
        </AuthCard.root>
      </div>
    </>
  );
}
