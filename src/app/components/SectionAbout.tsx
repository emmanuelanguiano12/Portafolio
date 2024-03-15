import Image from "next/image"
import MdiShieldAccount from "./Icons/MdiShieldAccount"
import cloudPractitionier from "/public/Images/Cloud_Practitioner.png";
import UdemyNext from "/public/Images/UdemyNext.png";
import SolutionsArchitect from "/public/Images/SolutionsArchitect.png";
import ImageEmmanuel from "/public/Images/ImageEmmanuel.png";

export const SectionAbout = () => {
  return (
    <>
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
                graduado de la carrera de Tecnologías de Internet de mi cuidad,
                en donde descubrí mi pasión por el desarrollo web.
              </p>
              <p>
                Entre mis éxitos destaco mis pequeños proyectos que he hecho y
                mis certificaciones que tengo, las cuales son:
              </p>
              <p className="flex flex-wrap justify-center space-y-4 md:space-y-2 md:space-x-4">
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
                En 2023 participé en un proyecto de una empresa de logística
                para el puerto de Manzanillo, Colima, en el cual fui el
                encargado de diseñar y hacer funcionar su página web y un sistema de
                control de logística en Visual Basic. Fue un reto muy importante para mí ya
                que era mi primera vez como desarrollador y trabajando en
                conjunto con otra persona.{" "}
                <strong>
                  Fue muy bueno estar ahí ya que me sirvió como experencía para
                  ver la realidad de este grandioso mundo.
                </strong>
              </p>
              <p>
                Actualmente me desempeño como Desarrollador Frontend en la
                empresa Mxmart Solutions en donde he participado en algunos
                proyectos. También estudio para obtener más certificaciones y
                aprender más sobre React, Next y cualquier otra tecnología que me
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
    </>
  )
}
