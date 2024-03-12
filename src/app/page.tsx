import Image from "next/image";
import { CardHoverEffectDemo } from "./components/Hover-Card";
import GrommetIconsCode from "./components/Icons/GrommetIconsCode";
import MdiShieldAccount from "./components/Icons/MdiShieldAccount";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import cloudPractitionier from "/public/Images/Cloud_Practitioner.png";
import UdemyNext from "/public/Images/UdemyNext.png";
import SolutionsArchitect from "/public/Images/SolutionsArchitect.png";
import ImageEmmanuel from "/public/Images/ImageEmmanuel.png";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
        <Navbar />
      </header>
      <main>
        <Section />

        <section
          id="Proyectos"
          className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
        >
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <GrommetIconsCode />
            Proyectos
          </h2>
          <CardHoverEffectDemo />
        </section>

        <section
          id="About"
          className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
        >
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <MdiShieldAccount />
            Sobre mí
          </h2>
          <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
            <div className="[&>p]:mb-4 [&>p>strong]:text-red-400 dark:[&>p>strong]:text-red-400 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
              <p>
                Soy Emmanuel Anguiano. Empecé a programar en la pandemia del
                2020, quería aprender cosas nuevas y tener nuevos retos. Soy
                graduaro de la carrera de Tecnologías de Internet de mi cuidad,
                en donde descubrí mi pasión por el desarrollo web.
              </p>
              <p>
                Entre mis éxitos destaco mis pequeños proyectos que he hecho y
                mis certificaciones que tengo, las cuales son:
              </p>
              <p className="flex items-center justify-center space-x-4 mr-10">
                <Image
                  src={cloudPractitionier}
                  width={150}
                  height={150}
                  alt="Cloud Practitioner"
                />
                <Image
                  src={UdemyNext}
                  width={150}
                  height={150}
                  alt="Udemy Next"
                />
                <Image
                  src={SolutionsArchitect}
                  width={150}
                  height={150}
                  alt="Solutions Architect"
                />
              </p>
              <p>
                En 2023 participé en un proyecto de una empresa de logistica
                para el puerto de Manzanillo, Colima, en el cual fui el
                encargado de diseñar y hacer funcionar su página y un sistema de
                logistica en Visual Basic. Fue un reto muy importante para mí ya
                que era mi primera vez como desarrollador y trabajando en
                conjunto a otra persona.{" "}
                <strong>
                  Fue muy bueno estar ahí ya que me sirvió como experencía para
                  ver la realidad de este grandioso mundo.
                </strong>
              </p>
              <p>
                Actualmente me desempeño como Desarrollador Frontend en la
                empresa Mxmart Solutions en donde he participado en algunos
                proyectos. También estudio para obtener mis certificaciones y
                aprender mas sobre React, Next y cualquier otra tecnología que me
                motive a seguir adelante.
              </p>
            </div>
            <Image
              src={ImageEmmanuel}
              height={368}
              width={792}
              alt="Emmanuel Anguiano"
              className="order-1 object-cover w-64 h-full p-1 md:order-2 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "
            />
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
