'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Blog and Book Store",
    description:
      "Este proyecto es una plataforma integral que ofrece a los usuarios una experiencia completa relacionada con el campo de la programación y la educación tecnológica. Puedes ver los últimos blogs y comprar libros.",
    link: "https://github.com/emmanuelanguiano12/Nex13-Strapi-Back-Front",
  },
  {
    title: "URL Shortener App",
    description:
      "Este proyecto utiliza React y Vite. Puede ingresar su URL y esta aplicación generará una URL más corta con el dominio de la aplicación.",
    link: "https://github.com/emmanuelanguiano12/react-firebase9-router6-vite",
  },
  {
    title: "Realtime Chat",
    description:
      "Este proyecto es una aplicación de chat en tiempo real, utiliza Firebase como base de datos en tiempo real y React como frameworok.",
    link: "https://github.com/emmanuelanguiano12/RealTimeChat-Firebase",
  },
  {
    title: "Todo App",
    description:
      "Esta es una aplicación Todo donde puedes agregar tareas o eliminarlas. Utiliza Next, Prisma, MongoDB, Clerk para la autenticación y Flowbite para Front.",
    link: "https://github.com/emmanuelanguiano12/clerk-prisma-zod-next",
  },
];
