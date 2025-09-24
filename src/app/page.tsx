import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero",
  description: "Aprendendo Next JS do zero com Sujeito programador",
  openGraph: {
    title: "Aprendendo Next no youtube",
    description: "Aprendendo Nextjs do zero com o Sujeito programador",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const revalidate = 60;

export default function Home() {
  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1>Page Home</h1>
      <h2>Numero gerado: {randomNumber}</h2>
    </div>
  );
}
